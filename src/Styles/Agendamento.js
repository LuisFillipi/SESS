import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
  margin: 100px;
`;

export const Div1 = styled.div`
  width: 350px;
  margin-right: 550px; 
`;

export const Div1text = styled.h3`
  width: 580px;
  margin-right: 550px; 
  font-family: math;
`;

export const Div2 = styled.div`
  height: auto;
  width: 360px;
  border-radius: 10px;
  background-color: #e3e4f0;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const DivCalendario = styled.div``;

export const SelecaoDia = styled.div`
  margin-bottom: 20px;
`;

export const Horario = styled.div`
  margin-bottom: 20px;
`;

export const TituloAgendamento = styled.h3`
  font-family: cursive;
  display: flex;
  justify-content: center;
`;

export const TituloMotivo = styled.h3`
  font-family: cursive;
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 50px;
  margin: 0 5px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 5px;
  margin: 20px;
  background-color: white;
  cursor: pointer;
`;

export const DivHorarios = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonConfirmar = styled.button`
  border: none;
  color: white;
  background-color: #0fa943;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Motivo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputMotivo = styled.input`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 20px;
  padding: 0px 0px 0px 5px;
`;

export const Inputdata = styled.input`
  background-color: white;
  border: 2px;
  border-radius: 15px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: system-ui;
  font-size: 15px;
`;

export const Parhorario = styled.p`
  font-family: cursive;
  margin-top: auto;
  margin-left: 10px;
  display: flex;
  justify-content: left;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #9594cd;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
