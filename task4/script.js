var mymap = L.map('map-container').setView([9.5990, 6.5633], 13);

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

const InputField = document.querySelector('#search-input');
const ipAddressField = document.querySelector('#ip-addess');
const locationField = document.querySelector('#location');
const timeZoneField = document.querySelector('#time-zone');
const ispField = document.querySelector('#isp');
let localIp

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(json => localIp = json.ip);



const searchIp = async () => {
    let response = await fetch('https://geo.ipify.org/api/v1?apiKey=at_LrBXguLHGJk0OUtLa2SlIUF2oYf50&ipAddress=' + InputField.value);
    let res = await response.json();

    var ipAddress = document.createTextNode(res.ip);
    var location = document.createTextNode(`${res.location.city}, ${res.location.region}`);
    var timeZone = document.createTextNode(res.location.timezone);
    var isp = document.createTextNode(res.isp);

    ipAddressField.innerHTML = "";
    locationField.innerHTML = "";
    timeZoneField.innerHTML = "";
    ispField.innerHTML = "";

    ipAddressField.appendChild(ipAddress);
    locationField.appendChild(location);
    timeZoneField.appendChild(timeZone);
    ispField.appendChild(isp);
};
