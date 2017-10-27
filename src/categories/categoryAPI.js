import store from '../index';
import req from 'superagent';
require('dotenv').config();
const ME_API_URL = process.env.REACT_APP_ME_API_URL;

export default {
  getMyCats: async () => {
    const token  = localStorage.getItem('budget')
    const myCats = await req
      .get(`${ME_API_URL}/category`)
      .set('Authorization', token);
    if (myCats.body.length > 0) return myCats.body;
    return null;
  },
  createNewCat: async () => {
    const token = store.getState();
    // console.log(10, token)
    const newCat = await req
      .post(`${ME_API_URL}/category`)
      .set('Authorization', token);
      // console.log(10.5, newCat)
    if (newCat.body.length > 0) return newCat.body;
    return null;
  }
};
