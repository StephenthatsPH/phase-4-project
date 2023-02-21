import React, { useState } from 'react';

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ user: formData }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed');
                }
            })
            .then((data) => {
                console.log('Logged in as:', data.user);
                // TODO: handle successful login
            })
            .catch((error) => {
                console.error('Error logging in:', error);
                // TODO: display error message to user
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;