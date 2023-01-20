import FormNewExit from "../components/FormNewExit.js"
import { StyledH2, StyledTransferPages, StyledLinkNoAuthorizate } from "../styles/Styled.js"
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";

export default function NewExitPage() {
    
    const { token } = useContext(AuthContext);
    if (!token) {
        return <StyledLinkNoAuthorizate to="/">
            <button>Faça Login</button>
        </StyledLinkNoAuthorizate>;
    }

    return (
        <StyledTransferPages>
            <StyledH2>Nova saída</StyledH2>
            <FormNewExit />
        </StyledTransferPages>
    )
}