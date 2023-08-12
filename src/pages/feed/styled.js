import styled from 'styled-components';

export const FeedContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5vh; /* Espaçamento entre os itens */
  width: 100vw;
  padding-top: 8vh;
`;

export const RecipeCardStyled = styled.div`
  width: 20vw;
  height: 50vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: ${props => (props.isVisible ? "block" : "none")};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex; /* Adicione essa linha para usar flexbox */
  flex-direction: column; /* Ajuste a direção para coluna */

  &:hover img {
    transform: scale(1.1);
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 35vh;
  margin-bottom: 6vh;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

`;

export const RecipeTitle = styled.span`
  font-size: 2.5vh;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;





