import { StyledForm } from "../styles/Styled"
export default function FormNewEntry() {
    return (
        <StyledForm>
            <input type="number" placeholder="Valor" />
            <input type="tex" placeholder="Descrição" />
            <button>Salvar entrada</button>
        </StyledForm>
    )
}