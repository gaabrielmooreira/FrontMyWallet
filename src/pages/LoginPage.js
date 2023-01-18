import styled from "styled-components"
import FormLogin from "../components/FormLogin"
import { StyledLink, StyledLogo } from "../styles/Styled"

export default function LoginPage() {
    return (
        <StyledLoginPage>
            <StyledLogo>MyWallet</StyledLogo>
            <FormLogin />
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