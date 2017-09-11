import store from '../index';
import req from 'superagent';
require('dotenv').config()
const ME_API_URL = process.env.REACT_APP_ME_API_URL;

export default {
  createNewCat : async ({payload}) => {
    const {name, catAmount, catRemaining} = payload;
    // console.log('payload in newcat api: ', payload)
    const newCat = await req.post(`${ME_API_URL}/category`)
    .set('Authorization', store.getState().token)
    .send({name: name, catAmount: catAmount, catRemaining: catRemaining});
    console.log(newCat);
  }
}