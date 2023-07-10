import {useState, useEffect, createContext} from 'react';
import jwtDecode from 'jwt-decode';
import {Auth, jwt} from '../api';

const authController = new Auth();

export const AuthContext = createContext({
  auth: undefined,
  accessToken: null,
  refreshToken: null,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const {children} = props;

  const [auth, setAuth] = useState(undefined);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await jwt.getTokens();
      const accessExpired = jwt.hasExpired(response.access);

      if (accessExpired) {
        const refreshExpired = jwt.hasExpired(response.refresh);
        if (refreshExpired) {
          logout();
        } else {
          // REFRESH ACCESS TOKEN
          try {
            const res = await authController.refreshToken(response.refresh);
            jwt.saveTokens(res.access, response.refresh);
            login({
              access: res.access,
              refresh: response.refresh,
            });
          } catch (err) {
            console.error(err);
            logout();
          }
        }
      } else {
        login(response);
      }
    })();
  }, []);

  const login = tokens => {
    if (tokens.access && tokens.refresh) {
      const decodeToken = jwtDecode(tokens.access);
      setAuth({decodeToken, type: tokens.type});
      setAccessToken(tokens.access);
      setRefreshToken(tokens.refresh);
      jwt.saveTokens(tokens.access, tokens.refresh);
    } else {
      logout();
    }
  };

  const logout = () => {
    setAuth(undefined);
    setAccessToken(null);
    setRefreshToken(null);
    jwt.removeTokens();
  };

  const data = {
    auth,
    accessToken,
    refreshToken,
    login,
    logout,
  };

  if (componentLoaded) {
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
  } else {
    return null;
  }
}
