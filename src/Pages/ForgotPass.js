import { Link } from "react-router-dom";
import { useFormSubmit } from "../functions/verficationInputsHandler";
import Logo from "../imgs/coeursolidaire.png"

const ForgotPass = () => {

    const {
        isSubmittedForg,
        usernameForg,
        emailForg,
        handleSubmitForg,
        handleUsernameForgChange,
        handleEmailForgChange,
        ResetFormForg,
        } = useFormSubmit();
        
    return (

        <main className="AuthenticationContent">


            <section className="Auth_Hero">
                <figure>
                    <img src={Logo} class="logo"  alt="Logo" width="1890" height="1417"></img>
                </figure>
            </section>
            
            <section className="Auth" id="Auth_ForgotPass" >

                    <section className="Auth_Header">
                        <h1>Forgot Password</h1>
                    </section>
                    
                    <form className="Auth_Forms" id="Auth_ForgotPass_Form">

                        <section className="Auth_SignIn_Forms_Details">

                            <input type="text" id="username" onChange={handleUsernameForgChange} required></input>
                            <label htmlFor="username">Username</label>

                            <div class="valid_feedback">
                                Looks good!
                            </div>
                            <div className={`${isSubmittedForg && usernameForg === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                                Please enter a valid username.
                            </div>

                        </section>

                        <section className="Auth_SignIn_Forms_Details">

                            <input type="email-number" id="email_number" onChange={handleEmailForgChange} required></input>
                            <label htmlFor="email_number">Email or mobile number</label>

                            <div class="valid_feedback">
                                Looks good!
                            </div>
                            <div className={`${isSubmittedForg && emailForg === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                                Please enter a valid email.
                            </div>

                        </section>

                        <section className="Auth_ForgotPass_Forms_Links">

                            <button type="submit" onClick={handleSubmitForg}>Send</button>

                            <div className="Auth_Forms_Links">
                                Back to the <Link to="/LogIn" onClick={()=>{ResetFormForg()}} >&nbsp;Login &nbsp;</Link>page
                            </div>

                        </section>
                        
                    </form>
                </section>   

            </main>

     );
}
 
export default ForgotPass;