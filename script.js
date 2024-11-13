document.addEventListener('DOMContentLoaded', generateJoke);
document.getElementById('joke-btn').addEventListener('click', generateJoke);

function generateJoke() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Initialize the request to the Chuck Norris joke API
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    // Set up what happens when the request is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // Check if request is complete
            const jokeElement = document.getElementById('joke');
            if (xhr.status === 200) { // Check if the response is OK
                // Parse the JSON response
                const response = JSON.parse(xhr.responseText);
                // Update the joke element with the joke text
                jokeElement.innerHTML = response.value;
            } else {
                // Display an error message if the request fails
                jokeElement.innerHTML = 'Oops! Could not fetch a joke at this time.';
            }
        }
    };

    // Send the request
    xhr.send();
}