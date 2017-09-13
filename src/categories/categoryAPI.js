import store from '../index';
import req from 'superagent';
require('dotenv').config()
const ME_API_URL = process.env.REACT_APP_ME_API_URL;

export default {
  getMyCats : async () => {
    const myCats = await req.get(`${ME_API_URL}/category`)
    .set('Authorization', store.getState().token)
    console.log('myCats: ', myCats);
    return myCats.body.categories;
  }
}
