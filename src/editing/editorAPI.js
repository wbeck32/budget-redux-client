import store from '../index';
import req from 'superagent';
require('dotenv').config()
const ME_API_URL = process.env.REACT_APP_ME_API_URL;

export default {
  createNewCat : async ({payload}) => {
    const {name, catAmount, catRemaining} = payload;
    return await req.post(`${ME_API_URL}/category`)
    .set('Authorization', store.getState().token)
    .send({name: name, catAmount: catAmount, catRemaining: catRemaining});
  }
}