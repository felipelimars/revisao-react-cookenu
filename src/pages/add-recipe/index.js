import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '../../hooks';
import {
  CenterPageContainer as AddRecipePageContainer,
  FormContainer,
  DesciptionTextArea,
  ImageInput,
  TitleInput
} from '../../components/'
import { PageTitleStyled } from './styled';
import { BASE_URL } from '../../constants';
import { Button, TextArea } from "@chakra-ui/react"
import { UseProtectedPage } from '../../hooks/use-protectedPage';

export const AddRecipePage = () => {
  const navigate = useNavigate()
  UseProtectedPage(navigate)
  const [form, onChangeInputs, clearInputs] = useForm({
    title: "",
    description: "",
    imageUrl: ""
  });

  const [isTitle, setIsTitle] = useState(true);
  const [isImage, setIsImage] = useState(true)
  const [isDescription, setIsDescription] = useState(true)
  const [newRecipes, setNewRecipes] = useState([])

  const body = {
        title: form.title,
        description: form.description,
        imageUrl: form.imageUrl
  };

  const onSubmitRecipe = (e) => {
    e.preventDefault();
    console.log(form);
    setIsTitle(form.title);
    setIsDescription(form.description)
    setIsImage(form.imageUrl)
    addNewRecipe(body);
    clearInputs()
  };

  let addNewRecipe = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("cookenu.token") // Obtém o token do armazenamento local
      }
    };

    axios
      .post(`${BASE_URL}/recipe`, body, config) // Passa o config como terceiro argumento
      .then((response) => {
        setNewRecipes([...newRecipes, response.data]);
        console.log(response);
        alert("Receita cadastrada com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };


  return (
    <AddRecipePageContainer>
      <FormContainer>
        <form onSubmit={onSubmitRecipe}>
          <PageTitleStyled>Adicionar nova receita</PageTitleStyled>
          <TitleInput
            value={form.title}
            onChange={onChangeInputs}
            isValid={true}
          />
          <DesciptionTextArea
                     value={form.description}
                     onChange={onChangeInputs}
                     isValid={true}
          />
          <ImageInput
                     value={form.imageUrl}
                     onChange={onChangeInputs}
                     isValid={true}
          />

          <Button type='submit' variant="formMain">Cadastrar</Button>
        </form>
      </FormContainer>
    </AddRecipePageContainer>
  );
}
