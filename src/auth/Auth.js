import React from 'react';
import PropTypes from 'prop-types';
import { SIGN_UP } from './auth.constants';

export default function Auth ({signUp}) {
  Auth.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func
  };

  return (
    <div>
      <div> Auth </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { email, password } = form.elements;
          signUp({
            type: SIGN_UP,
            payload: { email: email.value, password: password.value }
          });
          form.reset();
        }}>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="submit" name="submit" />
      </form>
    </div>
);
}



// export default Auth;




// export default connect(state => ({}))(Auth);
