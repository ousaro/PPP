import { useFormSubmit } from "../functions/verficationInputsHandler";
import { Link } from "react-router-dom";
import Logo from "../imgs/coeursolidaire.png"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const SignIn = () => {

    const history = useHistory();
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
        descr,
        handleSubmit,
        handleAddressChange,
        handleNameChange,
        handlePhoneNB1Change,
        handleCityChange,
        handleStateChange,
        handleZipChange,
        handleDirectorChange,
        handleCinChange,
        handlePhoneNB2Change,
        handleDescrChange,
        } = useFormSubmit();
        
        
    return ( 
        <main className="AuthenticationContent">

            <section className="Auth_Hero">
                <figure>
                    <img src={Logo}   alt="Logo" width="1890" height="1417"></img>
                </figure>
            </section>

            <section  className="Auth" id="Auth_Verification">

                <section className="Auth_Header">
                    <h1>
                        Association Verification
                    </h1>
                </section>

                <form className="Auth_Forms" id="Auth_Verification_Forms">

                    <section className="Auth_SignIn_Forms_Details" >

                        <input type="text" id="assName" onChange={handleNameChange} required></input>
                        <label htmlFor="assName">Association name</label>

                        <div className="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && name === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please enter a Name.
                        </div>

                    </section>


                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="Address" onChange={handleAddressChange} required></input>
                        <label htmlFor="Address">Address</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && address === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please provide a valid address.
                        </div>

                    </section>


                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="phone" onChange={handlePhoneNB1Change} required></input>
                        <label htmlFor="phone">Phone number</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && phoneNB1 === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please provide a valid phone number.
                        </div>

                    </section>


                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="city" onChange={handleCityChange} required></input>
                        <label htmlFor="city">City</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && city === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please provide a valid city.
                        </div>

                    </section>



                    <section className="Auth_Verification_Forms_State">

                        <select onChange={handleStateChange} id="state" required>
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
                        <label htmlFor="state" className="state_label">State</label>

                        <div className={`${isSubmitted && state === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please select a valid state.
                        </div>

                    </section>



                    <section className="Auth_SignIn_Forms_Details">
                        
                        <input type="text" id="zip" onChange={handleZipChange} required></input>
                        <label htmlFor="zip">Zip Code</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && zip === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please provide a valid zip.
                        </div>

                    </section>



                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="directeur" onChange={handleDirectorChange} required></input>
                        <label htmlFor="directeur">Directeur</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && director === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please enter a Name.
                        </div>

                    </section>



                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="CIN"  onChange={handleCinChange} required></input>
                        <label htmlFor="CIN">CIN or Passport</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && cin === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please provide a valid CIN or Passort.
                        </div>

                    </section>


                    <section className="Auth_SignIn_Forms_Details">

                        <input type="text" id="phone2" onChange={handlePhoneNB2Change} required></input>
                        <label htmlFor="phone2">Phone number</label>

                        <div class="valid_feedback">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && phoneNB2 === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`}>
                            Please provide a valid Phone number.
                        </div>

                    </section>


                    <section className="Auth_Verification_Forms_Description">
                         
                        <textarea onChange={handleDescrChange} id="description" required></textarea>
                        <label htmlFor="description">Description of the main goals of the association</label>
                        
                        <div className="valid_feedback" id="descr_valid">
                            Looks good!
                        </div>
                        <div className={`${isSubmitted && descr === '' ? "invalid_feedback-show": "invalid_feedback-hide"}`} id="descr_invalid">
                            A bref description is required.
                        </div>

                    </section>
                    


                    <section className="Auth_Verification_Forms_DocFile">
                        <div>
                            <label htmlFor="doc1">
                                <span class="required-field">Lettre de déclaration de l’association</span> *
                            </label>
                            <input type="file" accept=".pdf, .doc, .docx" id="doc1" required></input>
                        </div>
                            
                            
                        <div>
                            <label id="doc2">
                                <span class="required-field">Lettre de domiciliation</span> *  
                            </label>
                            <input type="file" accept=".pdf, .doc, .docx" id="doc2" required></input>
                        </div>
                       

                        <div>
                            <label htmlFor="doc3">
                                <span class="required-field">Association members</span> *  
                            </label>
                            <input type="file" accept=".pdf, .doc, .docx" id="doc3" required></input>
                        </div>
                        
                    </section>

                </form>



                <section className="Auth_Verification_Forms_Bt">

                    <div className="btn_back">
                        <button type="submit" onClick={()=>{history.push("/SignIn")}}>Back</button>
                    </div>

                    <div className="btn_submit">
                        <button type="submit"  onClick={handleSubmit}>submit</button>
                    </div>

                    

                </section>

            </section>

    </main>
    
    );
}


export default SignIn;