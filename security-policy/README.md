
# Security Policy Project

This project demonstrates the use of **CORS** (Cross-Origin Resource Sharing) and **CSP** (Content Security Policy) in a Node.js environment to provide enhanced security and control over which resources and domains are allowed to interact with the server.

## Project Overview

The **security-policy** project consists of two main security mechanisms:

1. **CORS**: Control over which external domains are allowed to make requests to your Node.js server.
2. **CSP**: Control over which resources (scripts, images, API requests, etc.) are allowed to be loaded in the browser.

---

## CORS (Cross-Origin Resource Sharing) Origin Security

### What is CORS?
**CORS** is a security feature used by browsers to control which external domains (origins) are allowed to make requests to a server. It helps prevent unauthorized cross-origin requests, acting as a gatekeeper that ensures only authorized requests can reach the server.

### How CORS Works
When a browser sends a request to a server, the server's **CORS policy** determines whether the origin (domain or IP) of the request is allowed. If the origin is not allowed, the request is blocked by the browser.

### Simulated CORS Example:
This project includes the following components to simulate how CORS works:

1. **Client-server** (`client-server.js` and `client_index.html`):
   - This simulates the browser environment and runs on **`http://localhost:4000`**, serving the client-side HTML page.
   
2. **Main-server** (`main-server.js`):
   - This is the main Node.js server running on **`http://localhost:3000`**, serving resources.

### CORS Blocking Example:
- Initially, **CORS** in `main-server.js` is configured to allow requests only from **`http://localhost:5000`**.
- When the **client-server** (running at **`http://localhost:4000`**) tries to make a request to the **main-server** at **`http://localhost:3000`**, the request is blocked because the CORS policy does not include **localhost:4000** as an allowed origin.

### CORS Allowing Example:
- If the **CORS** configuration is modified to allow requests from **`http://localhost:4000`**, the **client-server** is able to make requests, and the **main-server** responds successfully.

---

## CSP (Content Security Policy) Security

### What is CSP?
**Content Security Policy (CSP)** is a security feature that helps prevent common attacks like **Cross-Site Scripting (XSS)**, **clickjacking**, and other code injection attacks by controlling which resources (scripts, images, API requests, etc.) can be loaded and executed in the browser.

### How CSP Works
The server sends **CSP headers** with specific directives that tell the browser which sources (domains) are trusted and which resources can be loaded. CSP restricts untrusted sources from injecting malicious code into the browser.

### CSP in the Current Project:
In this project, a **CSP policy** is configured that restricts which resources (scripts, images, and API requests) can be loaded.

### How CSP is Configured:
The **helmet** middleware is used to set the **CSP headers** automatically. The following restrictions are enforced in `main-server.js`:

1. **`defaultSrc`**: Only allows resources from the same origin (i.e., **`localhost:3000`**).
2. **`connectSrc`**: Only allows API requests to **`https://jsonplaceholder.typicode.com`**.
3. **`imgSrc`**: Only allows images from **`https://images.unsplash.com`**.
4. **`scriptSrc` and `styleSrc`**: Only allows loading JavaScript and CSS from the same origin.

### Simulation in This Project:

1. The **main-server** serves the `main_index.html` page with two images and two buttons that trigger API requests.
   
2. **Image Loading Test**:
   - One image is loaded from **Unsplash** (allowed by CSP).
   - Another image is loaded from **Flickr** (blocked by CSP).
   
3. **API Request Test**:
   - One button triggers a request to **JSONPlaceholder API** (allowed by CSP).
   - Another button triggers a request to **Dog CEO API** (blocked by CSP).

---

## How to Run the Project

### Prerequisites:
Make sure you have **Node.js** installed.

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/security-policy.git
   ```

2. Install the dependencies:
   ```bash
   cd security-policy
   npm install
   ```

### Running the Servers:

1. Run the **main-server**:
   ```bash
   npm run main-server
   ```

2. Run the **client-server**:
   ```bash
   npm run client-server
   ```

3. Access the **client-server** at **`http://localhost:4000`** to simulate browser behavior, and test CORS and CSP policies.

---

## Expected Behavior:

- **CORS**:
  - Requests from **localhost:4000** to **localhost:3000** will be blocked by **CORS** initially.
  - After modifying the **CORS** configuration to allow **localhost:4000**, the request will succeed.

- **CSP**:
  - Images from **Unsplash** will load successfully.
  - Images from **Flickr** will be blocked by **CSP**.
  - API requests to **JSONPlaceholder** will be allowed.
  - API requests to **Dog CEO** will be blocked by **CSP**.

---

## License
This project is licensed under the [MIT License](LICENSE).

