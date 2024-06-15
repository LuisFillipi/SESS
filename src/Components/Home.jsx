import { Secao1, ImgSecao1, Secao2, LogoSecao2, TituloSecao2, TextoSecao2, Secao3, InfoSecao3, ApiSecao3, Textos3, ApiInfo, DivNoticias, TituloNoticia, TextoNoticia, LinkImgNoticiaSecao3, NoticiaSecao3, ImgNoticiaSecao3, TituloEmprego, SubtituloEmprego, BotaoNoticia, LinkBotaoNoticia, DivTextosNoticia, Secao4, ImgSecao4, DivSequencias, Sequencia, BlocoSequencia, TextoSequencia } from '../Styles/Home'

import Header from './Header';
import Rodape from './Rodape';
import Api from './Api'

import Img1 from '../../images/ImgPrincipal1.png'
import logo from '../../images/logo.png'
import noticia from '../../images/noticia.jpg'
import Img3 from '../../images/ImgSecao3.png'

const Home = () => {
    return (
        <>
        <Header/>
            <Secao1><ImgSecao1 src={Img1} alt='#' /></Secao1>
            <Secao2>
                <LogoSecao2 src={logo} alt='#'/>
                <TituloSecao2>SUPORTE ESCOLAR SESI SENAI (SESS)</TituloSecao2>
                <TextoSecao2>Um site dedicado a melhorar a comunicação entre alunos, professores e a diretoria escolar pode ser uma ferramenta valiosa para aprimorar o ambiente educacional.
                    Em resumo, um site que facilite a comunicação entre alunos e a diretoria, ofereça feedbacks construtivos e simplifique o processo de autorizações pode contribuir significativamente para um ambiente escolar mais eficiente e colaborativo. Essa plataforma pode ser uma ferramenta poderosa para fortalecer a parceria entre todos os membros da comunidade educacional.</TextoSecao2>
            </Secao2>
            <Secao3>
                <InfoSecao3>
                    <ApiSecao3>
                        <ApiInfo><Api/></ApiInfo>
                    </ApiSecao3>
                    <DivNoticias>
                        <Textos3>
                            <TituloNoticia>INFORMA SESI</TituloNoticia>
                            <TextoNoticia>Atualize-se, acesse os últimos acontecimentos nas escolas Sesi e fique por dentro das novas notícias. Já acessou?</TextoNoticia>
                        </Textos3>
                        <NoticiaSecao3>
                            <LinkImgNoticiaSecao3 href='https://al.sesi.com.br/noticias/iel-oferta-40-vagas-para-jovem-aprendiz-em-arapiraca/'><ImgNoticiaSecao3 src={noticia} alt='#'/></LinkImgNoticiaSecao3>
                            <DivTextosNoticia>
                                <TituloEmprego>IEL oferta 40 vagas para jovem aprendiz em Arapiraca</TituloEmprego>
                                <SubtituloEmprego>Seleção será para a área de teleatendimento
                                </SubtituloEmprego>
                            </DivTextosNoticia>
                        </NoticiaSecao3>
                        <LinkBotaoNoticia href='https://al.sesi.com.br/todos-artigos/'><BotaoNoticia>Acessar Todas as Notícias</BotaoNoticia></LinkBotaoNoticia>
                    </DivNoticias>
                </InfoSecao3>
            </Secao3>
            <Secao4>
                <DivSequencias>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Alunos enviem seus feedbacks à diretoria, compartilhando suas opiniões sobre a escola, eventos, atividades extracurriculares e questões relevantes.
                            A diretoria, por sua vez, pode usar esses feedbacks para tomar decisões e melhorar a qualidade da educação.</TextoSequencia>
                    </Sequencia>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Com o auxílio dos feedbacks, os alunos podem enviar mensagens diretamente à diretoria. Dessa forma, a comunicação se torna mais fácil e eficiente.</TextoSequencia>
                    </Sequencia>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Os alunos podem verificar o status de suas solicitações e receber notificações quando houver atualizações. Enquanto a diretoria pode monitorar o fluxo de autorizações e garantir que todas sejam tratadas adequadamente.</TextoSequencia>
                    </Sequencia>
                </DivSequencias>
                <ImgSecao4 src={Img3} alt='#' />
            </Secao4>
            <Rodape/>
        </>
    )
}

export default Home;