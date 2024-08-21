const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const app = express();

// CORS configuration: Allow only requests from 'http://localhost:5000'
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only this origin
}));


// Serve static files and ensure CORS is applied here
app.use('/static',express.static('public', {
  etag: false,  // Disable ETag header to prevent caching
  cacheControl: false,  // Disable cache-control headers
}));

// CSP configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "https://jsonplaceholder.typicode.com"],
      imgSrc: ["'self'", "https://images.unsplash.com"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  },
}));



// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main_index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Main Server running on http://localhost:${PORT}`);
});
