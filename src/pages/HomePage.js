import styled from "styled-components"
import { StyledH2 } from "../styles/Styled"
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri"

export default function HomePage() {
    return (
        <StyledHomePage>
            <StyledHeader>
                <StyledH2>Olá, Fulano</StyledH2>
                <StyledIconLogOut />
            </StyledHeader>
            <StyledTransferHistory>
                {true && <p>Não há registros de<br />
                    entrada ou saída</p>}
            </StyledTransferHistory>
            <StyledTransferButtons>
                <StyledTransferButton>
                    <StyledIconPlus />
                    <p>Nova<br /> entrada</p>
                </StyledTransferButton>
                <StyledTransferButton>
                    <StyledIconMinus />
                    <p>Nova<br /> saída</p>
                </StyledTransferButton>
            </StyledTransferButtons>
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

const StyledTransferHistory = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #868686;
    flex-direction: column;
    background-color: #FFFFFF;
    height: 446px;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 13px;
`

const StyledTransferButtons = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledTransferButton = styled.button`
    padding: 10px;
    width: 155px;
    height: 114px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A328D6;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 700;
    text-align: justify;
    border: none;
    border-radius: 5px;
`

const StyledIconPlus = styled(HiOutlinePlusCircle)`
    font-size: 25px;
`

const StyledIconMinus = styled(HiOutlineMinusCircle)`
    font-size: 25px;
`