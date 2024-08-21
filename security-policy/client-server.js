const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve HTML file with buttons to make requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client_index.html'));
});

// Simulate API request from another origin
app.get('/test-api', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/static/script.js');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Request blocked by CORS policy');
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Client Server running on http://localhost:${PORT}`);
});
