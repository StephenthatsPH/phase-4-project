import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( user )
        })
        .then(res => res.json())
        .then((user) => onLogin(user))
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