import store from '../index';
import req from 'superagent';
require('dotenv').config();
const ME_API_URL = process.env.REACT_APP_ME_API_URL;

export default {
  getMyCats: async () => {
    const { token } = store.getState();
    console.log(2323, token)
    const myCats = await req
      .get(`${ME_API_URL}/category`)
      .set('Authorization', token);
    console.log(999, myCats);
    return myCats.body.categories;
  }
};
