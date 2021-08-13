function printCountryTable() {
    $.ajax({
        type: "GET",
        url:  "http://localhost:8080/api/countries",
        success: function (countries) {
            console.log(countries)
            let html = `<table class="table">`;
            html += `<tr>
                        <th>Country Name</th>
                    </tr>`
            for(let i=0;i<countries.length;i++) {
                html+= `<tr><td>${countries[i].countryName}</td></tr>`
            }
            html += `</table>`
            document.getElementById("table").innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function printCitiesTable() {
    $.ajax({
        type: "GET",
        url:  "http://localhost:8080/api/cities",
        success: function (cities) {
            console.log(cities)
            let html = `<table class="table">`;
            html += `<tr>
                        <th>City Name</th>
                        <th>Country</th>
                        <th>City GDP</th>
                        <th>City Population</th>
                        <th>City Square</th>
                        <th>City Description</th>
                        <th></th>
                        <th></th>
                    </tr>`
            for(let i=0;i<cities.content.length;i++) {
                html+= `<tr><td>${cities.content[i].cityName}</td>`
                html+= `<td>${cities.content[i].country.countryName}</td>`
                html+= `<td>${cities.content[i].gpd}</td>`
                html+= `<td>${cities.content[i].population}</td>`
                html+= `<td>${cities.content[i].square}</td>`
                html+= `<td>${cities.content[i].description}</td>`
                html+= `<td><button class="btn btn-primary" onclick="printUpdateForm(${cities.content[i].id})">Update</button></td>`
                html+= `<td><button class="btn btn-danger" onclick="deleteCity(${cities.content[i].id})">Delete</button></td></tr>`
            }
            html += `</table>`
            document.getElementById("table").innerHTML = html;

        },
        error: function (error) {
            console.log(error);
        }
    });
}

function renderCountryList() {
    $.ajax({
        type: "GET",
        url:  "http://localhost:8080/api/countries",
        success: function (countries) {
            console.log(countries)
            let html = ``;
            html+=`<select >`
            html+=`<option>----Select----</option>`;
            for(let i=0;i<countries.length;i++) {
                html+=`<option value="${countries[i].id}"> ${countries[i].countryName} </option>`
            }
            html+=`</select>`
            document.getElementById("country").innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function renderCountryById(id) {
    $.ajax({
        type: "GET",
        url:  "http://localhost:8080/api/countries/" + id ,
        success: function (country) {
            console.log(country)
            let html = ``;
            html+=`<select >`
            html+=`<option>----Select----</option>`;
            for(let i=0;i<country.length;i++) {
                html+=`<option value="${countries[i].id}"> ${countries[i].countryName} </option>`
            }
            html+=`</select>`
            document.getElementById("country1").innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function printAddForm() {
    let html = ``;
    html += `
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">City</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <select  id="country" class="form-control" ><option></option></select> 
        <label class="form-label" for="country" >Country</label>
      </div>
    </div>
  </div>
  
   <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
       <div class="col">
      <div class="form-outline">
        <input type="text" id="gdp" class="form-control" /> 
        <label class="form-label" for="gdp">GDP</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="population" class="form-control"  /> 
        <label class="form-label" for="population">Population</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="square" class="form-control" />
        <label class="form-label" for="square">Square</label>
      </div>
    </div>
  </div>
  
  <div class="form-outline mb-4">
    <textarea class="form-control" id="description" rows="4"  ></textarea>
    <label class="form-label" for="description">Description</label>
  </div>
  <!-- Submit button -->
  <button class="btn btn-primary btn-block mb-4" onclick="addCity()">Add to List</button>

`
    document.getElementById("table").innerHTML = html;
}

function addCity() {
    let city = {
        cityName: document.getElementById("form3Example1").value,
        country: {
            id: document.getElementById("country").value
        },
        gpd: document.getElementById("gdp").value,
        square: document.getElementById("square").value,
        population: document.getElementById("population").value,
        description: document.getElementById("description").value,
        image: "URL"
    }
    console.log(city)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type:"POST",
        data: JSON.stringify(city),
        url: "http://localhost:8080/api/cities",
        success: function () {
            alert("Successful added");
            window.location.assign("home.html");
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function deleteCity(id) {
    console.log(id)
    if (confirm("Do you want to delete your selected ?") === true) {
        $.ajax({
            type: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/api/cities/" + id,
            success: function () {
                alert("Successful delete item!!!!");
                printCitiesTable();
                // document.getElementById("view").innerHTML = "";
            }
        })
    }
}

function printUpdateForm(id) {
    let html = "";
    $.ajax ({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/api/cities/" + id + "/detail",
        success: function (city) {
            console.log(city)
                let countryId = city.country.id;
                html += `<div class="row mb-4">
                            <div class="col">
                              <div class="form-outline">
                                <input type="text" id="city1" class="form-control" value="${city.cityName}"/>
                                <label class="form-label" for="city1">City</label>
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-outline">
                                <select  id="country" class="form-control"> <option value="${city.country.countryName}"> </option> </select> 
                                <label class="form-label" for="country" >Country</label>
                              </div>
                            </div>
                          </div>`;

                html += `<div class="row mb-4">
                           <div class="col">
                          <div class="form-outline">
                            <input type="text" id="gdp1" class="form-control" value="${city.gpd}" /> 
                            <label class="form-label" for="gdp1">GDP</label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <input type="text" id="population1" class="form-control"  value="${city.population}" /> 
                            <label class="form-label" for="population1">Population</label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <input type="text" id="square1" class="form-control" value="${city.square}"/>
                            <label class="form-label" for="square1">Square</label>
                          </div>
                        </div>
                      </div>`;
                html += `<div class="form-outline mb-4">
                            <textarea class="form-control" id="description1" rows="4" > ${city.description} </textarea>
                            <label class="form-label" for="description1">Description</label>
                        </div>`;
                html += `<button class="btn btn-primary btn-block mb-4" onclick="putNewCity(${city.id})">Save</button>`;
                renderCountryList();
            document.getElementById("table").innerHTML = html;
        }
    })
}

function putNewCity(id) {
    let city = {
        cityName: document.getElementById("city1").value,
        country: {
            id: document.getElementById("country").value
        },
        gpd: document.getElementById("gdp1").value,
        square: document.getElementById("square1").value,
        population: document.getElementById("population1").value,
        description: document.getElementById("description1").value,
        image: "URL"
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type:"PUT",
        data: JSON.stringify(city),
        url: "http://localhost:8080/api/cities/" + id + "/edit" ,
        success: function () {
            alert("Edited Successfully");
            printCitiesTable();
        },
        error: function (error) {
            console.log(error)
        }
    })
}