import formStyles from "./FormInput.module.css";
import { useState } from "react";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const FormInput = ({getValueCallback}) => {
  const [userInput, setUserInput] = useState("");
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    getValueCallback(userInput);
  }

  return (
    <form 
      onSubmit={submitHandler} 
      className={formStyles.Form}
      style={{
        color: theme.secondary.foreground,
        backgroundColor: theme.secondary.background
      }}>
      <fieldset className={formStyles.Fieldset}>
        <legend>Search area</legend>
        <label 
          htmlFor="user-input"
          className={formStyles.Text}>
            Search more than 250k locations!
        </label>
        <input 
          className={formStyles.Input}
          id="user-input"
          type="text"
          placeholder="Format: Location, State (US), Country"
          value={userInput}
          onChange={changeHandler}
          required
          autoFocus />
        <button 
          type="submit"
          className={formStyles.Button}
          style={{
            color: theme.primary.foreground,
            backgroundColor: theme.primary.background
          }}>
            Submit
        </button>
      </fieldset>
    </form>
  );
}

FormInput.propTypes = {
  getValueCallback: PropTypes.func.isRequired
}

export default FormInput;