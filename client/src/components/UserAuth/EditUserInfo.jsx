import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import MedyearSelect from './MedyearSelect';

function EditUserInfo({ currentUser, setCurrentUser }) {
    const [first_name, setFirst_Name] = useState(currentUser.first_name);
    const [last_name, setLast_Name] = useState(currentUser.last_name);
    const [medyear, setMedyear] = useState(currentUser.medyear);
    const [email, setEmail] = useState(currentUser.email);
    const [errors, setErrors] = useState([]);
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
                    medyear: medyear,
                    email: email
                }
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => console.log(user));
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        });
        setCurrentUser({ first_name, last_name, medyear, email })
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
                    Med School Year:
                    <select value={medyear} onChange={(e) => setMedyear(e.target.value)} >
                        <option value="" disabled defaultValue hidden >Select Year</option>
                        <MedyearSelect />
                    </select>
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
                <button type="submit" value="Submit" >Update</button>
            </form>
        </div>
    )
}

export default EditUserInfo
