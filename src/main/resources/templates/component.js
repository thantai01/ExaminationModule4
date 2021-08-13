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
                    </tr>`
            for(let i=0;i<cities.content.length;i++) {
                html+= `<tr><td>${cities.content[i].cityName}</td>`
                html+= `<td>${cities.content[i].country.countryName}</td>`
                html+= `<td>${cities.content[i].gpd}</td>`
                html+= `<td>${cities.content[i].population}</td>`
                html+= `<td>${cities.content[i].square}</td>`
                html+= `<td>${cities.content[i].description}</td></tr>`
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
            for(let i=0;i<countries.length;i++) {
                html+=`<option>----Select----</option>`;
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
    html += `<form>
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
        <select  id="country" class="form-control"></select>
        <label class="form-label" for="country">Country</label>
      </div>
    </div>
  </div>
  
   <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
       <div class="col">
      <div class="form-outline">
        <input type="text" id="GPD" class="form-control" />
        <label class="form-label" for="GPD">GDP</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="population" class="form-control" />
        <label class="form-label" for="population">Population</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Square</label>
      </div>
    </div>
  </div>
  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

</form>`

}