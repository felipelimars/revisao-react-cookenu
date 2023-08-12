import styled from "styled-components";

export const DetailsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2vh;
margin-top: 4vh;
`

export const ImageDetail = styled.img`
width: 40vw;
height: 40vh;
`

export const ImageLoading = styled.img`
  width: 5vw;
  height: 10vh;
  margin-top: 40vh;
  margin-left: 48%; 
`;

export const TitleBold = styled.h1`
font-weight: bold;
font-size: 3vh;
`
export const RecipeDescription = styled.p`
width: 40vw;
`
export const UnderlineRecipe = styled.hr`
width: 40vw;
margin: 2vh;
border-color: black;
`