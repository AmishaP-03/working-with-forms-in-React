import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the automatic trigger of HTML request to transfer the form data to the server (Happens when onClick prop is used on button)
    console.log("Submitted");
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // Resetting form data -> we'll have to directly manipulate the DOM (since refs are connected to DOM, which is not recommended)
    // email.current.value = ''
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
            ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password" 
            ref={password}
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
