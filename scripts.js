$(document).ready(function (){
  ipLookup();
  function showUserDetails(latitude, longitude, additonal){
      var position = latitude + "," + longitude;
      var url = "https://www.google.com/maps/embed/v1/view?center="+position+"&zoom=14&key=AIzaSyDhyRiN-neEaMmD-RVojUjXZvmwYb3Wwkc";
      $("iframe").attr('src', url);
      $("#la").text(latitude);
      $("#long").text(longitude);
      if( typeof additonal != "undefined"){
          $("#where").text(additonal.city.name);  
      }

  }

  function getInfoByCity(cityName){
    for(i=0; i < window.CASES.Data.length; i++) {
        let dataCityName = window.CASES.Data[i]["City/Area"];
        let recovered = window.CASES.Data[i]["Recovered"];
        let confirmed = window.CASES.Data[i]["Confirmed"];
        let deaths = window.CASES.Data[i]["Deaths"];

        if (dataCityName === cityName){
            document.getElementById("Confirmed").textContent= confirmed;
            document.getElementById("Recovered").textContent= recovered;
            document.getElementById("Deaths").textContent= deaths;
        }
        
    }

  }

  function ipLookup(){
    $.get('https://api.userinfo.io/userinfos', function(r){
      showUserDetails(r.position.latitude, r.position.longitude, r);
      getInfoByCity(r.city.name);

    });
  }
  });

