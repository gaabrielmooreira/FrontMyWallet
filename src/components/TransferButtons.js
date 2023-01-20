import styled from "styled-components"
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function TransferButtons() {
    return (
        <StyledTransferButtons>
            <StyledTransferButton to="/nova-entrada">
                <StyledIconPlus />
                <p>Nova<br /> entrada</p>
            </StyledTransferButton>
            <StyledTransferButton to="/nova-saida">
                <StyledIconMinus />
                <p>Nova<br /> saída</p>
            </StyledTransferButton>
        </StyledTransferButtons>
    )
}

const StyledTransferButtons = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledTransferButton = styled(Link)`
    padding: 10px;
    width: 48%;
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
    text-decoration: none;
`

const StyledIconPlus = styled(HiOutlinePlusCircle)`
    font-size: 25px;
`

const StyledIconMinus = styled(HiOutlineMinusCircle)`
    font-size: 25px;
`