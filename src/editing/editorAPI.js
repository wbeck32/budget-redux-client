import req from 'superagent';
require('dotenv').config()
const ME_API_URL = process.env.REACT_APP_ME_API_URL;
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;


export default {
  async verifyUser() {
    const verifiedUser = await req.get(`${AUTH_API_URL}/verify`)
    console.log('verifiedUser: ', verifiedUser);
  },
  async createNewCat({payload}) {
    console.log('payload in newcat api: ', payload)
    const newCat = await req.post(`${ME_API_URL}/category`).send({payload})
    console.log('newCat: ', newCat);
  }



}