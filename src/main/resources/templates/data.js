function createProvinceData() {
    $.ajax({
        type: "GET",
        url:  "https://provinces.open-api.vn/api/p",
        success: function (provinces) {
            for(let i = 0; i < provinces.length;i++) {
                let province = {
                    id: provinces[i].code,
                    name: provinces[i].name,
                    phone_code: provinces[i].phone_code
                }
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    type:"POST",
                    data: JSON.stringify(province),
                    url: "http://localhost:8080/api/provinces",
                    success: function () {
                        console.log("Success")
                    }
                })
            }
        }
    })
}

function createDistrictData() {
    $.ajax({
        type: "GET",
        url:  "https://provinces.open-api.vn/api/d",
        success: function (districts) {
            console.log(districts)
            for(let i = 0; i < districts.length;i++) {
                let district = {
                    id: districts[i].code,
                    name: districts[i].name,
                    province: {
                        id: districts[i].province_code,
                    },
                };
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    type:"POST",
                    data: JSON.stringify(district),
                    url: "http://localhost:8080/api/districts",
                    success: function () {
                        console.log("A")
                    }
                })
            }
        }
    })
}

function createWardData() {
    $.ajax({
        type: "GET",
        url:  "https://provinces.open-api.vn/api/w",
        success: function (wards) {
            console.log(wards)
            for(let i = 0; i < wards.length;i++) {
                $.ajax({
                    type: "GET",
                    url:  "http://localhost:8080/api/districts",
                    success: function (districts) {
                        for (let i = 0; i < districts.length; i++) {
                            if(wards[i].district_code === districts[i].id) {
                                let ward = {
                                    id: wards[i].code,
                                    name: wards[i].name,
                                    district: {
                                        id: wards[i].district_code,
                                        province: {
                                            id: districts[i].province.id,
                                        }
                                    },
                                };
                                $.ajax({
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-type': 'application/json'
                                    },
                                    type:"POST",
                                    data: JSON.stringify(ward),
                                    url: "http://localhost:8080/api/wards",
                                    success: function () {
                                        console.log("A")
                                    }
                                })
                            }
                        }
                    }
                })

            }
        }
    })
}

