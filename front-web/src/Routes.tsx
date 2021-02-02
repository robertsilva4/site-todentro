import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Home from "./Home";
import Login from "./Login";
import Vagas from "./Vagas";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cadastro">
                    <Cadastro />
                </Route>
                <Route path="/vagas">
                    <Vagas />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;