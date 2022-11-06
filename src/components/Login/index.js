import { useState } from "react";
import "./style.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fn: "",
    cpassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    fn: "",
    cpassword: ""
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = (formData) => {
    let newFormErrors = {};
    if (!formData.fn) {
      newFormErrors["email"] = "name is required";
    }

    if (!formData.email) {
      newFormErrors["email"] = "Email is required";
    }

    if (!formData.password) {
      newFormErrors["password"] = "Password is required";
    }
    if (formData.password !== formData.cpassword) {
      newFormErrors["cpassword"] = "pass cpass not same";
    }

    if (newFormErrors !== {}) {
      setFormErrors(newFormErrors);
      return false;
    }
    return true;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (isFormValid(formData)) {
      //API
      let response;

      console.log("Form is valid");
    }
  };

  return (
    <div className="container">
      <h2>SIGN_UP</h2>
      <form className="login-form" onSubmit={onFormSubmit}>
        <label>
          name
          <input
            onChange={handleFormChange}
            type="text"
            name="fn"
            value={formData.fn}
          />
          <p className="error"> {formErrors.fn}</p>
        </label>
        <label>
          Email Id
          <input
            onChange={handleFormChange}
            type="email"
            name="email"
            value={formData.email}
          />
          <p className="error"> {formErrors.email}</p>
        </label>
        <label>
          Password
          <input
            onChange={handleFormChange}
            type="password"
            name="password"
            value={formData.password}
          />
          <p className="error"> {formErrors.password}</p>
        </label>
        <label>
          confirm-Password
          <input
            onChange={handleFormChange}
            type="password"
            name="cpassword"
            value={formData.cpassword}
          />
          <p className="error"> {formErrors.cpassword}</p>
        </label>

        <input id="submit-button" required type="submit" value="Login" />
      </form>
    </div>
  );
}
