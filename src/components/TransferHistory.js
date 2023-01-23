import styled from "styled-components"
import Transfer from "./Transfer.js";

export default function TransferHistory({userTransfers,saldo}) {
    return (
        <StyledTransferHistory noHistory={userTransfers ? false:true}>
            {
                userTransfers ?
                    <>  
                        <div>
                        {userTransfers?.map( (userTransfer) => <Transfer userTransfer={userTransfer} />)}
                        </div>
                        <StyledSaldo saldo={saldo}>
                            <p>SALDO</p>
                            <p>{saldo.toFixed(2).replace(".",",")}</p>
                        </StyledSaldo>
                    </>:
                    <p>Não há registros de<br />entrada ou saída</p>
            }
        </StyledTransferHistory>
    )
}

const StyledTransferHistory = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${props => props.noHistory ? "center": "space-between"};;
    align-items: ${props => props.noHistory ? "center": "flex-start"};
    color: #868686;
    flex-direction: column;
    background-color: #FFFFFF;
    height: 446px;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 13px;
    padding: 20px;
    div {
        width: 100%;
    }
`

const StyledSaldo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    p:nth-child(1){
        font-weight: 700;
        color: #000000;
    }
    p:last-child{
        font-weight: 400;
        color: ${props => (props.saldo >= 0) ? "#03AC00":"#C70000"};
    }
`