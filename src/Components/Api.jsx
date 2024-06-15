import React, { useState} from 'react';

import { Container, Textos, Titulo, Subtitulo, InfoInput, Input, Botao, DadosApresentados, Nome, Span, Informativo, Infos} from '../Styles/Api'

const Api = () => {

    const apiKey = '0ea7dedc17bbf6bc4a5cf3b2e7a4197d'

    // const [dados, setDados] = useState([]);
    const [city, setCity] = useState('');
    const [previsaoTempo, setPrevisaoTempo] = useState(null)

    const manipularChange = (event) => {
        setCity(event.target.value)
    }

    const manipularPesquisa = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&main.temp&lang=pt&units=metric`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw new Error('Erro ao buscar dados');
                }
            })
            .then((data) => {
                setPrevisaoTempo(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <Container>
            <Textos>
                <Titulo>VERIFIQUE A PREVISÃO DO TEMPO DA SUA CIDADE!</Titulo>
                <Subtitulo>Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar.</Subtitulo>
            </Textos>
            <InfoInput>
                    <Input
                        onChange={manipularChange}
                        type="text"
                        value={city} 
                        placeholder='Ex.: Maceió, Rio de Janeiro...'/>
                <Botao onClick={manipularPesquisa}> Pesquisar </Botao>
            </InfoInput>

            {previsaoTempo && (
                <DadosApresentados>
                    <Nome>Previsão em: {(previsaoTempo.name).toUpperCase()}📌</Nome>
                    <Infos>
                        <Informativo>🌡️ <Span>Temperatura: </Span>{(previsaoTempo.main.temp).toFixed(2)}°C</Informativo>
                        <Informativo>❄️ <Span>Temperatura Mínima:</Span> {(previsaoTempo.main.temp_min).toFixed(2)}°C</Informativo>
                        <Informativo>🔥<Span>Temperatura Máxima:</Span> {(previsaoTempo.main.temp_max).toFixed(2)}°C</Informativo>
                        <Informativo>💧<Span>Umidade:</Span> {(previsaoTempo.main.humidity)}</Informativo>
                        <Informativo>🔻 <Span>Condição:</Span> {previsaoTempo.weather[0].description}</Informativo>
                    </Infos>
                </DadosApresentados>
            )}

        </Container>
    );
}

export default Api;
