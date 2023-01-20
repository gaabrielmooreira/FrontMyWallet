import FormNewExit from "../components/FormNewExit.js"
import { StyledH2, StyledTransferPages } from "../styles/Styled.js"

export default function NewExitPage() {
    return (
        <StyledTransferPages>
            <StyledH2>Nova saída</StyledH2>
            <FormNewExit />
        </StyledTransferPages>
    )
}