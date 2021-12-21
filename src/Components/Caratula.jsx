import {Card, Col, Container, Row } from "react-bootstrap";
import "./caratula.css";

export default function Caratula({ caratula }) {
  const { image, name, species, location, status } = caratula;

  return (
      <Card className="card-noticia d-flex flex-wrap mx-5 mt-4">
        <Container>
          <Row>
            <Col className="p-0">
              <Card.Img className="p-0" variant="" src={image} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className="Card-Title text-center">{name} </Card.Title>
                <div className="d-flex">
                <Card.Text className="mt-4 mx-1 Card-Text text-center">{status}</Card.Text>
                <Card.Text className="mt-4 mx-1 Card-Text text-center">{species}</Card.Text>
                </div>
                <Card.Text className="mt-4 Card-Text2 text-center">"{location.name}"</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
  );
}
