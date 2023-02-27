import React from 'react'

function UserInfo({ currentUser }) {
    return (
        <div>
            <h1>User Settings</h1>
            <hr/>
            <p>Name: {currentUser.first_name} {currentUser.last_name}</p>
            <p>E-mail: {currentUser.email}</p>
            <p>Phone #: {currentUser.phone_number}</p>
        </div>
    )
}

export default UserInfo
