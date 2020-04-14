import React from "react";
import DergilerMapper from "./DergilerMapper";
import dergilerStyle from "./Dergiler.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dergiler2020 from "../../../arsiv/2020";

const Dergiler = () => {
  return (
    <div className="dergiler">
      <Container>
        <h3>Son Sayılar</h3>
        <Row>
          <DergilerMapper dergiler={dergiler2020}></DergilerMapper>
        </Row>
      </Container>
    </div>
  );
};

export default Dergiler;
