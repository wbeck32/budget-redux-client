import req from 'superagent';
require('dotenv').config()
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

export default {
  signUpNewUser({payload}) {
    return req
      .post(`${AUTH_API_URL}/signup`)
      .send(payload)
      .then(newUser => {
        return newUser
      })
  },
  signIn({payload}) {
    return req
    .post(`${AUTH_API_URL}/signin`)
    .send(payload)
    .then(signedInUser => {
      return signedInUser
    })
  }
};

