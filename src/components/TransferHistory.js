import styled from "styled-components"
import Transfer from "./Transfer";

export default function TransferHistory() {
    const dataTransfer = [];
    return (
        <StyledTransferHistory noHistory={dataTransfer === undefined ? true:false}>
            {
                dataTransfer === undefined ?
                    <StyledTransfer>
                        <Transfer />
                    </StyledTransfer>:
                    <p>Não há registros de<br />entrada ou saída</p>
            }
        </StyledTransferHistory>
    )
}

const StyledTransferHistory = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.noHistory ? "flex-start": "center"};;
    align-items: ${props => props.noHistory ? "flex-start": "center"};
    color: #868686;
    flex-direction: column;
    background-color: #FFFFFF;
    height: 446px;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 13px;
`

const StyledTransfer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
`