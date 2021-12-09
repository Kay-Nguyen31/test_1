var API = "https://vapi.vnappmob.com/api/province/";



    fetch(API)
    .then(function(respone){
        return respone.json();
    })
    .then(function(respone){
        document.getElementById('app').innerHTML = `<p> ${respone.province_name} </p>`
    })
