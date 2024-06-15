import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';

import Feedbacks from './Feedbacks';
import Home from './Home';
import Agendamento from './Agendamento';
import LoginPage from './LoginPage';
import Erro from './Erro';

const App = () =>{

    // const [logado, setLogado] = React.useState(true)
    // {logado ?
    // : <Login /> }

    return(
        <>
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/feedbacks' element={<Feedbacks/>}/>
                <Route path='/agendamento' element={<Agendamento/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App;