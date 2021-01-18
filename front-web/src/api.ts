import axios from "axios";

const BASE_URL = "http://localhost/trabalhos/site-todentro/backend";
export function fetchVagas(){
    return axios(`${BASE_URL}/emprego`)
}

