import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function EditUserInfo({ currentUser, setCurrentUser }) {
    const [first_name, setFirst_Name] = useState(currentUser.first_name);
    const [last_name, setLast_Name] = useState(currentUser.last_name);
    const [phone_number, setPhone_Number] = useState(currentUser.phone_number);
    const [email, setEmail] = useState(currentUser.email);
    const { id } = useParams();


    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    phone_number: phone_number,
                    email: email
                }
            }),
        })
            .then((response) => {
                console.log(response);
                setCurrentUser({ first_name, last_name, phone_number, email });
            })
    }

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <hr />
                <h1>Edit User Info</h1>
                <hr />
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
                <button type="submit" value="Submit" >Update</button>
            </form>
        </div>
    )
}

export default EditUserInfo
