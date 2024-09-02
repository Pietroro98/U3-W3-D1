import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourites</h1>
          {favourites.length > 0 ? (
            favourites.map((company, index) => (
              <Row
                key={index}
                className="mx-0 mt-3 p-3"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
              >
                <Col xs={9}>
                  <Link to={`/${company}`}>{company}</Link>
                </Col>
              </Row>
            ))
          ) : (
            <p>No favourites yet!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
