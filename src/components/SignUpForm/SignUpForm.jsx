import React from 'react';
import './Form.css';

function SignUpForm(props) {
  return (
    <div className="form">
      <h1>Sign in</h1>
      <form>
        <div className="field">
          <label for="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div className="field">
          <label for="password">Password</label>
          <input name="password" id="password" type="password" />
        </div>
        <div className="field">
          <input
            name="rememberMe"
            id="rememberMe"
            type="checkbox"
            className="checkbox"
            value="rememberInfo"
          />
          <label for="rememberMe">Remember me?</label>
        </div>
        <div className="field">
          <button className="signup-button">Sign in</button>
        </div>
        <div className="form-footer">
          <a href="/#">Forgot your password?</a>
          <p>
            Don't have an account? <a href="/#">Sign up</a>
          </p>
          <a href="/#">Resend email confirmation</a>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
