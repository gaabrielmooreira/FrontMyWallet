import FormNewEntry from "../components/FormNewEntry.js"
import { StyledH2, StyledTransferPages } from "../styles/Styled.js"

export default function NewEntryPage(){
    return (
        <StyledTransferPages>
            <StyledH2>Nova entrada</StyledH2>
            <FormNewEntry/>
        </StyledTransferPages>
    )
}