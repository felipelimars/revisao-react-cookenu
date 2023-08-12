import React, { useEffect, useState } from "react";
import axios from "axios";
import { FeedContainerStyled, RecipeCardStyled, RecipeImage, RecipeTitle } from "./styled";
import { BASE_URL } from "../../constants/index";
import { goToRecipeDetailPage, goToRecipe, goToLoginPage } from '../../routes'
import { useNavigate } from 'react-router-dom'
import { Button } from "@chakra-ui/react";
import { UseProtectedPage } from "../../hooks/use-protectedPage";

export const FeedPage = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate()
  UseProtectedPage(navigate)

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    axios
      .get(`${BASE_URL}/recipe/all`, {
        headers: {
          Authorization: localStorage.getItem("cookenu.token")
        }
      })
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickCard = (navigator, id) => {
    goToRecipeDetailPage(navigator,id)
  }

  const onClickAddButton = () => {
    goToRecipe(navigate)
  }

  const removeCard = (idToRemove) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== idToRemove));
  }

  return (
    <FeedContainerStyled>
      {recipes.map((recipe, i) => (
        <RecipeCardStyled  key={i} isVisible={!!recipe.imageUrl}>
          <RecipeImage
            onClick={() => onClickCard(navigate, recipe.id)}
            src={recipe.imageUrl}
            alt="Foto receita"
            onError={() => removeCard(recipe.id)}
          />
          <RecipeTitle>{recipe.title}</RecipeTitle>
        </RecipeCardStyled>
      ))}
      <Button onClick={() => onClickAddButton()} variant="add-recipe">+</Button>
    </FeedContainerStyled>
  );
};


