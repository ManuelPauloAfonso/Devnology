import { Container } from "./style";
import logo from '../../assets/logo.svg'


export default function Header() {
    return (
        < Container >
            <img src={logo} alt="" />

            <ul>
                <li>sobre nós</li>
                <li>contacto</li>
                <li>serviço</li>
                <button>login</button>
            </ul>
        </Container >
    )
}