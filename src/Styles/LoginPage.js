import styled from "styled-components"

export const body = styled.div`
margin: 0%;
`

export const LoginPageContainer = styled.div`
background-color: #242666;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginFormContainer = styled.div`
  text-align: center;
  position: absolute;
`;

export const LogoImage = styled.img`
  padding: 1px;
  width: 280;
  height: 120px;
`;

export const NomeEmpresa = styled.div`
  font-family: 'Inter';
  font-weight: bold;
  padding: 1px;
  font-size: 80px;
  margin-top: 1px;
  color: whitesmoke;
`;

export const DescricaoEmpresa = styled.div`
font-family: 'Inter';
  font-size: 18px;
  color: white;
  opacity: 75%;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  color: #5f9ea0;
`;

export const Input = styled.input`
  font-family: 'Inter';
  font-weight: 600;
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  font-family: 'Inter';
  font-weight: 600;
  background-color: #4b4e9f;
  color: white;
  border-radius: 10px;
  border:transparent;
  padding: 15px 25px;
  margin-top: 20px;
  cursor: pointer;
`;
export const RedirectButton = styled.button`
    font-family: 'Inter';
  font-weight: 600;
  background-color: #4b4e9f;
  color: white;
  border-radius: 10px;
  border:transparent;
  padding: 15px 25px;
  margin-top: 20px;
  cursor: pointer;
`;