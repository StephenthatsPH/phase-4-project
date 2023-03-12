import React from 'react'

function UserInfo({ currentUser }) {
    return (
        <div>
            <h1>User Settings</h1>
            <hr/>
            <p>Name: {currentUser.first_name} {currentUser.last_name}</p>
            <p>Med School Year: {currentUser.medyear}</p>
            <p>E-mail: {currentUser.email}</p>
        </div>
    )
}

export default UserInfo
