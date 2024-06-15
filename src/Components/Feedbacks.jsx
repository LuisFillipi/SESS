import React, { useState } from 'react';
import { SectionFeed, DivImage, Imagemfeed, DivForm, H1Div, FormContainer, Label, DivInput, Input, InputU, InputT, DivInputT, DivInputU, Button, Penvio, DivEnvio } from "../Styles/Feedbacks"

import Header from './Header';
import Rodape from './Rodape';

import imgFeedb from "../../images/ImgFeedb.jpg"

const Form = () => {
    const [formValidacao, setForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const unidade = e.target.elements.unidade.value;
        const turma = e.target.elements.turma.value;
        const message = e.target.elements.message.value;

        if (name && unidade && turma && message) {
            setForm(true);
            e.target.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };
    const handleResetForm = () => {
        setForm(false);
    };

    return (
        <>
        <Header/>
            <SectionFeed>
                <DivImage>
                    <Imagemfeed src={imgFeedb} />
                </DivImage>
                <DivForm>
                    <H1Div>Compartilhe conosco seu feedback!</H1Div>

                    {!formValidacao ? (
                        <FormContainer onSubmit={handleSubmit} >
                            <Label for="name">
                                Nome Completo:
                            </Label>



                            <Input
                                type="text"
                                name="name"
                                placeholder="Digite seu nome..."
                            />
                            <DivInput>
                                <DivInputU>
                                    <Label for="unidade">
                                        Unidade:
                                    </Label>
                                    <InputU
                                        type="text"
                                        name="unidade"
                                        placeholder=""
                                    />
                                </DivInputU>
                                <DivInputT>
                                    <Label for="turma">
                                        Turma:
                                    </Label>
                                    <InputT
                                        type="Number"
                                        name="turma"
                                        placeholder=""

                                    />
                                </DivInputT>
                            </DivInput>


                            <Label for="message">
                                Deixe sua sugestão:
                            </Label>
                            <Input
                                as="textarea"
                                name="message"
                                placeholder=""
                                rows="4"
                            />
                            <Button type="submit">Enviar</Button>

                        </FormContainer>
                    ) : (
                        <DivEnvio>
                            <Penvio>Formulário enviado com sucesso!</Penvio>
                            <Button onClick={handleResetForm}>Enviar outro feedback</Button>
                        </DivEnvio>
                    )}
                </DivForm>
            </SectionFeed>
        <Rodape/>
        </>
    );
};

export default Form;