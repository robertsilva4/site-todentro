import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
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
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;