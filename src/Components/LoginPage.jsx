import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginPageContainer,LoginFormContainer,LogoImage,NomeEmpresa,DescricaoEmpresa,InputContainer,Input,LoginButton} from '../Styles/LoginPage';
import Img from '../../images/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
    const response = await fetch('http://localhost:3333/api/users');
    if (!response.ok) {
    throw new Error('Erro ao carregar os dados dos usuários');
}
    const usersData = await response.json();
    const user = usersData.find(
    (user) => user.Usuario === username && user.Senha === password
);

  if (user) {
      setError('');
      alert('Login bem-sucedido!');
      navigate('/Home');
  }else{
      setError('Usuário ou senha incorretos');
    }
  } catch (error) {
      console.error('Erro ao carregar os dados dos usuários:', error);
      setError('Erro ao conectar com o servidor: ' + error.message);
  }
};

return (
  <LoginPageContainer>
    <LoginFormContainer>
      <LogoImage src={Img} />
      <NomeEmpresa>SESS</NomeEmpresa>
      <DescricaoEmpresa>Conectando vozes, simplificando soluções.</DescricaoEmpresa>
      <InputContainer>
        <Input
          type="text"
          placeholder="Ex: Iguinho.professor@aluno.sesi.al.br"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Ex:nota10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </InputContainer>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <LoginButton onClick={handleLogin}>ENTRAR</LoginButton>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default Login;