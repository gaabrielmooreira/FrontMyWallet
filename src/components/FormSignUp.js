import { StyledForm } from "../styles/Styled"
export default function FormSignUp() {
    return (
        <StyledForm>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a senha" />
            <button>Cadastrar</button>
        </StyledForm>
    )
}