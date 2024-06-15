import React, { useState } from 'react';
import {Horario, TituloAgendamento, TituloMotivo, InputMotivo, Inputdata, Motivo, SelecaoDia, Div1, Div1text, Div2, DivCalendario, Container, Button, ButtonConfirmar, Parhorario, ModalContent,ModalContainer, CloseButton, DivHorarios
} from '../Styles/Agendamento.js';

import Header from './Header';
import Rodape from './Rodape';

import Img from '../../images/ImgAgendamento.jpg';

const Sobre = ({ paragraph }) => {
    const [selecionarHorário, setselecionarHorário] = useState('');
    const [AbrirModal, setAbrirModal] = useState(false);

    const handleTimeClick = (time) => {
        setselecionarHorário(time);
        console.log(`Horário selecionado: ${time}`);
    };

    const handleConfirmClick = () => {
        setAbrirModal(true);
    };

    const closeModal = () => {
        setAbrirModal(false);
    };

    const getButtonStyle = (time) => {
        return selecionarHorário === time ? { backgroundColor: 'lightblue' } : {};
    };

    return (
        <>
        <Header/>
        <Container>
            <Div1>
                <Div1text>{paragraph}</Div1text>
                <img src={Img} alt="Agendamento" style={{ width: '700px', height: 'auto', marginTop: '10px' }} />
            </Div1>
            <Div2>
                <SelecaoDia>
                    <TituloAgendamento>Preencha</TituloAgendamento>
                    <hr />
                    <Parhorario>Selecione o dia</Parhorario>
                    <DivCalendario>
                        <Inputdata type="date" placeholder="Selecione a data desejada para o agendamento.." />
                    </DivCalendario>
                    <hr />
                </SelecaoDia>

                <Horario>
                    <Parhorario>Horários</Parhorario>
                    <DivHorarios style={{ display: 'flex' }}>
                        <Button style={getButtonStyle('08:00')} onClick={() => handleTimeClick('08:00')}>08:00</Button>
                        <Button style={getButtonStyle('09:00')} onClick={() => handleTimeClick('09:00')}>09:00</Button>
                        <Button style={getButtonStyle('10:00')} onClick={() => handleTimeClick('10:00')}>10:00</Button>
                        <Button style={getButtonStyle('11:00')} onClick={() => handleTimeClick('11:00')}>11:00</Button>
                    </DivHorarios>
                    <hr />
                </Horario>
                <Motivo>
                    <TituloMotivo>Motivo</TituloMotivo>
                    <InputMotivo type="text" placeholder="Digite seus motivos para o agendamento..." />
                    <ButtonConfirmar onClick={handleConfirmClick}>Confirmar Agendamento</ButtonConfirmar>
                </Motivo>
            </Div2>

            {AbrirModal && (
                <ModalContainer>
                    <ModalContent>
                        <h2>Agendamento Concluído</h2>
                        <p>Seu agendamento foi concluído com sucesso!</p>
                        <CloseButton onClick={closeModal}>Fechar</CloseButton>
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
        <Rodape/>
        </>
    );
}

export default Sobre;
