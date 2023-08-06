import { useState } from 'react';
import { postAuthentication } from '../api/services-auth/services';
import { getDeviceId } from '../utils/getDeviceId';
import { token } from '../utils/token';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(!!token.get());

  const auth = async (login: string, password: string) => {
    const devId = getDeviceId();
    try {
      const { data } = await postAuthentication({
        login,
        password,
        deviceId: devId,
      });

      token.save(data);
      setIsAuth(true);
    } catch (error) {}
  };

  return { auth, isAuth };
};
