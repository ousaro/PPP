import { Link } from "react-router-dom";
import { useFormSubmit } from "../functions/verficationInputsHandler";
import Logo from "../imgs/coeursolidaire.png"

const LogIn = () => {

    const {
        isSubmittedLog,
        usernameLog,
        passwordLog,
        handleSubmitLog,
        handleUsernameLogChange,
        handlePasswordLogChange,
        ResetFormLog,
        isAuth
        } = useFormSubmit();

    return ( 
        <main className="AuthenticationContent">

            <section className="Auth_Hero">
                <figure>
                    <img src={Logo} class="logo"  alt="Logo" width="1890" height="1417"></img>
                    </figure>
            </section>

            <section className="Auth" id="Auth_LogIn">

                    <header className="Auth_Header">
                        <h1>
                            Login
                        </h1>
                    </header>
                   
                    <form  className="Auth_Forms" id="Auth_LogIn_Form">

                        <section className="Auth_SignIn_Forms_Details">

                            <input type="text" id="username" onChange={handleUsernameLogChange} required></input>
                            <label htmlFor="username">Username</label>

                            <div className="valid_feedback">
                                Looks good!
                            </div>
                            <div className={`${isSubmittedLog && usernameLog === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                                Please enter a valid username.
                            </div>

                        </section>

                        <section className="Auth_SignIn_Forms_Details">

                            <input type="password" id="password" onChange={handlePasswordLogChange} required></input>
                            <label htmlFor="password">Password</label>

                            <div className="valid_feedback">
                                Looks good!
                            </div>
                            <div className={`${isSubmittedLog && passwordLog === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                                Please enter a valid password.
                            </div>

                        </section>

                        <section className="Auth_LogIn_Forms_Links">

                            <div className="Auth_LogIn_Forms_Links_ForgetPaa">
                                <Link to="/ForgotPass">Forgot Password?</Link>
                            </div>

                            <button type="submit" onClick={handleSubmitLog}>Login</button>

                            <div className="Auth_Forms_Links">
                                Not a member? <Link to="/SignIn" onClick={()=>{ResetFormLog()}} >&nbsp; SignIn</Link>
                            </div>

                        </section>
                        
                    </form>
            </section>
    
        </main>
    );
}
 
export default LogIn;