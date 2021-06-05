"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// Using the Geolocation API to find the users current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const home = [51.529337340565476, -0.10292490041692204];

      console.log(`https://www.google.co.uk/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];
      // Leaflet JS library
      // The Second parameter inside setView is the zoom level of the map (1 = Far, 20 = Close)
      const map = L.map("map").setView(coords, 13);
      // console.log(map)

      // This is the tile layer / map display, which can be customized to use other maps including googlemaps.
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // This is the map marker that can mark a visible location for users on the map
      L.marker(home)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();

      // This is a Leaflet JS built-in event that triggers whenever you click on the map.
      map.on("click", function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;

        L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
        )
        .setPopupContent('Workout')
        .openPopup();
      });
    },
    function () {
      alert("Could not get your position");
    }
  );
}
