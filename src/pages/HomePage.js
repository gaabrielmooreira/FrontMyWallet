import styled from "styled-components"
import { StyledH2, StyledLinkNoAuthorizate } from "../styles/Styled.js"
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";
import { RiLogoutBoxRLine } from "react-icons/ri"
import TransferButtons from "../components/TransferButtons.js";
import TransferHistory from "../components/TransferHistory.js";

export default function HomePage() {
    
    const { token } = useContext(AuthContext);
    if (!token) {
        return <StyledLinkNoAuthorizate to="/">
            <button>Faça Login</button>
        </StyledLinkNoAuthorizate>;
    }

    return (
        <StyledHomePage>
            <StyledHeader>
                <StyledH2>Olá, Fulano</StyledH2>
                <StyledIconLogOut />
            </StyledHeader>

            <TransferHistory />
            
            <TransferButtons />
        </StyledHomePage>
    )
}


const StyledHomePage = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    padding: 25px 25px 15px 25px;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
`

const StyledIconLogOut = styled(RiLogoutBoxRLine)`
    font-size: 24px;
    color: #FFFFFF;
`