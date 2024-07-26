import axios from 'axios';

import { env } from '../env';

export default axios.create({
  baseURL: env.REACT_APP_URL_API_AUTH_BASE,
});
