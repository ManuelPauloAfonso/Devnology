import { Container } from "./style";
import banner from '../../assets/banner.svg'


export default function Banner() {
    return (
        <Container>
            <div>
                <h1>A melhor forma <br /> de Guardar seus Links</h1>
                <p>Meet the only spend management platform and corporate card.</p>
                <button>Guardar</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </Container>
    )
}