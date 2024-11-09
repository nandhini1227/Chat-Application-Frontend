// frontend/src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = ({ username }) => {
    const [room, setRoom] = useState('ChatRoom1'); // Initial room
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [roomInput, setRoomInput] = useState(''); // State for room input

    useEffect(() => {
        // Join the specified chat room
        socket.emit('joinRoom', room);

        // Listen for incoming messages
        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off();
        };
    }, [room]); // Dependency on room variable

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('chatMessage', `${username}: ${message}`, room);
        setMessage('');
    };

    const changeRoom = (e) => {
        e.preventDefault();
        setRoom(roomInput); // Update the room state
        setRoomInput(''); // Clear the room input
    };

    return (
        <div>
            <h2>Welcome to {room}</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
            <form onSubmit={changeRoom}>
                <input
                    type="text"
                    value={roomInput}
                    onChange={(e) => setRoomInput(e.target.value)}
                    placeholder="Enter room name"
                    required
                />
                <button type="submit">Change Room</button>
            </form>
        </div>
    );
};

export default Chat;
