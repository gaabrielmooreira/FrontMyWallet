import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`

export const StyledForm = styled.form`
    margin-top: 28px;
    input {
        font-family: 'Raleway',sans-serif;
        margin-bottom: 13px;
        width: 100%;
        height: 58px;
        border: none;
        border-radius: 5px;
        padding-left: 15px;
        padding: 15px;
        &::placeholder{
            color: #000000;
            font-size: 20px;
            font-weight: 400;
        }
    }
    button {
        width: 100%;
        height: 46px;
        border: none;
        border-radius: 5px;
        background-color: #A328D6;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
    }
`

export const StyledLink = styled(Link)`
    font-family: 'Raleway',sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    margin-top: 32px;
    text-decoration: none;
`

export const StyledH2 = styled.h2`
    font-family: 'Raleway',sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 30px;
` 

export const StyledTransferPages = styled.div`
background-color: #8C11BE;
height: 100vh;
padding: 25px;
`