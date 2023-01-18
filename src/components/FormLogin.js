import { StyledForm } from "../styles/Styled"

export default function FormLogin() {
    return (
        <StyledForm>
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <button>Entrar</button>
        </StyledForm>
    )
}