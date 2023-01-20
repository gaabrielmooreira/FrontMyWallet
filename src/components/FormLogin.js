import { useContext, useState } from "react";
import { StyledForm } from "../styles/Styled.js"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export default function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        const body = { email, password }
        try {
            const token = await axios.post(`${process.env.REACT_APP_API_URL}`, body)
            setToken(token);
        } catch (err) {
            return console.log(err);
        }
        navigate("/home");
    }

    return (
        <StyledForm onSubmit={login}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
            <button type="submit">Entrar</button>
        </StyledForm>
    )
}