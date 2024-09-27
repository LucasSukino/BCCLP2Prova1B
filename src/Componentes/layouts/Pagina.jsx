import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <Container fluid>
            <Cabecalho/>
            {props.children}
            <Rodape informacoes={"O 1º turno do pleito está marcado para 6 de outubro."}/>
        </Container>
    );
}