import { useState } from "react";
import PropTypes from 'prop-types'

const FormInput = ({getValueCallback}) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(`From: Form - ${userInput}`);
    getValueCallback(userInput);
  }

  const resetHandler = () => {
    setUserInput("");
  }

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <label htmlFor="user-input">Search location!</label>
      <br></br>
      <input 
        id="user-input"
        type="text"
        placeholder="Enter: Location, State (US), Country"
        maxLength="85"
        value={userInput}
        onChange={changeHandler}
        required
        autoFocus />
      <br></br>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

FormInput.propTypes = {
  getValueCallback: PropTypes.func.isRequired
}

export default FormInput;