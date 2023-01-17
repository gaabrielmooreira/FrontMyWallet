
import styled from "styled-components"
import { StyledForm, StyledLink, StyledLogo } from "../styles/Styled"

export default function LoginPage(){
    return (
        <StyledLoginPage>
            <StyledLogo>MyWallet</StyledLogo>
            <StyledForm>
                <input type="email" placeholder="E-mail" required/>
                <input type="password" placeholder="Senha" required/>
                <button>Entrar</button>
            </StyledForm>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </StyledLoginPage>
    )
}

const StyledLoginPage = styled.div`
    padding: 0px 25px;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`