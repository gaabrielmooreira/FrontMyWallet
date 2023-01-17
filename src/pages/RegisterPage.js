

import styled from "styled-components";
import { StyledLogo,StyledForm, StyledLink } from "../styles/Styled";

export default function RegisterPage(){
    return (
        <StyledRegisterPage>
            <StyledLogo>MyWallet</StyledLogo>
            <StyledForm>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
                <button>Cadastrar</button>
            </StyledForm>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </StyledRegisterPage>
    )
}

const StyledRegisterPage = styled.div`
    padding: 0px 25px;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`