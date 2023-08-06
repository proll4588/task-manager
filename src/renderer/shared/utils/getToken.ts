import { CoreResponseAuthentication } from 'renderer/shared/api/services-auth/types';
import { postAuthenticationRefresh } from '../api/services-auth/services';
import { Token, token } from './token';
import { SwaggerResponse } from '../api/services-auth/config';

let requestPostAuthenticationRefresh: Promise<
  SwaggerResponse<CoreResponseAuthentication>
> | null = null;

export const getToken = async () => {
  let tokenLocal = token.get();
  if (!tokenLocal) return Promise.reject();
  //Если токен устарел
  if ((Date.now() - Number(tokenLocal.time)) / 1000 > 240) {
    if (requestPostAuthenticationRefresh) {
      const response = await requestPostAuthenticationRefresh;
      if (response) {
        return token.getAccessToken();
      } else {
        return null;
      }
    } else {
      return await fetchNewToken(tokenLocal);
    }
  } else {
    return token.getAccessToken();
  }
};

export const fetchNewToken = async (tokenLocal: Token) => {
  const refreshToken = tokenLocal.refreshToken;
  const accessToken = tokenLocal.accessToken;

  if (!refreshToken || !accessToken) return Promise.reject();

  if (!requestPostAuthenticationRefresh) {
    try {
      requestPostAuthenticationRefresh = postAuthenticationRefresh({
        accessToken,
        refreshToken,
      });
      const parseNewToken = await requestPostAuthenticationRefresh;
      if (parseNewToken) token.save(parseNewToken.data);
      requestPostAuthenticationRefresh = null;
      return token.getAccessToken();
    } catch (error) {
      token.clear();
      return Promise.reject();
    }
  } else {
    const newToken = await requestPostAuthenticationRefresh;

    if (newToken) {
      token.save(newToken.data);
      requestPostAuthenticationRefresh = null;
      return newToken.data.accessToken as string;
    } else {
      return Promise.reject();
    }
  }
};
