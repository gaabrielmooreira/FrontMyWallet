import { StyledForm } from "../styles/Styled"
export default function FormNewExit() {
    return (
        <StyledForm>
            <input type="number" placeholder="Valor" />
            <input type="tex" placeholder="Descrição" />
            <button>Salvar saída</button>
        </StyledForm>
    )
}