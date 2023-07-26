import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

/** Alert component.
 *
 * Prop:
 * - Notice: [message, message,...]
 * - Type: "danger"
 *
 * { LoginForm, SignUpForm, SearchForm } -> Alert
 *
 * Renders Alert to users
 */
function Notice({ message, type }) {
  return (
    <div>
      <Alert variant={type}>{message}</Alert>
    </div>
  );
}

export default Notice;
