import styled from "styled-components"

export default function TransferHistory() {
    return (
        <StyledTransferHistory>
            {true && <p>Não há registros de<br />
                entrada ou saída</p>}
        </StyledTransferHistory>
    )
}

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