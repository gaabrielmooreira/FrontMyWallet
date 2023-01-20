import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { StyledForm } from "../styles/Styled.js"
import axios from 'axios';

export default function FormSignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const signUp = async (event) => {
        event.preventDefault();
        const body = { name, email, password, confirmPassword };
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body);
            
        } catch (err) {
            console.log(err);
            if (err.response.status === 422) {
                const data = err.response.data;
                data.forEach(element => {
                    if (element.includes('"email"')) alert("Email inválido.")
                    if (element.includes('"password"')) alert("A senha deve conter 8 dígitos numéricos.");
                    if (element.includes('"confirmPassword"')) alert("Os dois campos de senha devem ser iguais.");
                });
                return;
            };
            if (err.response.status === 409) return alert("Esse email já está sendo usado.");
        }
        navigate("/");
    }

    return (
        <StyledForm onSubmit={signUp}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme a senha" />
            <button type="submit">Cadastrar</button>
        </StyledForm>
    )
}