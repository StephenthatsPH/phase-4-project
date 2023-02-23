import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function AuthPage({ onLogin }) {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div>
            {isSignup ? <SignupForm /> : <LoginForm onLogin={onLogin}/>}
            <button onClick={handleToggleForm}>
                {isSignup ? 'Already have an account? Log in' : 'Need to create an account? Sign up'}
            </button>
        </div>
    );
}

export default AuthPage;