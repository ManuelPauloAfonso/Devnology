import { BrowserRouter, Navigate, Route, Routes as Switch, } from "react-router-dom"
import Home from "../page/home"
import { link } from "./path"



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Navigate to={link.home}></Navigate>}></Route>
                <Route path={link.home} element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;