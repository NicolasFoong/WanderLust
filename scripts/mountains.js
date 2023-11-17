"use strict";

window.onload = () => {
  addingMountainsToDropdown();
};

function addingMountainsToDropdown() {
  const mountains = document.getElementById("mountain");
  mountainsArray.forEach(function (mountain) {
    // create mountain option for dropdown id
    let option = document.createElement("option");
    // set option value to the new element by ID
    option.value = mountain.name;
    option.textContent = mountain.name;

    mountains.appendChild(option);
  });
}

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", mountainTemplate);

function mountainTemplate() {
  const grabMountain = document.getElementById("mountain").value;
  const mountainData = mountainsArray.find((mountain) => mountain.name === grabMountain);

  // Check if a mountain is found
  if (mountainData) {
    const { name, elevation, effort, img, desc, coords } = mountainData;

    // Create the HTML for the card body
    let message = `
      <div class="container text-center">
        <div class="card mx-auto">
          <div class="card-body">
            <img class="mountain-photo" src="images/${img}" alt="${name} Image">
            <h2 class="mountain-name">${name} <span class="species">(${elevation} feet)</span></h2>
            <h4 class="mountain-desc">${desc}</h4>
            <p><strong>Effort:</strong> ${effort}</p>
            <!-- Add any additional information you want to display -->
            <p><strong>Coordinates:</strong> Lat: ${coords.lat}, Lng: ${coords.lng}</p>
          </div>
        </div>
      </div>
    `;

    // Display the card in the HTML page
    document.getElementById("mountains").innerHTML = message;
  } else {
    // Handle the case when the selected mountain is not found
    console.error("Mountain not found");
  }
}
