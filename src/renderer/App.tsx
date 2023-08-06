import './App.css';
import { ThemeProvider } from '@mui/material';
import { Layout } from './layout/Layout';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { theme } from 'renderer/shared/theme';
import { useAuth } from './shared/hooks/useAuth';
import { useEffect } from 'react';
import { token } from './shared/utils/token';

export const App = () => {
  const { isAuth } = useAuth();

  useEffect(() => {
    console.log(token.get());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isAuth ? <Layout /> : <AuthPage />}
    </ThemeProvider>
  );
};
