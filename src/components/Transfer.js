import styled from "styled-components"

export default function Transfer() {
    return (
        <>
            <StyledDate>30/11</StyledDate>
            <StyledTransferDescription isEntry={true}>
                <p>Almoço mãe</p>
                <span>39,90</span>
            </StyledTransferDescription>
        </>
    )
}


const StyledDate = styled.p`
    width: 20%;
    color: #C6C6C6;
    font-weight: 400;
    font-size: 16px;
`

const StyledTransferDescription = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
    p {
        color: #000000;
    }
    span {
        color: ${props => props.isEntry ? "#03AC00" : "#C70000"};
    }
`