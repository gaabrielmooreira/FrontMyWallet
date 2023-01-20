import { StyledForm } from "../styles/Styled.js"
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormNewExit() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    async function saveExit(event) {
        event.preventDefault();
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const body = { value, description };
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, body, headers);
        } catch (err) {
            return console.log(err);
        }
        navigate("/home");
    }

    return (
        <StyledForm onSubmit={saveExit}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Valor" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Descrição" />
            <button type="submit">Salvar saída</button>
        </StyledForm>
    )
}