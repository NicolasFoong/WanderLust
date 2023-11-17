"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Get dropdown elements
  const states = document.getElementById("states");
  const parktype = document.getElementById("parktype");

  // Get form elements
  const stateForm = document.getElementById("stateForm");
  stateForm.onchange = filterStates;

  const parkType = document.getElementById("parkType");
  parkType.onchange = filterStates;

  addLocationsToDropdown();
  addNationalParksToDropdown();
});

// Function to add locations to the "states" dropdown
function addLocationsToDropdown() {
  const statesList = document.getElementById("statesList");

  locationsArray.forEach(function (location) {
    let option = new Option(location);
    statesList.appendChild(option);
  });
}

// Function to add national parks to dropdown
function addNationalParksToDropdown() {
  const parkType = document.getElementById("parkType");

  nationalParksArray.forEach(function (park) {
    let option = new Option(park.LocationName);
    parkType.appendChild(option);
  });
}


function filterStates() {
  const state = document.getElementById("statesList").value;
  const parkType = document.getElementById("parkType").value;

  let filteredStates = nationalParksArray;


  if (state != "Select State") {
    filteredStates = filteredStates.filter(f => f.State == state);
  }


  if (parkType != "Select Type") {
    filteredStates = filteredStates.filter(f => f.LocationName.includes(parkType));
  }

  // Display filtered states
  displayStates(filteredStates);
}


function displayStates(filteredStates) {
  const statesContainer = document.querySelector("#stateName");
  statesContainer.innerHTML = "";

  filteredStates.forEach(state => {
    displayName(state, statesContainer);
  });
}

// Function to create and display state name and details
function displayName(state, parentDiv) {
  const stateDiv = document.createElement("div");
  stateDiv.classList.add("card");
  stateDiv.classList.add("mb-3");
  parentDiv.appendChild(stateDiv);

  // Display state name in card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerText = "Name: " + state.LocationName;
  stateDiv.appendChild(cardHeader);

  // Display state details in card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  stateDiv.appendChild(cardBody);

// Additional Info Added
  addAddress(state, cardBody);
  addCity(state, cardBody);
  addState(state, cardBody);
  addZipCode(state, cardBody);
  addPhone(state, cardBody);
  addFax(state, cardBody);
  addLatitude(state, cardBody);
  addLongitude(state, cardBody);
}

// Functions to add specific details to the card body
function addAddress(state, parentDiv) {
  const parkAddress = document.createElement("p");
  parkAddress.innerText = "Address: " + state.Address;
  parentDiv.appendChild(parkAddress);
}

function addCity(state, parentDiv) {
  const parkCity = document.createElement("p");
  parkCity.innerText = "City: " + state.City;
  parentDiv.appendChild(parkCity);
}

function addState(state, parentDiv) {
  const parkState = document.createElement("p");
  parkState.innerText = "State: " + state.State;
  parentDiv.appendChild(parkState);
}

function addZipCode(state, parentDiv) {
  const parkZipCode = document.createElement("p");
  parkZipCode.innerText = "Zip Code: " + state.ZipCode;
  parentDiv.appendChild(parkZipCode);
}

function addPhone(state, parentDiv) {
  const parkPhone = document.createElement("p");
  parkPhone.innerText = "Phone number: " + state.Phone;
  parentDiv.appendChild(parkPhone);
}

function addFax(state, parentDiv) {
  const parkFax = document.createElement("p");
  parkFax.innerText = "Fax number: " + state.Fax;
  parentDiv.appendChild(parkFax);
}

function addLatitude(state, parentDiv) {
  const parkLatitude = document.createElement("p");
  parkLatitude.innerText = "Latitude: " + state.Latitude;
  parentDiv.appendChild(parkLatitude);
}

function addLongitude(state, parentDiv) {
  const parkLongitude = document.createElement("p");
  parkLongitude.innerText = "Longitude: " + state.Longitude;
  parentDiv.appendChild(parkLongitude);
}

document.getElementById("searchButton").addEventListener("click", function () {
  searchLocation();
});

function searchLocation() {
  const selectedValue = document.getElementById("states").value;
  alert(selectedValue);
}
