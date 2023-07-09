import {ENV} from '../utils';

export class Auth {
  status = [200, 201];

  async post(endpoint, body, setHttpCallError, callback) {
    const url = `${ENV.BASE_API}/${endpoint}/`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (!this.status.includes(response.status)) {
      console.log(response.headers);
      setHttpCallError({
        hasError: true,
        status: response.status,
        message:
          response.headers.map.message ||
          `Sorry for the inconvenience, there was en error. Please, try again later`,
      });
    } else {
      if (callback) callback();
    }

    return result;
  }

  async refreshToken(token) {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REFRESH_TOKEN}/`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({refresh: token}),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }
}
