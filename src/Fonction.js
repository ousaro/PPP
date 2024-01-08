import { useState } from "react";



const ShowSignUp = () => {

    const [useShowSignUp, setShowSignUp] = useState(true);
    const [useShowLogIn, setShowLogIn] = useState(false);

    const showAccessHandler = () => {
        setShowLogIn(true);
        setShowSignUp(true);
    };

}
 
export default ShowSignUp;

/*
function showForgotPass() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("Forgot-pass-container").style.display = "block";
}


document.getElementById('forgot-pass-link').addEventListener('click', function(event) {
    event.preventDefault();
    showForgotPass();
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    showLogin();
});

export {showSignup, showLogin, showForgotPass}
*/