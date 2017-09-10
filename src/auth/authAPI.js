import req from 'superagent';
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

export default {
  signUpNewUser({payload}) {
    console.log('payload in API: ', payload)
    const { email, password } = payload;
    console.log('in signup api', email, password);
    return req
      .get(`${AUTH_API_URL}`)
      .send(email, password)
      .then(newUser => console.log('newUser: ', newUser));
  }
};

