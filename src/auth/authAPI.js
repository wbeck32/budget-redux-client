import req from 'superagent';
require('dotenv').config()
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

export default {
  signUpNewUser({payload}) {
    return req
      .post(`${AUTH_API_URL}/signup`)
      .send(payload)
      .then(newUser => {
        console.log(101, newUser)
        return newUser.body
      })
  },
  signIn({payload}) {
    return req
    .post(`${AUTH_API_URL}/signin`)
    .send(payload)
    .then(response => {
      console.log(66, response.body)
      return response.body;
    })
  },
    verify() {
      return req
      .get(`${AUTH_API_URL}/verify`)
      .then(verifiedUser => {
        return verifiedUser
      })

  }
};

