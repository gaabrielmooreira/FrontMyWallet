import { StyledForm, StyledH2, StyledTransferPages } from "../styles/Styled"

export default function NewEntryPage(){
    return (
        <StyledTransferPages>
            <StyledH2>Nova entrada</StyledH2>
            <StyledForm>
                <input type="number" placeholder="Valor"/>
                <input type="tex" placeholder="Descrição"/>
                <button>Salvar entrada</button>
            </StyledForm>
        </StyledTransferPages>
    )
}