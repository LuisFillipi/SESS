import styled, {keyframes} from "styled-components"

const Cor = {
    RoxoClaro: "#E3E4F0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "0FA943",
    White: "#ffffff"
}


export const teste = keyframes`
    from {
        opacity: 0;
        transform: translateX(15px);
    }

    to {
        opacity: 1;
    }
`

export const Navbar = styled.nav`
    background-color: ${Cor.RoxoMedio2};
    color: ${Cor.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;

    animation: ${teste} 1s ease-in-out;
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
`

export const LogoTexto = styled.h1`
    color: ${Cor.White};
    font-weight: 800;
    font-size: 20px;
    margin-left: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const Img = styled.img`
    width: 33px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Paginas = styled.div`
    color: ${Cor.White};
`