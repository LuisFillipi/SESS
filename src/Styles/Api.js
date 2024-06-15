import styled from "styled-components"

const Cor = {
    RoxoClaro: "#E3E4F0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "#0FA943",
    White: "#ffffff"
}

export const Container = styled.section`
    font-family: 'Nunito Sans';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
`
export const Textos = styled.div`
    border-radius: 10px;
`

export const Titulo = styled.h1`
    font-size: 15px;
    text-align: center;
    color: ${Cor.RoxoEscuro};
    font-weight: 900;
`
export const Dados = styled.div`
    margin: 10px 5px;
    font-size: 11px;
    font-weight: 600;
`
export const Subtitulo= styled.p`
    margin: 10px 3px;
    font-size: 11px;
    font-weight: 600;
`

export const InfoInput= styled.div`
    margin: 10px 5px;
    font-size: 12px;
    font-weight: 600;
`
export const Input = styled.input`
    margin: 10px 5px;
    font-size: 12px;
    font-weight: 500;
    width: 300px;
    height: 30px;
`
export const Botao = styled.button`
    margin: 10px 5px;
    font-size: 11px;
    font-weight: 600;
    height: 36px;
    width: 87px;
    border: transparent;
    background-color: ${Cor.RoxoEscuro};
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

export const DadosApresentados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${Cor.RoxoEscuro};
    border-radius: 5px;
    padding: 10px 92px;
`
export const Nome = styled.h2`
    font-size: 14px;
    font-weight: 800;
    color: ${Cor.RoxoEscuro};
    background-color: ${Cor.RoxoClaro};
    padding: 8px;
    border-radius: 5px;
`

export const Span = styled.span`
    font-weight: 700;
    color: ${Cor.RoxoMedio};
    font-size: 15px;
`
export const Informativo = styled.p`
    
`
export const Infos = styled.div`
    font-size: 12px;
    font-weight: 600;
`
