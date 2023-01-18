import FormNewEntry from "../components/FormNewEntry"
import { StyledH2, StyledTransferPages } from "../styles/Styled"

export default function NewEntryPage(){
    return (
        <StyledTransferPages>
            <StyledH2>Nova entrada</StyledH2>
            <FormNewEntry/>
        </StyledTransferPages>
    )
}