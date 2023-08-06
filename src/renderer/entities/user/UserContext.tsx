import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getEmployee } from 'renderer/shared/api/services-auth/services';
import { AuthResponseEmployeeInformation } from 'renderer/shared/api/services-auth/types';

export const UserContext =
  createContext<AuthResponseEmployeeInformation | null>(null);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}
export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthResponseEmployeeInformation | null>(
    null
  );

  useEffect(() => {
    getEmployee().then((data) => {
      setUser(data.data);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
