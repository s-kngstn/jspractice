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

class Workout {
  date = new Date();
  // usually when creating IDs you should use a library to take care of that
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration){
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min per km in UK :: miles per km in US
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////////////////
// Testing the cycling and running classes
// const run1 = new Running([53, -0.2], 5.2, 24, 178)
// const cycling1 = new Cycling([53, -0.2], 23, 95, 538)
// console.log(run1, cycling1)

///////////////////////////////////////////
// APPLICATION ARCHITECTURE
class App {
  // map, and mapEvent are now private instance properties(variables of a class)
  #map;
  #mapEvent;
  // The constructor method is always immediatley called once an object is made from this class.
  // So Anything inside the constructor is also fired off once the object is created.
  constructor() {
    // Gets user position as soon as new App object is called
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));
    // Toggles between input elevation and input cadence
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    // Using the Geolocation API to find the users current location
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position");
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const home = [51.529337340565476, -0.10292490041692204];

    console.log(`https://www.google.co.uk/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    // Leaflet JS library
    // The Second parameter inside setView is the zoom level of the map (1 = Far, 20 = Close)
    this.#map = L.map("map").setView(coords, 13);
    // console.log(map)

    // This is the tile layer / map display, which can be customized to use other maps including googlemaps.
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // This is the map marker that can mark a visible location for users on the map
    L.marker(home)
      .addTo(this.#map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();

    // This is a Leaflet JS built-in event that triggers whenever you click on the map.
    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();

    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    // Display Marker
    console.log(this.#mapEvent);
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  }
}

const app = new App();
