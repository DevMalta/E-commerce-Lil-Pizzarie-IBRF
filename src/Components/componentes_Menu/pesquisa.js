import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Pesquisa() {
  return (
    <Container className="find">
      <Row>
      <Col sm={15} className="text-center">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busque aqui por sabores!!!"
              className="campo-busca rounded-pill"
              aria-label="Search"
              // size={100}
            />
            <Button className="rounded-pill btn-sm" variant="outline-primary">
              Procurar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
