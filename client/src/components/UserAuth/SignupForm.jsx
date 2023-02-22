import React, { useState } from 'react';

function SignupForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ user: formData }),
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
                First Name:
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Phone #:
                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
            </label>
            <br />
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
            <label>
                Confirm Password:
                <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;