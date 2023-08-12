import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useForm } from '../../hooks';
import {
  CenterPageContainer as LoginPageContainer,
  FormContainer,
  EmailInput,
  PasswordInput
} from '../../components/'
import { Login } from '../../constants'
import { useNavigate } from 'react-router-dom';
import { goToSignupPage, goToFeedPage } from '../../routes'
import
logo
  from '../../assets/logo.png'
import { validatePassword, validateEmail } from '../../constants';
import { Button } from "@chakra-ui/react"

export const LoginPage = ({ setIsLoggedIn }) => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: ""
  });



  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [loginUser, setLoginUser] = useState([])


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    logUser()
}

let logUser = () => {
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((response) => {
      setLoginUser(response.data);
      console.log(response.data);
      localStorage.setItem("cookenu.token", response.data.token)
      setIsLoggedIn(true); // Atualize o estado de login aqui
      goToFeedPage(navigate)
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt="logo" />
          <EmailInput
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid} />
          <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          />
          <Button type='submit' variant="formMain">Enviar</Button>
          <Button onClick={() => goToSignupPage(navigate)} type='button' variant="formSecondary">Não possui conta? Cadastre-se</Button>
        </form>
      </FormContainer>
    </LoginPageContainer>
  );
}
