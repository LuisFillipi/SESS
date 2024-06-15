import { Link } from "react-router-dom"
import logo from '../../images/logo.png'

import { Navbar, Img, Paginas, LogoTexto, DivLogo} from '../Styles/Header'

const Header = () => {
    return (
        <Navbar>
            <DivLogo>
                <Link to='/' ><Img src={logo} alt="#" /></Link><LogoTexto>SESS</LogoTexto>
            </DivLogo>
            <Paginas>
                <Link className="linkNav" to='/home'> HOME </Link>
                <Link className="linkNav" to='/agendamento'> AGENDAMENTO </Link>
                <Link className="linkNav" to='feedbacks'> FEEDBACKS </Link>
            </Paginas> 
        </Navbar>
    )
}

export default Header;