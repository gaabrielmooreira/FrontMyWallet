import FormNewExit from "../components/FormNewExit"
import { StyledH2, StyledTransferPages } from "../styles/Styled"

export default function NewExitPage() {
    return (
        <StyledTransferPages>
            <StyledH2>Nova saída</StyledH2>
            <FormNewExit />
        </StyledTransferPages>
    )
}