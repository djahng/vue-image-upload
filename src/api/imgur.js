import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENT_ID;
const BASE_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  }
};
