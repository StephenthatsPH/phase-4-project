import React, { useState } from 'react';

function SignupForm() {
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [phone_number, setPhone_Number] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_Confirmation] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const strongParams = {
            user: {
                first_name: first_name,
                last_name: last_name,
                phone_number: phone_number,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }
        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(strongParams),
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
                <input type="text" name="first_name" value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="last_name" value={last_name} onChange={(e) => setLast_Name(e.target.value)} />
            </label>
            <br />
            <label>
                Phone #:
                <input type="text" name="phone_number" value={phone_number} onChange={(e) => setPhone_Number(e.target.value)} />
            </label>
            <br />
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
            <label>
                Confirm Password:
                <input type="password" name="password_confirmation" value={password_confirmation} onChange={(e) => setPassword_Confirmation(e.target.value)} />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;