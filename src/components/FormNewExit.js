import { StyledForm } from "../styles/Styled.js"
export default function FormNewExit() {
    return (
        <StyledForm>
            <input type="number" placeholder="Valor" />
            <input type="tex" placeholder="Descrição" />
            <button>Salvar saída</button>
        </StyledForm>
    )
}