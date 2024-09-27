import { Row, Image, Col, Container } from "react-bootstrap";
import imgCabecalho from "../../assets/imagens/Eleicoes-2024.png";

export default function Cabecalho(props) {

    return (
        <Container>
            <Row>
                <Col>
                    <Image height={250} src={imgCabecalho} />
                </Col>
            </Row>
        </Container>
    );
        
}