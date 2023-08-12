import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyled = styled.header`
height: 10vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${theme.colors.laranja["500"]}
`;
