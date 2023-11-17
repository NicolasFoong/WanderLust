# Capstone 2: WanderLust


## Introduction
**WanderLust** is an immersive platform designed to facilitate your exploration of nature's wonders. By incorporating Git, HTML,CSS, Javascript and particularly Bootstrap 5.3, this informational website ensures a visually appealing and user-friendly experience. Escape from the city and screens, embrace the natural world around you for a wanderlust experience.

# Link to Page
https://github.com/NicolasFoong/Capstone-2

## Page Descriptions
### 1. index.html 
Index is the foundation Home Page that brings gives an welcoming feel to explore the outdoors

### 2. Mountains.html 
The following pages are meant to create a curiousity and explore various Mountains and its difficulty.

### 3. nationalpark.html
A dedicated page allowing one to navigate through various states and see what National Park it offers. Included are address, cities and more! 


## Special Feature: Random Quote Generator
// Array of nature quotes
const natureQuotes = [
  "Nature: Cheaper than therapy, and you get mud between your toes.",
  "Camping is my therapy session.",
  "Let's find some beautiful place to get lost in.",
  "In the forest, I find peace and a lot of bugs.",
  "Life is better with a little dirt on your hands.",
  "Nature doesn't hurry, yet everything is accomplished, unlike me on Monday mornings.",
  "Let's wander where the WiFi is weak."
];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * natureQuotes.length);
  const randomQuote = natureQuotes[randomIndex];
  return randomQuote;
}

// Function to update the quote display
function updateQuoteDisplay() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.textContent = generateRandomQuote();
}

// Attach the function to the button click event
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', updateQuoteDisplay);

## Sample Screenshot
Here is a sample image screenshot of the website:
**Index**
![Index](![Alt text](</screenshots/WanderLustHome.png>))
**Mountains**
![Products](![Alt text](</screenshots/MountainsSummit.png>))
**NationalPark**
![Login](![Alt text](</screenshots/FindaPark.png>))

## Acknowledgments

* Bootstrap v5.3
* https://coolors.co
* https://getbootstrap.com/docs/5.3/getting-started/introduction/
* Pluralsight Professor : Remsey Mailijard
* Year Up Peers
* https://readme.so/editor
* https://webresizer.com

# Authors: 
  ** Nicolas Foong **

* https://github.com/NicolasFoong
* https://www.linkedin.com/in/nicolas-foong-156b55165/