import { StyledForm, StyledH2, StyledTransferPages } from "../styles/Styled"

export default function NewLeavePage(){
    return (
        <StyledTransferPages>
            <StyledH2>Nova saída</StyledH2>
            <StyledForm>
                <input type="number" placeholder="Valor"/>
                <input type="tex" placeholder="Descrição"/>
                <button>Salvar saída</button>
            </StyledForm>
        </StyledTransferPages>
    )
}