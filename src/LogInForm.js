import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Notice from "./Notice";
import Spinner from "react-bootstrap/Spinner";
import Overlay from "react-bootstrap/Overlay";
import "./LogInForm.css";

/** LogInForm component.
 *
 * Props:
 *  - handleLogIn: fn()
 *  - error: [error, error,...]
 *
 * State:
 * - formData: {username, password}
 *
 * RoutesList -> LogInForm
 *
 */
function LogInForm({ handleLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const target = useRef(null);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt, loginData = formData) {
    evt.preventDefault();
    setIsLoading(true);
    try {
      await handleLogIn(loginData);
      navigate("/");
    } catch (error) {
      setError(error);
      setIsLoading(false);
      return;
    }
    setFormData({
      username: "",
      password: "",
    });
    setIsLoading(false);
  }

  async function logInTestUser(evt) {
    evt.preventDefault();
    const testUserData = { username: "testuser", password: "password" };
    await handleSubmit(evt, testUserData);
  }

  return (
    <div className="center">
      <Card className="card">
        <h2>Log In</h2>
        <Form className="LogInForm" onSubmit={handleSubmit}>
          {error &&
            error.map((e, i) => <Notice key={i} message={e} type="danger" />)}
          {isLoading && (
            <Overlay target={target.current} show={isLoading} placement="top">
              {({
                placement: _placement,
                arrowProps: _arrowProps,
                show: _show,
                popper: _popper,
                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                ...props
              }) => (
                <div
                  {...props}
                  style={{
                    position: "absolute",
                    padding: "2px 10px",
                    color: "black",
                    borderRadius: 3,
                    ...props.style,
                  }}
                >
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>{" "}
                </div>
              )}
            </Overlay>
          )}
          <Form.Group className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={handleChange}
              value={formData.username}
              aria-label="username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <label htmlFor="password">Password</label>
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
          </Form.Group>

          <Button ref={target} variant="secondary" type="submit">
            Log In
          </Button>
          <Button className="m-2" variant="success" onClick={logInTestUser}>
            Log In as 'testuser'
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default LogInForm;
