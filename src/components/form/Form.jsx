import { useState } from "react";

const Form = ({pageCallback}) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`From: Form - ${userInput}`);
    pageCallback(userInput);
  }

  const resetHandler = () => {
    setUserInput("");
  }

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <label htmlFor="user-input">Search city by name!</label>
      <br></br>
      <input 
        id="user-input"
        type="text"
        placeholder="Enter city name here.."
        maxLength="85"
        value={userInput}
        onChange={changeHandler}
        required
        autoFocus />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default Form;