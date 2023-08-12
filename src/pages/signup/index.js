import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '../../hooks';
import {
  CenterPageContainer as SignupPageContainer,
  FormContainer,
  EmailInput,
  PasswordInput,
  NameInput
} from '../../components/'

import
logo
  from '../../assets/logo.png'
import { validatePassword, validateEmail, validateName, BASE_URL } from '../../constants';
import { Button } from "@chakra-ui/react"
import { goToFeedPage } from '../../routes';

export const SignupPage = () => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
    name: ""
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isNameValid, setIsNameValid] = useState(true)
  const [users, setUsers] = useState([])

  const body = {
    name: form.name,
    email: form.email,
    password: form.password,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password))
    setIsNameValid(validateName(form.name))
    registerUser(body);
  };

  let registerUser = (body) => {
    axios
      .post(`${BASE_URL}/user/signup`, body)
      .then((response) => {
        setUsers(response);
        localStorage.setItem("cookenu.token", response.data.token)
        goToFeedPage(navigate)
        console.log(response);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <SignupPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt="logo" />
          <NameInput
            value={form.name}
            onChange={onChangeInputs}
            isValid={isNameValid}
          />
          <EmailInput
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid}
          />
          <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          />
          <Button type='submit' variant="formMain">Cadastrar</Button>
        </form>
      </FormContainer>
    </SignupPageContainer>
  );
}
