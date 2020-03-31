import axios from 'axios';

/**
 * Function that verifies if there is a token on the local storage.
 * In case it exists, configure a token in the global header,
 * otherwise global header is removed
 * @param {string} token - Users token
 */
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

export default setAuthToken;