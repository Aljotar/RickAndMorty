import { Card, Col, Row } from "react-bootstrap";

export const Principal = () => {
  return (
    <div className="d-flex justify-content-center bg-white">
      <Row className="principal bg-white">
        <Col className="pb-5">
          <Card style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfkJ-7hcIX9HxNjyYYVF1WrNJHi1lbyk3dsjIHLBRxOs3iWFHx73vavYCaiVx8gs4Zq-aPrNP-RpD0857vHlMJixz7tiKJR9oh6r.png"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
