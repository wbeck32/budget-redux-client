import React from 'react';
import PropTypes from 'prop-types';

export default function Auth({ signUp, signIn }) {

  Auth.propTypes = {
    signUp: PropTypes.func,
    signIn: PropTypes.func
  };

  return (
    <div>
      <div> Sign Up </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { name, email, password } = form.elements;
          signUp({
            payload: { name: name.value, email: email.value, password: password.value }
          });
          form.reset();
        }}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit" name="submit" />
      </form>

      <div> Sign In </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { email, password } = form.elements;
          signIn({
            payload: { email: email.value, password: password.value }
          });
          form.reset();
        }}>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit" name="submit" />
      </form>
    </div>
  );
}
