const Form = () => {
  return (
    <form>
      <label htmlFor="user-input">Search city by name!</label>
      <input id="user-input" type="text" placeholder="Enter city name" />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default Form;