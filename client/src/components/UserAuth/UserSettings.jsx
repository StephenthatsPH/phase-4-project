import React, { useState } from "react";
import UserInfo from "./UserInfo";
import EditUserInfo from "./EditUserInfo";
import UserPassword from "./UserPassword";
import EditUserPassword from "./EditUserPassword";

function UserSettings({ currentUser, setCurrentUser }){
    const [isChangeInfo, setIsChangeInfo] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);

    const handleToggleInfoForm = () => {
        setIsChangeInfo(!isChangeInfo);
    };
    
    const handleTogglePasswordForm = () => {
        setIsChangePassword(!isChangePassword);
    };



    return(
        <div>
            <hr/>
            {isChangeInfo ? <EditUserInfo currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <UserInfo currentUser={currentUser}/>}
            <button onClick={handleToggleInfoForm}>
                {isChangeInfo ? 'Cancel' : 'Update Info'}
            </button>
            <br/>
            <hr/>
            {isChangePassword ? <EditUserPassword currentUser={currentUser}/> : <UserPassword />}
            <button onClick={handleTogglePasswordForm}>
                {isChangePassword ? 'Cancel' : 'Update Password'}
            </button>
        </div>
    )
}

export default UserSettings;