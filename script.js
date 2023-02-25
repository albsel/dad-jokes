// Elements
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

// Api Key
const apiKey = "tVIsAXbTk4MOOGgqC0bbMg==0Yej2SfITlA8iiKB";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// Api ULR request
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Fetching the Api and getting the data
async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";

    // Assigning the data to dom element
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error occured, Please try again later!";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

// Event handler
btnEl.addEventListener("click", getJoke);
