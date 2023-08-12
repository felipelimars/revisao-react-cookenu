import styled from "styled-components";

export const CenterPageContainer = styled.div `
    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    flex-direction: column;
`

export const FormContainer = styled.div`
    min-width: 40vw;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 10px;

    img {
    width: 40vw;
    display: flex;
  }

    input, p {
        margin-bottom: 10px;
        align-items: center;
    }
    
`