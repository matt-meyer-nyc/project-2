// window.onload = function () {
//   console.log("giddyup");
//   var key = 'AIzaSyDg4L8NzeMP2Xc6t2DshSTbfKp9KA4wyIw'
//
//
//
//
//
//    var submitO = document.getElementById('submit-buttonO')
//    submitO.addEventListener("click", function (e) {
//      e.preventDefault()
//
//      newInput = document.createElement('input')
//      document.body.appendChild(newInput)
//      newInput.setAttribute('id','newInput')
//      newInput.type = "text";
//      newInput.placeholder = "Where's the Show"
//      newButton = document.createElement('button')
//      document.body.appendChild(newButton)
//      newButton.setAttribute('id','newButton')
//      newButton.innerText = "Submit";
//
//      var apiInputO = document.getElementById('origin')
//      var usersOrigin = apiInputO.value
//
//        var queryO = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + usersOrigin + '&' + key
//        $.ajax({
//        url: queryO
//        }).done(function(responseO) {
//        console.log(responseO)
//        var originCityPhoto = document.createElement('iframe')
//        document.body.appendChild(originCityPhoto)
//        originCityPhoto.setAttribute('id','originCityPhoto')
//        originCityPhoto.src = "http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersOrigin.split(",")[0] + ';width=450&amp;height=400&amp;delay=4.0'
//        console.log(usersOrigin.split(",")[0])
//        originCityPhoto.height = '300'
//        originCityPhoto.allowtransparency= "true"
//
//
//
//
//          newButton.addEventListener("click", function (e) {
//          e.preventDefault()
//          var apiInputD = document.getElementById('newInput')
//          var usersDestination = apiInputD.value
//          console.log(usersDestination)
//          var queryD = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + usersDestination + '&' + key
//          console.log(usersDestination)
//          $.ajax({
//          url: queryD
//          }).done(function(responseD) {
//          console.log(responseD)
//          var destinationCityPhoto = document.createElement('iframe')
//          document.body.appendChild(destinationCityPhoto)
//          destinationCityPhoto.setAttribute('id','destinationCityPhoto')
//          destinationCityPhoto.src = "http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersDestination.split(",")[0] + ';width=450&amp;height=400&amp;delay=4.0'
//          console.log(usersDestination.split(",")[0])
//          destinationCityPhoto.height = '300'
//          destinationCityPhoto.allowtransparency= "true"
//
//          var directionsButton = document.createElement('button')
//          document.body.appendChild(directionsButton)
//          directionsButton.setAttribute('id','directionsButton')
//          directionsButton.innerText = "Driving Directions";
//
//
//
// })
// })
// })
// })
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //end window.onload
//
//
//
//       //   function initialize() {
//       //   var fenway = {lat: responseO.results[0].geometry.location.lat, lng: responseO.results[0].geometry.location.lng};
//       //   var map = new google.maps.Map(document.getElementById('map'), {
//       //     center: fenway,
//       //     zoom: 14
//       //   });
//       //   var panorama = new google.maps.StreetViewPanorama(
//       //       document.getElementById('pano'), {
//       //         position: fenway,
//       //         pov: {
//       //           heading: 34,
//       //           pitch: 10
//       //         }
//       //       });
//       //   map.setStreetView(panorama);
//       // }





//////////////////////////////////////////////////////////////////////////

// console.log(responseO.results[0].geometry.location.lat);
//
// var directionsDisplay;
// console.log(directionsDisplay)
// var directionsService = new google.maps.DirectionsService();
// var map;
// console.log(map)
//
// window.initMap = function () {
// directionsDisplay = new google.maps.DirectionsRenderer();
// var begin = new google.maps.LatLng(responseO.results[0].geometry.location.lat, responseO.results[0].geometry.location.lng);
// console.log(responseO.results[0].geometry.location.lat);
// var mapOptions = {
//   zoom:7,
//   center: begin
// }
// console.log(responseO.results[0].geometry.location.lat);
// console.log(initialize);
// map = new google.maps.Map(document.getElementById("map"), mapOptions);
// directionsDisplay.setMap(map);
// }
//
// function calcRoute() {
// var start = new google.maps.LatLng(responseO.results[0].geometry.location.lat, responseO.results[0].geometry.location.lng)
// var end = new google.maps.LatLng(responseD.results[0].geometry.location.lat, responseD.results[0].geometry.location.lng)
// var request = {
//   origin:start,
//   destination:end,
//   travelMode: google.maps.TravelMode.DRIVING
// };
// directionsService.route(request, function(result, status) {
//   if (status == google.maps.DirectionsStatus.OK) {
//     directionsDisplay.setDirections(result);
//   }
// });
// }
