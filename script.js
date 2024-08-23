//your JS code here. If required.
// Function to make an asynchronous HTTP request
async function fetchTodo() {
    try {
        // Make an HTTP GET request to the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Log the JSON data to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to make the request
fetchTodo();
