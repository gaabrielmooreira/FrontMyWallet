import styled from "styled-components";
import FormRegister from "../components/FormRegister";
import { StyledLogo, StyledLink } from "../styles/Styled";

export default function RegisterPage(){
    return (
        <StyledRegisterPage>
            <StyledLogo>MyWallet</StyledLogo>
            <FormRegister/>
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