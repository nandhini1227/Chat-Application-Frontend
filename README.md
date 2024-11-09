# Real-Time Chat Application

A full-stack real-time chat application powered by **Node.js**, **Socket.io**, and **MongoDB**. Users can join chat rooms, send messages, and receive notifications in real time. The application also includes user authentication and profile management.

## Features

- **Real-Time Messaging**: Instant communication between users in different chat rooms.
- **User Authentication**: Secure registration and login process.
- **Chat Rooms**: Users can join different chat rooms and communicate with others.
- **Message History**: Track messages within each chat room.
- **Responsive Design**: Works on desktops and mobile devices.
- **Optimized for Performance**: Uses Socket.io for efficient real-time communication.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Version Control**: Git

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or higher)
- npm (Node Package Manager)
- MongoDB (either locally or using a service like MongoDB Atlas)

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/real-time-chat-application.git

Navigate to the backend directory:

        cd real-time-chat-application/backend

Install backend dependencies:

npm install

Create a .env file in the backend directory and add the following:


MONGO_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret
PORT=5000

Replace mongodb://localhost:27017/chat-app with your actual MongoDB connection string if using a cloud service.
Set a strong secret for JWT tokens.

Start the backend server:

node server.js

Navigate to the frontend directory:

cd ../frontend

Install frontend dependencies:

npm install

Start the React application:

npm start

Your application should now be running on http://localhost:3000 for the frontend, and the backend should be reachable at http://localhost:5000.

How to Use

Go to the application in your web browser.
Register a new account or log in with an existing account.
Enter a chat room name and start chatting!
You can change rooms anytime by entering a new room name.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

Fork the project.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Create a new Pull Request.

License

This project is licensed under the MIT License – see the LICENSE file for details.

Acknowledgments

Socket.io for real-time communication.
MongoDB for the database service.
React for building the user interface.
