import styled from "styled-components"

export default function Transfer({userTransfer}) {
    const {value, descripition, type} = userTransfer;
    return (
        <StyledTransfer>
            <StyledDate>30/11</StyledDate>
            <StyledTransferDescription type={type}>
                <p>{descripition}</p>
                <span>{value}</span>
            </StyledTransferDescription>
        </StyledTransfer>
    )
}


const StyledTransfer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

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
        color: ${props => props.type === "entry" ? "#03AC00" : "#C70000"};
    }
`