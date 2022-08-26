import "./form.css";
import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }

    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div class="success-message">Success! Thank you for registering</div>
        )}

        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
