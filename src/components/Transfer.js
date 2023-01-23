import axios from "axios";
import { useContext } from "react";
import styled from "styled-components"
import AuthContext from "../contexts/AuthContext";

export default function Transfer({transferModify,setTransferModify,userTransfer}) {
    const {_id, value, description, type, date} = userTransfer;
    const transferId = _id;

    const { token } = useContext(AuthContext);
    
    async function deleteTransfer(){
        const confirmDelete = window.confirm("Quer mesmo deletar essa tranferência?");
        if(!confirmDelete) return;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try{
            await axios.delete(`${process.env.REACT_APP_API_URL}/home/${transferId}`, config);
        } catch(err){
            return alert("Não foi possível deletar essa transferência.");
        }
        setTransferModify(!transferModify);
    }

    return (
        <StyledTransfer>
            <StyledDate>{date}</StyledDate>
            <StyledTransferDescription type={type}>
                <p>{description}</p>
                <div>
                    <span>{value.toFixed(2).replace(".",",")}</span>
                    <StyledDelete onClick={deleteTransfer}>X</StyledDelete>
                </div>
            </StyledTransferDescription>
        </StyledTransfer>
    )
}


const StyledTransfer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const StyledDate = styled.p`
    width: 20%;
    color: #C6C6C6;
    font-weight: 400;
    font-size: 16px;
    text-align: start;
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
    div{
        display: flex;
        width: 40%;
        justify-content: flex-end;
        align-items: center;
    }
    span {
        color: ${props => props.type === "entry" ? "#03AC00" : "#C70000"};
    }
    
`

const StyledDelete = styled.button`
    border: none;
    background-color: #FFFFFF;
    color: #C6C6C6;
    &:hover {
        cursor: pointer;
    }
`