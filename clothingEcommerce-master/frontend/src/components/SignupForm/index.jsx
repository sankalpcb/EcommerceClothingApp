import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/thunkActions/actions';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(3),
  maxWidth: 400,
  margin: 'auto',
}));

const Signup = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.thunky.currentUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const displayName = formData.get('displayName');
    const email = formData.get('email');
    const password = formData.get('password');

    const body = {
      userName: displayName,
      email: email,
      password1: password,
    };

    dispatch(signUp(body));
    navigate('/');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Item>
          <h2 style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            Don't have an account???
          </h2>
          <h5 style={{ color: 'black', fontSize: '16px', fontStyle: 'italic' }}>Signup with E-mail and password</h5>

          <TextField name="displayName" label="DisplayName" variant="outlined" fullWidth margin="normal" />
          <TextField name="email" label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField name="password" label="Password" type="password" variant="outlined" fullWidth margin="normal" />
          <TextField name="confirmPassword" label="ConfirmPassword" type="password" variant="outlined" fullWidth margin="normal" />

          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '15px' }}>
            SignUp
          </Button>
        </Item>
      </Grid>
    </Box>
  );
};

export default Signup;
