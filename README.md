#components:

Backend: Node.js with Express, MongoDB for user and session management, and Socket.io for real-time collaboration.
Frontend: React with Axios for handling user registration, login, and interacting with the backend, including a drawing whiteboard feature.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication with Bcrypt for password hashing

## Project Structure
The project is structured as follows:

- **Config**: Contains the database configuration.
- **Models**: Contains Mongoose schemas for User and Session models.
- **Routes**: Contains routes for user and session management.
- **Middleware**: Contains authentication middleware.
- **Server**: The main server setup with Socket.io for real-time communication.


## API Endpoints

### User Routes
- **POST /users/register** - Registers a new user. Requires `username` and `password`.
- **POST /users/login** - Logs in an existing user. Requires `username` and `password`.

### Session Routes
- **POST /sessions** - Creates a new session. Requires JWT token in authorization header.
- **GET /sessions/:id** - Fetches a session by ID. Requires JWT token in authorization header.

## Socket.io Integration
The backend uses Socket.io for real-time collaboration on the whiteboard. Users can join a session, draw, and erase in real-time.

## Frontend Technologies Used
- React.js
- React Router
- Axios for HTTP requests
- Socket.io client for real-time communication

## Project Structure (Frontend)
The frontend is structured as follows:



## Frontend Flow
1. Users can register and log in via forms, with data sent to the backend API.
   

Installation
Steps To Run the Project:

1.Downloading the Modules

- node version used is <17.0.0 (If ur Node version is Greater than 17, eg v18 then the app wont run)
git clone https://github.com/NazimFilzer/WhiteBoard-Collab-SHN.git

cd Collabboard

cd Backend
npm install -f

cd ..
cd Frontend
npm install
2.Starting the Servers (Frontend Server)

cd Frontend
npm start
On Another Terminal (Backend Server)

cd Backend
npm start
Dependencies
Node v16.*

