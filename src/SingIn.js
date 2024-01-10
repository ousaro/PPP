import Logo from "./coeursolidaire.png"
import authHandlers from "./Auth";
import { useState } from "react";
import { useFormSubmit } from "./verficationInputsHandler";


const SignIn = () => {

    const {
        isSubmitted,
        address,
        name,
        phoneNB1,
        city,
        state,
        zip,
        director,
        cin,
        phoneNB2,
        handleAddressChange,
        handleNameChange,
        handlePhoneNB1Change,
        handleCityChange,
        handleStateChange,
        handleZipChange,
        handleDirectorChange,
        handleCinChange,
        handlePhoneNB2Change,
        handleSubmit
        } = useFormSubmit();

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

            <div class = "right" id="association_verification">
                <h1>
                    Association Verification
                </h1>
                <form id="verification-form">
                    <div class="ass_inf" >
                        <input type="text" onChange={handleNameChange} required></input>
                        <label>Association name</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && name === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a Name.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text" onChange={handleAddressChange} required></input>
                        <label >Address</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && address === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please provide a valid address.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text" onChange={handlePhoneNB1Change} required></input>
                        <label >Phone number</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && phoneNB1 === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please provide a valid phone number.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text" onChange={handleCityChange} required></input>
                        <label >City</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && city === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please provide a valid city.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <select onChange={handleStateChange} required>
                            <option selected disabled value="">Choose...</option>
                            <option>Tanger-Tétouan-Al Hoceïma</option>
                            <option>Oriental</option>
                            <option>Fès-Meknès</option>
                            <option>Rabat-Salé-Kénitra</option>
                            <option>Béni Mellal-Khénifra</option>
                            <option>Drâa-Tafilalet</option>
                            <option>Souss-Massa</option>
                            <option>Guelmim-Oued Noun</option>
                            <option>Laâyoune-Sakia El Hamra</option>
                            <option>Dakhla-Oued Ed-Dahab</option>
                        </select>
                        <label className="state_label">State</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && state === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please select a valid state.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text"  onChange={handleZipChange} required></input>
                        <label>Zip Code</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && zip === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please provide a valid zip.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text" onChange={handleDirectorChange} required></input>
                        <label>Directeur</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && director === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a Name.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text"  onChange={handleCinChange} required></input>
                        <label>CIN or Passport</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && cin === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please provide a valid CIN or Passort.
                        </div>
                    </div>

                    <div class="ass_inf">
                        <input type="text"  onChange={handlePhoneNB2Change} required></input>
                        <label>Phone number</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && phoneNB2 === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please provide a valid Phone number.
                        </div>
                    </div>

                    
                    <div class="ver_file">
                        <label>
                            <span class="required-field">Lettre de déclaration de l’association</span> *
                        </label>
                        <input type="file" accept=".pdf, .doc, .docx" required></input>
                    </div>

                    
                    <div class="ver_file">
                        <label>
                            <span class="required-field">Lettre de domiciliation</span> *  
                        </label>
                        <input type="file" accept=".pdf, .doc, .docx" required></input>
                    </div>

                    <div class="btn_sumbmit">
                        <input type="submit" value="Next Page"  onClick={handleSubmit}></input>
                    </div>


                </form>
            </div>



    </div>
    
    );
}


export default SignIn;