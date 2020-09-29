var mymap = L.map('map-container').setView([9.5834, 6.5633], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGFkYW4xMjM0NSIsImEiOiJjazI5amVkZ3EyYWduM2JtemMzc2c1MTA0In0.3uDS3OeJWkTkaVQE1yVd4g'
}).addTo(mymap);

var marker = L.divIcon({
    html: '<i class="fas fa-map-marker-alt"></i>',
    iconSize: [20, 20],
    className: 'marker-icon'
});


var marker = L.marker([9.6034, 6.5633], {
        icon: marker
    }).addTo(mymap);