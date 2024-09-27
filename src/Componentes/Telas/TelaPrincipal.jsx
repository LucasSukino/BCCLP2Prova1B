import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";


export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false)
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(null)
    

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato setDetalharCandidato={setDetalharCandidato}
                    candidatoSelecionado={candidatoSelecionado}
                    />
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos}
                    setDetalharCandidato={setDetalharCandidato}
                    candidatoSelecionado={candidatoSelecionado}
                    setCandidatoSelecionado={setCandidatoSelecionado} />
                )
            }
        </Pagina>
        
    );
}