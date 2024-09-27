import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Row, Col, Image, Button, Form } from 'react-bootstrap';

export default function DetalhesCandidato(props) {
    const [perguntas, setPerguntas] = useState([]);
    const [novaPergunta, setNovaPergunta] = useState('');

    useEffect(() => {
        if (props.candidatoSelecionado) {
           
            const idCandidato = props.candidatoSelecionado.id;
            const perguntasSalvas = JSON.parse(localStorage.getItem(`perguntas_${idCandidato}`)) || [];
            setPerguntas(perguntasSalvas);
        }
    }, [props.candidatoSelecionado]);

    const adicionarPergunta = (e) => {
        e.preventDefault();
        if (novaPergunta.trim()) {
            const novasPerguntas = [...perguntas, novaPergunta];
            setPerguntas(novasPerguntas);
            setNovaPergunta('');

         
            const idCandidato = props.candidatoSelecionado.id;
            localStorage.setItem(`perguntas_${idCandidato}`, JSON.stringify(novasPerguntas));


            const currentCount = parseInt(localStorage.getItem(`questionamentos_${idCandidato}`)) || 0;
            localStorage.setItem(`questionamentos_${idCandidato}`, currentCount + 1);
        }
    };

    const curtidas = parseInt(localStorage.getItem(`curtidas_${props.candidatoSelecionado.id}`)) || 0;
    const naoCurtidas = parseInt(localStorage.getItem(`naoCurtidas_${props.candidatoSelecionado.id}`)) || 0;
    const questionamentos = parseInt(localStorage.getItem(`questionamentos_${props.candidatoSelecionado.id}`)) || 0;

    return (
        <Container>
            <h1>Detalhes do Candidato</h1>
            <Row>
                <Col md={4}>
                    <Image src={props.candidatoSelecionado.avatar} alt="Avatar do Candidato" fluid />
                </Col>
                <Col md={8}>
                    <p><strong>Nome:</strong> {props.candidatoSelecionado.nome}</p>
                    <p><strong>Email:</strong> {props.candidatoSelecionado.email}</p>
                    <p><strong>Curtidas:</strong> {curtidas}</p>
                    <p><strong>Não Curtidas:</strong> {naoCurtidas}</p>
                    <p><strong>Questionamentos:</strong> {questionamentos}</p>
                </Col>
            </Row>
            <h5>Suas propostas:</h5>
            <ol>
                {props.candidatoSelecionado.propostas.map((proposta, index) => (
                    <li key={index}>{proposta}</li>
                ))}
            </ol>
            <h2>Dúvidas</h2>
            <Form onSubmit={adicionarPergunta}>
                <Form.Group controlId="novaPergunta">
                    <Form.Label>Adicionar Nova Pergunta:</Form.Label>
                    <Form.Control
                        type="text"
                        value={novaPergunta}
                        onChange={(e) => setNovaPergunta(e.target.value)}
                        placeholder="Digite sua pergunta aqui"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Adicionar Pergunta</Button>
            </Form>
            <h3>Dúvidas Questionadas:</h3>
            <ListGroup>
                {perguntas.map((pergunta, index) => (
                    <ListGroup.Item key={index}>{pergunta}</ListGroup.Item>
                ))}
            </ListGroup>
            <Button onClick={() => props.setDetalharCandidato(false)}>Voltar</Button>
        </Container>
    );
}
