#  Backend Lab — MongoDB Atlas Connection with Node.js & Express

##  Overview
This lab demonstrates the initial backend infrastructure setup for a Node.js application by successfully connecting an Express server to a MongoDB Atlas database. The focus is on verifying database connectivity using environment variables and the MongoDB native driver.

##  Workplace Context
As a backend developer at a startup building a social media platform, establishing a reliable database connection is a critical first step. This setup ensures the application can securely communicate with MongoDB Atlas, forming the foundation for all future backend features such as user accounts, posts, and authentication.

##  Learning Objectives
By completing this lab, I demonstrated the ability to:

* Set up a MongoDB Atlas project and cluster
* Configure database users and network access
* Securely store sensitive credentials using environment variables
* Connect a Node.js/Express application to MongoDB Atlas
* Verify a successful database connection via an API endpoint

##  Description

This lab focuses on:

* Creating a MongoDB Atlas cluster using the free M0 tier
* Configuring database access and permissions
* Building a minimal Express server
* Using the MongoDB native driver (MongoClient) to test connectivity
* Returning a success or failure message through an HTTP GET route
* No database operations (CRUD) are performed in this lab; the goal is strictly to confirm that the application can connect to MongoDB successfully.

##  Resources

* MongoDB Atlas Documentation — https://www.mongodb.com/docs/atlas/
* MongoDB Node.js Driver — https://www.mongodb.com/docs/drivers/node/
* Express Documentation — https://expressjs.com/
* dotenv — https://www.npmjs.com/package/dotenv

##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  MongoDB Atlas account

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/social-media-api.git)

2. Navigate into the project folder:

cd social-media-api

##  Setup

1. Install dependencies:

npm install

2. Create a .env file in the root directory and add your MongoDB Atlas connection string:

MONGO_URI="your_connection_string_goes_here"

3. Run the project / Start Server:

node server.js

4. Open a browser or API client and visit:
http://localhost:3000/

If the connection is successful, the API will respond with:

{
  "message": "Successfully connected to the database!"
}

##  Project Structure

├── server.js        # Express server and MongoDB connection logic
├── .env             # Environment variables (not committed)
├── .gitignore
├── package.json
└── node_modules/