import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from './services/api';

//material core
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
//components
import GridContainer from './components/Grid/GridContainer'
import GridItem from './components/Grid/GridItem'
import Card from './components/Card/Card'
import CardBody from './components/Card/CardBody'
import CardHeader from './components/Card/CardHeader'
import Button from './components/CustomButtons/Button'

import Snackbar from './components/Snackbar/SnackbarContent'
//styles css
import './App.css';
import logo from './assets/img/logo.png'

function App() {

  const history = useHistory();

  const [login, setLogin] = useState('');

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  //funcao para o login
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const data = {
        "login": login,
        "senha": values.password
      }
      //console.log(data)
      await api.post('/', data);
      sessionStorage.setItem('login', data.login)
      //localStorage.setItem('senha', response.data.senha)
      history.push('/admin')

    } catch (err) {
      alert(`Falha no login, tente novamente:\n ${err}`);
    }
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className="App">
      <div className="container">
        <GridContainer >
          <GridItem >
            <Card >
              <Snackbar color='info' message="Login" />
              <CardHeader className="img-container">
                <img src={logo} alt="..." />
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardBody>
                  <FormControl required fullWidth variant="outlined" margin='normal'>
                    <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-login"
                      labelWidth={70}
                      value={login}
                      onChange={e => setLogin(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <FormControl required fullWidth variant="outlined" margin='normal'>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      labelWidth={70}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Button type='submit' color="primary" block={true} size="lg">Entrar</Button>
                </CardBody>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default App;
