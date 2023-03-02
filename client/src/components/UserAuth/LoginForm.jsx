import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => onLogin(user));
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        });
        // .then(user => user.json())
        // .then((user) => onLogin(user))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;