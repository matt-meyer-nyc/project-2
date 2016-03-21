
//    var apiInputO = document.getElementById('origin')
//    var usersOrigin = apiInputO.value
//
//    var query = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + usersOrigin + '&' + key;
//
//    $.ajax({
//    url: query
//    }).done(function(responseO) {
//    console.log(responseO)
//
//    var submitD = document.getElementById('submit-buttonD')
//    submitD.addEventListener("click", function () {
//    var apiInputD = document.getElementById('destination')
//    var usersDestination = apiInputD.value
//    var query = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + usersDestination + '&' + key;
//    $.ajax({
//    url: query
//    }).done(function(responseD) {
//    console.log(responseD)
//
//    // console.log(responseD.results[0].geometry.location.lat)
//    // console.log(responseD.results[0].geometry.location.lng)
//
//    $.ajax({
//    url:'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + responseO.results[0].geometry.location.lat + ',' + responseO.results[0].geometry.location.lng + '&' + 'destinations=' + responseD.results[0].geometry.location.lat + ',' + responseD.results[0].geometry.location.lng +'&' + 'key=' + key
//         }).done(function (responseM) {
//               console.log(responseM)
//    })//END MATRIX AJAX FUNCTION
//    $.ajax({
//    url: 'https://maps.googleapis.com/maps/api/directions/json?origin=' + usersOrigin + '&destination=' + usersDestination + 'key=' + key
//    }).done(function(responseDR) {
//          console.log(responseDR)
//    })//END DIRECTIONS AJAX FUNCTION
//
//
// })//END DESTINATION AJAX FUNCTION
// function displayRoute() {
//
//     var start = new google.maps.LatLng(28.694004, 77.110291);
//     var end = new google.maps.LatLng(28.72082, 77.107241);
//
//     var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
//     directionsDisplay.setMap(map); // map should be already initialized.
//
//     var request = {
//         origin : start,
//         destination : end,
//         travelMode : google.maps.TravelMode.DRIVING
//     };
//     var directionsService = new google.maps.DirectionsService();
//     directionsService.route(request, function(response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         }
//     });
// }
// })//END DESTINATION EVENT LISTENER
// })//END ORIGIN AJAX FUNCTION
// })//ORIGIN EVENT LISTENER
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
//           // var templateSource = document.getElementById('candidate-template').innerHTML;
//           // var template = Handlebars.compile(templateSource);
//           //
//           // var computedHtml = template(data);
//           // var nameContainer = document.getElementById('candidate-container');
//           // nameContainer.innerHTML = computedHtml;









// var panorama;
// var outsideGoogle;
// function getReceptionPanoramaData() {
//  return {
//    location: {
//        pano: 'reception',  // The ID for this custom panorama.
// description: 'Google Sydney - Reception',
//      latLng: new google.maps.LatLng(responseO.results[0].geometry.location.lat, responseO.results[0].geometry.location.lng)
//              },
//       links: [{
//     heading: 195,
// description: 'Exit',
//        pano: outsideGoogle.location.pano
//               }],
//   copyright: 'Imagery (c) 2010 Google',
//       tiles: {
//    tileSize: new google.maps.Size(1024, 512),
//   worldSize: new google.maps.Size(2048, 1024),
// centerHeading: 105,
//  getTileUrl: function(pano, zoom, tileX, tileY) {
// return 'https://developers.google.com/maps/documentation/javascript/examples/full/images/' +
//    'panoReception1024-' + zoom + '-' + tileX + '-' + tileY + '.jpg';
//               }
//              }
//             };
//            }
//
// function initPanorama() {
// panorama = new google.maps.StreetViewPanorama(
// document.getElementById('street-view'),
//                       {
// pano: outsideGoogle.location.pano,
// // Register a provider for our custom panorama.
// panoProvider: function(pano) {
// if (pano === 'reception') {
//  return getReceptionPanoramaData();
//                            }
//                           }
//                          });
// panorama.addListener('links_changed', function() {
// if (panorama.getPano() === outsideGoogle.location.pano) {
// panorama.getLinks().push({
// description: 'Google Sydney',
//    heading: 25,
//       pano: 'reception'
// });
// }
// });
// }
//
// function initialize() {
// var streetviewService = new google.maps.StreetViewService;
// streetviewService.getPanorama(
// {location: {lat: responseO.results[0].geometry.location.lat, lng: responseO.results[0].geometry.location.lng}},
// function(result, status) {
// if (status === google.maps.StreetViewStatus.OK) {
// outsideGoogle = result;
// initPanorama();
// }
// });
// }
