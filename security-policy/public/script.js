// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Allowed API: JSONPlaceholder
    document.getElementById('allowedApiButton').addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                document.getElementById('apiResponse').innerHTML = `<p>Allowed API Response: ${JSON.stringify(data)}</p>`;
            })
            .catch(error => {
                document.getElementById('apiResponse').innerHTML = `<p>Failed to fetch allowed API</p>`;
            });
    });

    // Blocked API: Dog CEO API
    document.getElementById('blockedApiButton').addEventListener('click', function() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                document.getElementById('apiResponse').innerHTML = `<p>Blocked API Response: ${JSON.stringify(data)}</p>`;
            })
            .catch(error => {
                document.getElementById('apiResponse').innerHTML = `<p>Failed to fetch blocked API: ${error}</p>`;
            });
    });
});
