// import {VERIFY} from '../auth/auth.constants';
import authAPI from '../auth/authAPI';



export default async function verifyUser() {
  const verified = await authAPI.verify();
  console.log('verified: ', verified)
  return verified;

}
