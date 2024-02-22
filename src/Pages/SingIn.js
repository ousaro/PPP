import Logo from "../imgs/coeursolidaire.png"
import { useFormSubmit } from "../functions/verficationInputsHandler";
import { Link } from "react-router-dom";





const SignIn = () => {

    const {
        isSubmittedSignUp,
        userType,
        date,
        gender,
        password,
        username,
        email,
        term,
        handleSubmitSignUp,
        handleTermsChange,
        handleEmailChange,
        handleUsernameChange,
        handlePasswordChange,
        handleUserTypeChange,
        handleDateChange,
        handleGenderChange,
        RestForm, 
        } = useFormSubmit();
        


        
    return (
        
        
    <main className="AuthenticationContent">

            <section className="Auth_Hero">
                <figure>
                    <img src={Logo}  alt="Logo" width="1890" height="1417"></img>
                </figure>
            </section>
            
            <section className="Auth" id="Auth_SignIn">

                <header className="Auth_Header">
                    <h1>
                        Sign Up
                    </h1>
                </header>
                

                <form className="Auth_Forms" id="Auth_SignIn_Forms">

                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="Username" required onChange={handleUsernameChange}></input>
                        <label htmlFor="Username">Username</label>

                        <div className="valid_feedback">
                            Looks good!
                        </div>

                        <div className={`${isSubmittedSignUp && username === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please enter a valid username.
                        </div>

                    </section>


                    <section className="Auth_SignIn_Forms_Details">

                        <input type="email" id="email" required onChange={handleEmailChange}></input>
                        <label htmlFor="email">Email</label>

                        <div className="valid_feedback">
                            Looks good!
                        </div>

                        <div className={`${isSubmittedSignUp && email === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please enter a valid Email.
                        </div>

                    </section>



                    <section className="Auth_SignIn_Forms_Details">

                        <input type="password" id="password" required onChange={handlePasswordChange}></input>
                        <label htmlFor="password">Password</label>

                        <div className="valid_feedback">
                            Looks good!
                        </div>

                        <div className={`${isSubmittedSignUp && password === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please enter a valid password.
                        </div>

                    </section>
            

                    <section className="Auth_SignIn_Date">

                        <label htmlFor="date">Date of Birth</label>
                        <input type="date" id="date" onChange={handleDateChange} required></input>

                        <div className={`${isSubmittedSignUp && date==='' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            *requierd.
                        </div>

                    </section>
        


                    <section className="Auth_SignIn_Gender">

                        <label htmlFor="genderGroup">Gender : </label>
                        <ul>
                            <li><input type="radio"  name="gender" value="male" required onChange={handleGenderChange}></input>
                            <label htmlFor="genderGoup">Male</label></li>
                            <li> <input type="radio" name="gender" value="female" required onChange={handleGenderChange}></input>
                            <label htmlFor="genderGoup">Female</label></li>
                            <li><input type="radio" id="genderGroup" name="gender" value="other" required onChange={handleGenderChange}></input>
                            <label htmlFor="genderGoup">Other</label></li>
                        </ul>

                        <div className={`${isSubmittedSignUp && gender === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            *requierd.
                        </div>

                    </section>
                    
    
                    <section className="Auth_SignIn_UserType">

                        <select id="user-type"  onChange={handleUserTypeChange} required>
                            <option value="" selected disabled>Choose account type</option>
                            <option value="simple-user">Simple User</option>
                            <option value="association">Association</option>
                        </select>

                        <div className={`${isSubmittedSignUp && (userType !== "simple-user" && userType !== "association") ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please select you account type.
                        </div>

                    </section>
            


                    <section className="Auth_SignIn_Terms">

                        <input type="checkbox" id="terms" onChange={handleTermsChange} required></input>
                        <label htmlFor="terms">I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=H4A5kjdc08abZes6KCKrIQZM0JkGeBCV" target="_blank" rel="noreferrer">Terms of Privacy and Policy</a></label>

                        <div className={`${isSubmittedSignUp && !term ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            *requierd.
                        </div>

                    </section>
            


                    <section className="Auth_SignIn_Forms_Links">

                        <button type="submit" onClick={(e)=>{handleSubmitSignUp(e)}}>Submit</button>

                        <div className="Auth_SignIn_Forms_Links_LogIn Auth_Forms_Links">
                            Already have an account?<Link to="/LogIn" onClick={()=>{RestForm()}} >&nbsp; Login</Link>
                        </div>

                    </section>
                    
                </form> 


            </section>
    </main>
    
    );
}


export default SignIn;