import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Mapper = (props) => {
  const { dergiler } = props;
  return (
    dergiler &&
    dergiler.map((dergi) => {
      return (
        <Col md={3}>
          <Card className="mt-4" style={{ width: "14rem" }}>
            <a rel="noopener noreferrer" target="_blank" href={dergi.link}>
              {" "}
              <Card.Img variant="top" src={dergi.kapak} />
            </a>
            <Card.Body>
              <Card.Title>{dergi.isim}</Card.Title>
              <Card.Text>{dergi.ozet}</Card.Text>
              <Button variant="primary">Oku</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    })
  );
};

export default Mapper;
