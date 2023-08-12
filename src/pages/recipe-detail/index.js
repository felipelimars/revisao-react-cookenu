import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { DetailsContainer, ImageDetail, ImageLoading, RecipeDescription, TitleBold, UnderlineRecipe } from "./styled";
import { UseProtectedPage } from "../../hooks/use-protectedPage";


export const RecipeDetailPage = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const navigate = useNavigate()
  UseProtectedPage(navigate)

  useEffect(() => {
    getRecipeDetails()
  }, []);

  const getRecipeDetails = () => {
    axios
      .get(`${BASE_URL}/recipe/${id}`, {
        headers: {
          Authorization: localStorage.getItem("cookenu.token"),
        },
      })
      .then((response) => {
        setRecipe(response.data); 
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!recipe ? ( 
        <ImageLoading src="https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif" alt="logo carregando"/>
      ) : (
        <DetailsContainer>
          <ImageDetail src={recipe.imageUrl} alt="imagem da receita" />
          <TitleBold>{recipe.title}</TitleBold>
          <RecipeDescription>{recipe.description}</RecipeDescription>
          <UnderlineRecipe/>
        </DetailsContainer>
      )}
    </div>
  );
};
