import { useState } from "react";

export default function Login() {
  /**
   * Manage user inputs via state
   */
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    phone: ''
  });

  function handleInputChange(value, identifier) {
    setEnteredValues((enteredValues) => ({
      ...enteredValues,
      [identifier]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the automatic trigger of HTML request to transfer the form data to the server (Happens when onClick prop is used on button)
    console.log("Submitted");
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event) => handleInputChange(event.target.value, 'email')}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password" 
            onChange={(event) => handleInputChange(event.target.value, 'phone')}
            value={enteredValues.phone}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
