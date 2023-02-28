import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {email, password} )
        })
        .then(user => user.json())
        .then((user) => onLogin(user))
        history(`/programs`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;