import { AccountCircle, PasswordOutlined } from '@mui/icons-material';
import {
  Button,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from 'renderer/shared/hooks/useAuth';
import { theme } from 'renderer/shared/theme';

interface AuthFormI {
  login: string;
  password: string;
}

export const AuthPage = () => {
  const { auth } = useAuth();
  const { control, handleSubmit } = useForm<AuthFormI>({
    defaultValues: { login: '', password: '' },
  });

  const onSub = (data: AuthFormI) => {
    auth(data.login, data.password);
  };

  return (
    <Grid
      // component={'form'}
      onSubmit={handleSubmit(onSub)}
      container
      flexDirection={'row'}
      height={'100vh'}
    >
      <Grid
        height={'100%'}
        width={['0', '20%']}
        sx={{ background: theme.palette.primary.main }}
        container
      />
      <Grid
        component={'form'}
        container
        width={['100%', '80%']}
        height={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Paper
          p={2}
          width={['100%', 300]}
          height={['100%', 'auto']}
          elevation={2}
          component={Stack}
          gap={2}
        >
          <Typography
            color={theme.palette.primary.main}
            fontWeight={700}
            fontSize={24}
            textAlign={'center'}
          >
            Добро пожаловать в ваш личный кабинет!
          </Typography>

          <Controller
            name='login'
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label={'Логин'}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label={'Пароль'}
                type='password'
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PasswordOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Button
            variant='contained'
            type='submit'
          >
            Войти
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};
