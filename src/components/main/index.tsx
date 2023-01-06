import { Container } from "./style";
import { AiFillDelete } from 'react-icons/ai'



export default function Main() {
    return (
        < Container >
            <h1>Daily To Do List</h1>
            <div className="container-link">
                <form action="">
                    <input type="text" />
                    <button>Guardar</button>
                </form>
            </div>
            <div className="item">
                <div>
                    <ul>
                        <div>
                            <label>Como criar um crud com html css</label>
                            <li> <a href="https://www.linkedin.com/in/manuelpauloafonso/">https://www.linkedin.com/in/manuelpauloafonso/</a></li>
                        </div>
                        <a href=""><AiFillDelete color="red" fontSize={20} /></a>
                    </ul>
                    <ul>
                        <div>
                            <label>Como criar um crud com html css</label>
                            <li> <a href="https://www.linkedin.com/in/manuelpauloafonso/">https://www.linkedin.com/in/manuelpauloafonso/</a></li>
                        </div>
                        <a href=""><AiFillDelete color="red" fontSize={20} /></a>
                    </ul>
                    <ul>
                        <div>
                            <label>Como criar um crud com html css</label>
                            <li> <a href="https://www.linkedin.com/in/manuelpauloafonso/">https://www.linkedin.com/in/manuelpauloafonso/</a></li>
                        </div>
                        <a href=""><AiFillDelete color="red" fontSize={20} /></a>
                    </ul>
                </div>
            </div>
        </Container >
    )
}