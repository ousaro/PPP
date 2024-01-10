
import { useState } from 'react';

export function useFormSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNB1, setPhoneNB1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [director, setDirector] = useState("");
  const [cin, setCin] = useState("");
  const [phoneNB2, setPhoneNB2] = useState("");

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
      phoneNB2 === ""
    ) {
      event.preventDefault();
    } else {
      alert("Submitted");
    }

    setIsSubmitted(true);
  };

  return {
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
    handleSubmit,
  };
}
