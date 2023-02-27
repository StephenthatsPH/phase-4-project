import React, { useState } from "react";
import UserInfo from "./UserInfo";
import EditUserInfo from "./EditUserInfo";

function UserSettings({ currentUser }){
    const [isChange, setIsChange] = useState(false);

    const handleToggleForm = () => {
        setIsChange(!isChange);
    };



    return(
        <div>
            <hr/>
            {isChange ? <EditUserInfo currentUser={currentUser}/> : <UserInfo currentUser={currentUser}/>}
            <button onClick={handleToggleForm}>
                {isChange ? 'Cancel' : 'Update Info'}
            </button>
            <br/>
            <hr/>
            <p>Password: ***********</p>
            <button>Change Password</button>
        </div>
    )
}

export default UserSettings;