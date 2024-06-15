import styled from 'styled-components'

const Cor = {
    RoxoClaro: "#E3E4F0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "0FA943",
    White: "#ffffff"
}

export const Footer = styled.footer`
    background-color: ${Cor.RoxoMedio2};
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    gap: 0.5em;
    padding-top: 15px;
`

export const Links = styled.div`
    color: white;
    display: flex;
`
export const Span = styled.div`
    margin-left: 15px;
    margin-right: 15px;
`

export const RedesSociais = styled.div`
    display: flex;
    align-items: center;
`

export const LinkRedesSociais = styled.a`
margin-right: 10px;
`
export const IconFacebook = styled.img`
    width: 22px;
    height: 22px;
`
export const IconX = styled.img`
    width: 30px;
    height: 30px;
`
export const IconInstagram = styled.img`
    width: 25px;
    height: 25px;
`

export const Linha = styled.div`
    height: 30px;
    background-color: ${Cor.RoxoEscuro};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextoLinha = styled.h1`
    color: ${Cor.RoxoClaro};
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
`
