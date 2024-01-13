import Logo from "./coeursolidaire.png"
import authHandlers from "./Auth";
import { useFormSubmit } from "./verficationInputsHandler";


const SignIn = () => {

    const {
        isSubmitted,
        isSubmittedSignUp,
        isSubmittedForg,
        isSubmittedLog,
        address,
        name,
        phoneNB1,
        city,
        state,
        zip,
        director,
        cin,
        phoneNB2,
        userType,
        descr,
        date,
        gender,
        password,
        username,
        email,
        term,
        usernameForg,
        usernameLog,
        passwordLog,
        emailForg,
        handleSubmit,
        handleSubmitSignUp,
        handleSubmitForg,
        handleSubmitLog,
        handleTermsChange,
        handleAddressChange,
        handleEmailChange,
        handleUsernameChange,
        handlePasswordChange,
        handleNameChange,
        handlePhoneNB1Change,
        handleCityChange,
        handleStateChange,
        handleZipChange,
        handleDirectorChange,
        handleCinChange,
        handlePhoneNB2Change,
        handleUserTypeChange,
        handleDescrChange,
        handleDateChange,
        handleGenderChange,
        handleEmailForgChange,
        handlePasswordLogChange,
        handleUsernameForgChange,
        handleUsernameLogChange,
        RestForm,
        ResetFormForg,
        ResetFormLog,
        } = useFormSubmit();
        
        
    return ( 
    <div className="SingInContent">
            <img src={Logo} alt="" class="logo"></img>
            <div class="right" id="login-container">
                <h1>
                    Login
                </h1>
                <form id="loginForm">

                    <div class="txt_field">
                        <input type="text" onChange={handleUsernameLogChange} required></input>
                        <label id="username">Username</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedLog && usernameLog === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid username.
                        </div>
                    </div>

                    <div class="txt_field">
                        <input type="password" onChange={handlePasswordLogChange} required></input>
                        <label id="pass">Password</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedLog && passwordLog === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid password.
                        </div>
                    </div>

                    <div class="passForgoten">
                        <a onClick={()=>{
                        const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
                        handler.ForgotPassHandler();
                    }}>Forgot Password?</a>
                    </div>
                    <input type="submit" value="Login" onClick={handleSubmitLog}></input>
                    <div class="signup_link">
                        Not a member? <a onClick={()=>{
                        const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
                        handler.SignUpHandler()
                        ResetFormLog()
                    }} >SignUp</a>
                    </div>
                </form>
            </div>
    
            <div class="right" id="Forgot-pass-container">
                <h1>Forgot Password</h1>
                <form id="forgtoPassForm">

                    <div class="txt_field2">
                        <input type="text" onChange={handleUsernameForgChange} required></input>
                        <label id="username">Username</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedForg && usernameForg === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid username.
                        </div>
                    </div>

                    <div class="txt_field2">
                        <input type="email-number" onChange={handleEmailForgChange} required></input>
                        <label id="email_number">Email or mobile number</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedForg && emailForg === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid email.
                        </div>

                    </div>
                    <input type="submit" value="Send" onClick={handleSubmitForg}></input>
                    <div class="Forgot-pass-link2">
                        Back to the <a onClick={()=>{
                        const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
                        handler.LogInHandler()
                        ResetFormLog()
                    }} >Login page</a>
                    </div>
                </form>
            </div>
    
            <div class="right" id="signup-container">
                <h1>
                    Sign Up
                </h1>
                <form id="signupForm">
                    <div class="txt_field1">
                        <input type="text" required onChange={handleUsernameChange}></input>
                        <label>Username</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedSignUp && username === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid username.
                        </div>
                    </div>


                    <div class="txt_field1">
                        <input type="email" required onChange={handleEmailChange}></input>
                        <label>Email</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedSignUp && email === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid Email.
                        </div>
                    </div>



                    <div class="txt_field1">
                        <input type="password"  required onChange={handlePasswordChange}></input>
                        <label>Password</label>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmittedSignUp && password === '' ? "invalid-feedback": "invalid-hide"}`}>
                            Please enter a valid password.
                        </div>
                    </div>
            
                    <div class="flex-container">
                        <label>Date of Birth</label>
                        <input type="date" onChange={handleDateChange} required></input>
                        <div className={`${isSubmittedSignUp && date==='' ? "invalid-feedback": "invalid-hide"}`}>
                            *requierd.
                        </div>
                    </div>
        
                    <div class="gender-buttons">
                        <label class="gender-title">Gender : </label>
                        <ul>
                            <li><input type="radio" name="gender" value="male" required onChange={handleGenderChange}></input>
                            Male</li>
                            <li> <input type="radio" name="gender" value="female" required onChange={handleGenderChange}></input>
                            Female</li>
                            <li><input type="radio" name="gender" value="other" required onChange={handleGenderChange}></input>
                            Other</li>
                        </ul>

                        <div className={`${isSubmittedSignUp && gender === '' ? "invalid-feedback": "invalid-hide"}`}>
                            *requierd.
                        </div>
                    </div>
                    
    
                    <div className="selectType">
                        <select id="user-type"  onChange={handleUserTypeChange} required>
                            <option value="" selected disabled>Choose account type</option>
                            <option value="simple-user">Simple User</option>
                            <option value="association">Association</option>
                        </select>
                        <div className={`${isSubmittedSignUp && (userType != "simple-user" && userType != "association") ? "invalid-feedback": "invalid-hide"}`}>
                            Please select you account type.
                        </div>
                    </div>
            
                    <div class="terms-checkbox">
                        <input type="checkbox" id="terms" onChange={handleTermsChange} required></input>
                        <label>I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=H4A5kjdc08abZes6KCKrIQZM0JkGeBCV" target="_blank">Terms of Privacy and Policy</a></label>
                        <div className={`${isSubmittedSignUp && !term ? "invalid-feedback": "invalid-hide"}`}>
                            *requierd.
                        </div>
                    </div>
            
                    <input type="submit" value="Sign Up" onClick={handleSubmitSignUp}></input>
                    <div class="signup_link1">
                        Already have an account? <a 
                        onClick={()=>{
                            const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
                            handler.LogInHandler()
                            document.getElementById("signupForm").reset()
                            RestForm()
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


                    <div class="ass_descr">
                        <textarea onChange={handleDescrChange} required></textarea>
                        <label>Description of the main goals of the association</label>
                        <div class="valid-feedback" id="descr_valid">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && descr === '' ? "invalid-feedback": "invalid-hide"}`} id="descr_invalid">
                            A bref description is required.
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

                    <div class="ver_file">
                        <label>
                            <span class="required-field">Association members</span> *  
                        </label>
                        <input type="file" accept=".pdf, .doc, .docx" required></input>
                    </div>

                    <div class="btn_sumbmit">
                        <input type="submit" value="submit"  onClick={handleSubmit}></input>
                    </div>

                    <div class="btn_back">
                        <input type="submit" value="Back" onClick={()=>{
                            const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
                            handler.SignUpHandler()   
                        }
                        }></input>
                    </div>


                </form>
            </div>

    </div>
    
    );
}


export default SignIn;