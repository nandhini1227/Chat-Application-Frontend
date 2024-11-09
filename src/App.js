
import React, { useState } from 'react';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => {
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');

    return (
        <div>
            {!token ? (
                <Login setToken={setToken} setUsername={setUsername} />
            ) : (
                <Chat username={username} />
            )}
        </div>
    );
};

export default App;
