window.onload = function () {
  console.log("giddyup");
  var key = 'AIzaSyDg4L8NzeMP2Xc6t2DshSTbfKp9KA4wyIw'
  var venueKey = 'AIzaSyBL4QQWAYuuO5tcygDkOuLoksGrZTHdyjc'





   var submitO = document.getElementById('submit-buttonO')
   submitO.addEventListener("click", function (e) {
     e.preventDefault()

     newInput = document.createElement('input')
     document.body.appendChild(newInput)
     newInput.setAttribute('id','newInput')
     newInput.type = "text";
     newInput.placeholder = "Where's the Show"
     newButton = document.createElement('button')
     document.body.appendChild(newButton)
     newButton.setAttribute('id','newButton')
     newButton.innerText = "Submit";

     var apiInputO = document.getElementById('origin')
     var usersOrigin = apiInputO.value

       var queryO = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + usersOrigin + '&' + key
       $.ajax({
       url: queryO
       }).done(function(responseO) {
       console.log(responseO)
       var originCityPhoto = document.createElement('iframe')
       document.body.appendChild(originCityPhoto)
       originCityPhoto.setAttribute('id','originCityPhoto')
       originCityPhoto.src = "http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersOrigin.split(",")[0] + ';width=450&amp;height=400&amp;delay=4.0'
       console.log(usersOrigin.split(",")[0])
       originCityPhoto.height = '300'
       originCityPhoto.allowtransparency= "true"




         newButton.addEventListener("click", function (e) {
         e.preventDefault()
         var apiInputD = document.getElementById('newInput')
         var usersDestination = apiInputD.value
         console.log(usersDestination)
         var queryD = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + usersDestination + '&' + key
         console.log(usersDestination)
         $.ajax({
         url: queryD
         }).done(function(responseD) {
         console.log(responseD)
         var destinationCityPhoto = document.createElement('iframe')
         document.body.appendChild(destinationCityPhoto)
         destinationCityPhoto.setAttribute('id','destinationCityPhoto')
         destinationCityPhoto.src = "http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersDestination.split(",")[0] + ';width=450&amp;height=400&amp;delay=4.0'
         console.log(usersDestination.split(",")[0])
         destinationCityPhoto.height = '300'
         destinationCityPhoto.allowtransparency= "true"

         var directionsButton = document.createElement('button')
         document.body.appendChild(directionsButton)
         directionsButton.setAttribute('id','directionsButton')
         directionsButton.innerText = "Driving Directions/Clubs In Town";

var origLat = (responseO.results[0].geometry.location.lat);
console.log(responseO.results[0].geometry.location.lat);
var origLng = (responseO.results[0].geometry.location.lng);
console.log(responseO.results[0].geometry.location.lat);
var destinLat = (responseD.results[0].geometry.location.lat);
console.log(responseD.results[0].geometry.location.lat);
var destinLng = (responseD.results[0].geometry.location.lng);
console.log(responseD.results[0].geometry.location.lat);

directionsButton.addEventListener("click", function (e){
  e.preventDefault();

 var originBreak = usersOrigin.split(",")
 var originDir = originBreak[0].split(" ").join("") + '+' + originBreak[1]
 var destinationBreak = usersDestination.split(",")
 var destinationDir = destinationBreak[0].split(" ").join("") + '+' + destinationBreak[1]

  var directions = document.createElement('iframe')
  document.body.appendChild(directions)
  directions.setAttribute('id', 'directions')
  directions.src = "https://www.google.com/maps/embed/v1/directions?key=" + key + "&origin=" + originDir + '&destination=' + destinationDir + '&avoid=tolls|highways'


var venueQuery = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + responseD.results[0].geometry.location.lat + ',' + responseD.results[0].geometry.location.lng + '&radius=32000&type=night_club&key=' + venueKey

$.ajax({
url: venueQuery
  }).done(function(venueResponse) {
    console.log(venueResponse)

   var source = document.getElementById('venue-template').innerHTML;
   var template = Handlebars.compile(source);
   var html = template(venueResponse.results);
   var venueContainer = document.getElementById('venue-container');
   venueContainer.innerHTML = html;


 //ATTEMPT AT GETTING LINKS FOR CLUBS, BUT I THINK GOOGLE WON'T ALLOW IT THIS WAY
  //  var venues = venueResponse.results
  //  var venueName = venueResponse.results.name
   //
  //  for (var i = 0; i < venues.length; i++) {
  //    console.log(venues)
  //    var googleInfo = document.createElement('a')
  //    document.body.appendChild(googleInfo)
  //    googleInfo.setAttribute("id", "googleInfo")
  //    googleInfo.href = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=" + venueName
  //    googleInfo.innerHTML = "More Info From Google"
   //
  //  }




  })

})

})

})
})
})
}

















//end window.onload



      //   function initialize() {
      //   var fenway = {lat: responseO.results[0].geometry.location.lat, lng: responseO.results[0].geometry.location.lng};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     center: fenway,
      //     zoom: 14
      //   });
      //   var panorama = new google.maps.StreetViewPanorama(
      //       document.getElementById('pano'), {
      //         position: fenway,
      //         pov: {
      //           heading: 34,
      //           pitch: 10
      //         }
      //       });
      //   map.setStreetView(panorama);
      // }
