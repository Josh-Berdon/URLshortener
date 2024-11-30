# URL Shortener

## Overview
This is a simple URL shortener application built using **Node.js**, **Express**, and **MongoDB**. It allows users to shorten long URLs, track the number of clicks on the shortened URLs, and redirect users to the original URLs when the shortened links are accessed.

## Features
- Generate unique shortened URLs for any valid URL.
- Redirect users to the original URL when they access the shortened link.
- Track the number of times a shortened URL has been clicked.
- Dynamic frontend using **EJS** templating engine.

## Prerequisites
Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Josh-Berdon/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   - For a local instance, ensure MongoDB is running on `localhost:27017`.
   - Alternatively, provide a connection string for a cloud instance (e.g., MongoDB Atlas).

4. Configure the database connection:
   - The app is pre-configured to connect to a local MongoDB instance at `mongodb://localhost/urlShortener`. If you are using a different MongoDB URI, update the connection string in `server.js`:
     ```javascript
     mongoose.connect('your-mongodb-uri', {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     ```

5. Start the application:
   ```bash
   npm start
   ```

6. Access the app in your browser at:
   ```
   http://localhost:5000
   ```

## File Structure
```
url-shortener/
├── models/
│   └── shortUrl.js        # Mongoose schema for URL data
├── views/
│   └── index.ejs          # Main HTML template for the application
├── server.js              # Main server file
├── package.json           # Project metadata and dependencies
└── README.md              # Documentation
```

## Usage

### Shorten a URL
1. Navigate to the homepage (`http://localhost:5000`).
2. Enter a valid URL into the input field and submit.
3. A unique shortened URL will be generated and displayed on the page.

### Access a Shortened URL
1. Copy the generated shortened URL.
2. Paste it into your browser and navigate to it.
3. You will be redirected to the original URL.

### Track Clicks
The homepage displays a table of all shortened URLs along with the click counts, showing how many times each URL has been accessed.

## Technologies Used
- **Node.js**: Backend JavaScript runtime.
- **Express**: Web framework for building server-side applications.
- **MongoDB**: NoSQL database for storing URL data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **EJS**: Templating engine for rendering dynamic HTML.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.