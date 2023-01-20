import styled from "styled-components"
import { StyledH2, StyledLinkNoAuthorizate } from "../styles/Styled.js"
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext.js";
import { RiLogoutBoxRLine } from "react-icons/ri"
import TransferButtons from "../components/TransferButtons.js";
import TransferHistory from "../components/TransferHistory.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
    const [name, setName] = useState("Fulano");
    const [userTransfers, setUserTransfers] = useState([]);
    const [saldo, setSaldo] = useState(0);

    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);

    useEffect( () => {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        async function apiGetHome(){
            try{
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
                setName(response.data.name);
                const transfers = response.data.userTransfers;
                setUserTransfers(transfers);
                setSaldo(response.data.saldo);
            } catch (err){
                console.log(err);
            }
        }
        apiGetHome();
    }, []);

    if (!token) {
        return <StyledLinkNoAuthorizate to="/">
            <button>Faça Login</button>
        </StyledLinkNoAuthorizate>;
    }

    function logout() {
        setToken("");
        navigate("/");
    }
    
    return (
        <StyledHomePage>
            <StyledHeader>
                <StyledH2>Olá, {name}</StyledH2>
                <StyledIconLogOut onClick={logout} />
            </StyledHeader>

            <TransferHistory userTransfers={userTransfers} saldo={saldo}/>

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