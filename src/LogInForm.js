import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function LogInForm({ handleLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showFlash, setShowFlash] = useState(false);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt, formData) {
    evt.preventDefault();

    await handleLogIn(formData);
    setShowFlash(true);

    setFormData({
      username: "",
      password: "",
    });
    navigate("/");
  }

  async function testLogin(evt) {
    setFormData({
      username: "testuser",
      password: "password",
    });
    await handleSubmit(evt, formData);
  }

  return (
    <div className="col-lg-4 offset-md-3 offset-lg-4 p-4">
      <h2>Log In</h2>
      {showFlash && (
        <Alert
          variant="success"
          onClose={() => setShowFlash(false)}
          dismissible
        >
          You're successfully logged in!
        </Alert>
      )}
      <form className="LogInForm flex text-start" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 mb-3">
            <input
              id="username"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={handleChange}
              value={formData.username}
              aria-label="username"
            />
          </div>
          <div className="col-12 mb-3">
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              onChange={handleChange}
              value={formData.password}
              aria-label="password"
            />
          </div>
        </div>
        <section className="row">
          <div className="col-12 mb-3">
            <Button variant="dark" type="submit" className="w-100">
              Log In
            </Button>
          </div>
        </section>
      </form>
      <div className="col-12 mb-3">
        <Button variant="success" onClick={testLogin} className="w-100">
          Log In as Testuser
        </Button>
      </div>
    </div>
  );
}

export default LogInForm;
