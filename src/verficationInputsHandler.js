
import { useState } from 'react';
import authHandlers from './Auth';

export function useFormSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmittedLog, setIsSubmittedLog] = useState(false);
  const [isSubmittedForg, setIsSubmittedForg] = useState(false);
  const [isSubmittedSignUp, setIsSubmittedSignUp]=useState(false);

  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNB1, setPhoneNB1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [director, setDirector] = useState("");
  const [cin, setCin] = useState("");
  const [phoneNB2, setPhoneNB2] = useState("");
  const [descr,setDescr]=useState("");

  const [userType, setUserType] = useState("");
  const [date, setDate]=useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [term, setTerms] = useState(false);

  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [usernameForg, setUsernameForgLog] = useState("");
  const [emailForg, setEmailForg] = useState("");


  // reset form
  const RestForm = (event)=>{
    document.getElementById("signupForm").reset()
    document.getElementById("user-type").selectedIndex=0
    setUsername("")
    setEmail("")
    setPassword("")
    setDate("")
    setGender("")
    setUserType("")
    setTerms(false)
  }

  const ResetFormLog = (event) =>{
    document.getElementById("loginForm").reset()
    setUsernameLog("")
    setPasswordLog("")
  }

  const ResetFormForg = (event) =>{
    document.getElementById("forgtoPassForm").reset()
    setUsernameForgLog("")
    setEmailForg("")
    ResetFormLog()
  }



  // handle the input changed value

  const handleUsernameLogChange = (event) => {
    setUsernameLog(event.target.value);
  };
  
  const handlePasswordLogChange = (event) => {
    setPasswordLog(event.target.value);
  };
  
  const handleUsernameForgChange = (event) => {
    setUsernameForgLog(event.target.value);
  };
  
  const handleEmailForgChange = (event) => {
    setEmailForg(event.target.value);
  };

  const handleTermsChange = (event) =>{
    setTerms(!term)
  }

  const handleUsernameChange = (event)=>{
    setUsername(event.target.value)
  }

  const handleEmailChange = (event)=>{
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event)=>{
    setPassword(event.target.value)
  }

  const handleDateChange = (event)=>{
    setDate(event.target.value)
  }

  const handleGenderChange = (event)=>{
    setGender(event.target.value)
  }


  const handleDescrChange = (event) => {
    setDescr(event.target.value);
  }

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    
  }


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNB1Change = (event) => {
    setPhoneNB1(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleDirectorChange = (event) => {
    setDirector(event.target.value);
  };

  const handleCinChange = (event) => {
    setCin(event.target.value);
  };

  const handlePhoneNB2Change = (event) => {
    setPhoneNB2(event.target.value);
  };


  //submits handler


  const handleSubmitLog = (event) =>{
    if (
      usernameLog === "" ||
      passwordLog === "" 
    ) 
    {
      event.preventDefault();
    } 
    
    else 
    {

        alert("successfuly log in ")
      
    }

    setIsSubmittedLog(true);
  }


  const handleSubmitForg = (event) =>{
    if (
      usernameForg === "" ||
      emailForg === "" 
    ) 

    {
      event.preventDefault();

    } 
    
    else 
    {

      const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
      handler.LogInHandler()
      ResetFormForg()
      
    }

    setIsSubmittedForg(true);
  }


  const handleSubmitSignUp = (event)=>{

    if(username===""||
       password===""||
       email==="" ||
       (userType !=="simple-user" && userType!=="association")||
       date===""||
       gender===""||
       term === false
       ){

        event.preventDefault();

      }
    else{
      if(userType==="simple-user"){

        alert('successfuly sign up')
      }
      else if(userType==="association")
      {
        const handler=authHandlers("signup-container","login-container","Forgot-pass-container","association_verification", "none", "block")
        handler.AssociationVerHandler()
        RestForm()
      }
   }    
      setIsSubmittedSignUp(true);
  }


  const handleSubmit = (event) => {
    if (
      address === "" ||
      name === "" ||
      phoneNB1 === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
      director === "" ||
      cin === "" ||
      phoneNB2 === "" ||
      descr === ""
    ) 
    {
      event.preventDefault();

    } 
    
    else 
    {

      alert("Submitted");
      
    }

    setIsSubmitted(true);
  };

  return {
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
    descr,

    userType,
    date,
    gender,
    email,
    password,
    username,
    term,

    usernameForg,
    emailForg,

    usernameLog,
    passwordLog,

    handleSubmit,
    handleSubmitSignUp,
    handleSubmitForg,
    handleSubmitLog,

    handleTermsChange,
    handleDateChange,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleUserTypeChange,
    handleGenderChange,

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
  
    handleUsernameLogChange,
    handlePasswordLogChange,

    handleEmailForgChange,
    handleUsernameForgChange,

    RestForm,
    ResetFormLog,
    ResetFormForg,
  };
}
