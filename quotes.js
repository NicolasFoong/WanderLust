// Array of nature quotes
const natureQuotes = [
  "Nature: Cheaper than therapy, and you get mud between your toes.",
  "Camping is my therapy session.",
  "Let's find some beautiful place to get lost in.",
  "In the forest, I find peace and a lot of bugs.",
  "Life is better with a little dirt on your hands.",
  "Nature is my favorite artist, and the mountains are its masterpiece.",
  "Keep close to nature's heart and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean. - John Muir",
  "Climbing mountains not only gets you to the top but also closer to the clouds.",
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
