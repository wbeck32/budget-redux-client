import req from 'superagent';
require('dotenv').config()
const ME_API_URL = process.env.REACT_APP_ME_API_URL;

export default {
  createNewCat : async (payload) => {
    const token = localStorage.getItem('budget')
    const {name, catAmount, catRemaining} = payload;
    const newCat = await req.post(`${ME_API_URL}/category`)
    .set('Authorization', token)
    .send({name: name, catAmount: catAmount, catRemaining: catRemaining});
    return newCat.body;
  },

  getMyCats: async () => {
    const token  = localStorage.getItem('budget')
    const myCats = await req
      .get(`${ME_API_URL}/category`)
      .set('Authorization', token);
      console.log(999, myCats.body.length)
    if (myCats.body.length > 0) return myCats.body;
    return null;
  }
}