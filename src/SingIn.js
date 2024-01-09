import Logo from "./coeursolidaire.png"
import authHandlers from "./Fonction";


const SignIn = () => {

    return ( 
    <div className="SingInContent">
            <img src={Logo} class="logo"></img>
            <div class="right" id="login-container">
                <h1>
                    Login
                </h1>
                <form id="loginForm" onSubmit={(event)=>{
                    event.preventDefault()
                    alert("successfuly log in ")
                    document.getElementById("loginForm").reset()
                    }}>

                    <div class="txt_field">
                        <input type="text" required></input>
                        <label id="username">Username</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" required></input>
                        <label id="pass">Password</label>
                    </div>
                    <div class="passForgoten">
                        <a onClick={()=>{
                        const handler=authHandlers("signup-container","login-container","Forgot-pass-container", "none", "block")
                        handler.ForgotPassHandler();
                    }}>Forgot Password?</a>
                    </div>
                    <input type="submit" value="Login"></input>
                    <div class="signup_link">
                        Not a member? <a onClick={()=>{
                        const handler=authHandlers("signup-container","login-container","Forgot-pass-container", "none", "block")
                        handler.SignUpHandler()
                    }} >SignUp</a>
                    </div>
                </form>
            </div>
    
            <div class="right" id="Forgot-pass-container">
                <h1>Forgot Password</h1>
                <form id="forgtoPassForm" onSubmit={(event)=>{
                    event.preventDefault()
                    const handler=authHandlers("signup-container","login-container","Forgot-pass-container", "none", "block")
                    handler.LogInHandler()
                    document.getElementById("forgtoPassForm").reset()
                    }}>

                    <div class="txt_field2">
                        <input type="text" required></input>
                        <label id="username">Username</label>
                    </div>
                    <div class="txt_field2">
                        <input type="email-number" required></input>
                        <label id="email_number">Email or mobile number</label>
                    </div>
                    <input type="submit" value="Send" ></input>
                    <div class="Forgot-pass-link2">
                        Back to the <a onClick={()=>{
                        const handler=authHandlers("signup-container","login-container","Forgot-pass-container", "none", "block")
                        handler.LogInHandler()
                    }} >Login page</a>
                    </div>
                </form>
            </div>
    
            <div class="right" id="signup-container">
                <h1>
                    Sign Up
                </h1>
                <form id="signupForm" onSubmit={(event)=>{
                    event.preventDefault()
                    alert('successfuly sign up')
                    document.getElementById("signupForm").reset()
                    }}>

                    <div class="txt_field1">
                        <input type="text" required></input>
                        <label>Username</label>
                    </div>
                    <div class="txt_field1">
                        <input type="email" required></input>
                        <label>Email</label>
                    </div>
                    <div class="txt_field1">
                        <input type="password" required></input>
                        <label>Password</label>
                    </div>
            
                    <div class="flex-container">
                        <label>Date of Birth</label>
                        <input type="date"  placeholder="Date of Birth"></input>
                    </div>
        
                    <div class="gender-buttons">
                        <label class="gender-title">Gender : </label>
                        <label class="gender-button"></label>
                        <ul>
                            <li><input type="radio" name="gender" value="male" required></input>
                            Male</li>
                            <li> <input type="radio" name="gender" value="female" required></input>
                            Female</li>
                            <li><input type="radio" name="gender" value="other" required></input>
                            Other</li>
                        </ul>
                        

                    </div>
                    
    
                    <select id="user-type" name="user-type">
                        <option selected disabled>Choose account type</option>
                        <option value="simple-user">Simple User</option>
                        <option value="association">Association</option>
                    </select>
            
                    <div class="terms-checkbox">
                        <input type="checkbox" id="terms-checkbox" required></input>
                        <label for="terms-checkbox">I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=H4A5kjdc08abZes6KCKrIQZM0JkGeBCV" target="_blank">Terms of Privacy and Policy</a></label>
                    </div>
            
                    <input type="submit" value="Sign Up"></input>
                    <div class="signup_link1">
                        Already have an account? <a 
                        onClick={()=>{
                            const handler=authHandlers("signup-container","login-container","Forgot-pass-container", "none", "block")
                            handler.LogInHandler()
                            }} >Login</a>
                    </div>
                </form> 
                </div>


    </div>
    
    );
}


export default SignIn;