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
            html+=`<option>----Select----</option>`;
            for(let i=0;i<countries.length;i++) {
                html+=`<option value="${countries[i].id}"> ${countries[i].countryName} </option>`
            }
            document.getElementById("country").innerHTML = html;
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
            for(let i = 0; i < city.length; i++) {
                html += ``

            }
        }
    })
}