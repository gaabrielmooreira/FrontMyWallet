import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js"
import { StyledForm } from "../styles/Styled.js"
export default function FormNewEntry() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    async function saveEntry(event) {
        event.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const valueNumber =  Number(value.replace(",","."));

        const body = { value: valueNumber, description, type: "entry"};

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, body, config);
        } catch (err) {
            return console.log(err);
        }
        navigate("/home");
    }

    return (
        <StyledForm onSubmit={saveEntry}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Valor" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Descrição" />
            <button type="submit">Salvar entrada</button>
        </StyledForm>
    )
}