import React, { useState } from 'react';

function SignupForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;