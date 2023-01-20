import styled from "styled-components";
import FormSignUp from "../components/FormSignUp.js";
import { StyledLogo, StyledLink } from "../styles/Styled.js";

export default function SignUpPage(){
    return (
        <StyledSignUpPage>
            <StyledLogo>MyWallet</StyledLogo>
            <FormSignUp/>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </StyledSignUpPage>
    )
}

const StyledSignUpPage = styled.div`
    padding: 0px 25px;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`