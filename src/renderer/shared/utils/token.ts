import { CoreResponseAuthentication } from 'renderer/shared/api/services-auth/types';

export const token = {
  save: async (token: CoreResponseAuthentication) => {
    const tokenData = {
      ...token,
      time: Date.now(),
    };
    localStorage.setItem('tokenData', JSON.stringify(tokenData));
  },
  get: () => {
    const tokenDataStr = localStorage.getItem('tokenData');
    if (tokenDataStr) {
      const tokenData = JSON.parse(tokenDataStr) as Token;
      return tokenData;
    } else {
      return null;
    }
  },
  getAccessToken: () => {
    const tokenDataStr = localStorage.getItem('tokenData');
    if (tokenDataStr) {
      const tokenData = (JSON.parse(tokenDataStr) as Token)
        .accessToken as string;
      return tokenData;
    } else {
      return null;
    }
  },
  getRefreshToken: () => {
    const tokenDataStr = localStorage.getItem('tokenData');
    if (tokenDataStr) {
      const tokenData = (JSON.parse(tokenDataStr) as Token).refreshToken;
      return tokenData;
    } else {
      return null;
    }
  },
  clear: () => {
    localStorage.removeItem('tokenData');
  },
};

export interface Token extends CoreResponseAuthentication {
  time: string;
}
