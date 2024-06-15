import styled from "styled-components"


const Cor = {
    RoxoClaro: "#DADBF0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "#0FA943",
    White: "#ffffff"
}

export const Secao1 = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
`

export const ImgSecao1 = styled.img`
    border: 1px solid #9594CD;
    border-radius: 20px;
    max-width: 2000px;
    min-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Secao2 = styled.section`
    background-color: ${Cor.RoxoClaro};
    min-height: 500px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Cor.RoxoEscuro};
`

export const LogoSecao2 = styled.img`
    margin-top: 50px;
    width: 60px;
    height: 75px;
`

export const TituloSecao2 = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 600;
    margin-top: 50px;
`

export const TextoSecao2 = styled.p`
    width: 50%;
    text-align: justify;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 25px;
    font-weight: 500;
`

export const Secao3 = styled.section`
    margin: 0px 300px 50px 300px;
`

export const InfoSecao3 = styled.div`
    display: flex;
    justify-content: center;
`

export const ApiSecao3 = styled.div`
    background-color: ${Cor.RoxoEscuro};
    width: 55%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 0px 0px 10px;
`
export const ApiInfo = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 90%;
    height: 500px;
`

export const DivNoticias = styled.div`
    background-color: ${Cor.RoxoEscuro};
    width: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 0px 10px 10px 0px;
`

export const Textos3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
`

export const TituloNoticia = styled.h3`
    font-family: "Jomhuria", serif;
    color: white;
    font-size: 70px;
    letter-spacing: 5px;
`

export const TextoNoticia = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: ${Cor.White};
    opacity: 80%;
    font-weight: 200;
    font-size: 15px;
    width: 400px;
    margin-top: -50px;
    text-align: justify;
    width: 330px;
`

export const NoticiaSecao3 = styled.div`
    display: flex;
    margin: 40px ;
    align-items: end;
`
export const ImgNoticiaSecao3 = styled.img`
    width: 200px;
    height: 180px;
`

export const LinkImgNoticiaSecao3 = styled.a`
`

export const DivTextosNoticia = styled.div`
    margin-left: 15px;
`
export const TituloEmprego = styled.h1`
    color: white;
    font-size: 18px;
    font-family: 'Nunito Sans';
    font-weight: 700;
`
export const SubtituloEmprego = styled.p`
    font-size: 10px;
    color: white;
    opacity: 50%;
    font-family: 'Nunito Sans';
`
export const BotaoNoticia = styled.button`
    margin-top: 15px;
    width: 80%;
    height: 45px;
    border-radius: 10px;
    border: transparent;
    background-color: ${Cor.Verde};
    color: white;
    font-weight: 800;
    cursor: pointer;
`

export const LinkBotaoNoticia = styled.a`
    display: flex;
    justify-content: center;
    text-decoration: none;
`

export const Secao4 = styled.section`
    margin: 0px 150px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ImgSecao4 = styled.img`
    height: 480px;
    width: 500px;
`

export const DivSequencias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Sequencia = styled.div`
    display: flex;
    align-items: center;
`

export const BlocoSequencia = styled.div`
    background-color: ${Cor.RoxoMedio2};
    width: 50px;
    height: 50px;
    border-radius: 15px;
`

export const TextoSequencia = styled.h3`
    font-size: 14px;
    font-family: 'Nunito Sans';
    width: 500px;
    margin-left: 30px;
    color: ${Cor.RoxoEscuro};
`