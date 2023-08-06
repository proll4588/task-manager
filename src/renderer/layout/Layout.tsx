import { Grid, Typography } from '@mui/material';
import { UserProvider, useUser } from 'renderer/entities/user/UserContext';
import { SideBar } from 'renderer/widgets/SideBar/SideBar';

export const Main = () => {
  const user = useUser();
  return (
    <Grid>
      <SideBar />
    </Grid>
  );
};

export const Layout = () => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
};
