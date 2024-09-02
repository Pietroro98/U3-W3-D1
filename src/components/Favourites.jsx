import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavourite } from '../redux/store'; 
import { Container, Row, Col, Button } from 'react-bootstrap';

const Favourites = () => {
  const favourites = useSelector((state) => state.companies); // Leggi la lista dei preferiti dallo stato
  const dispatch = useDispatch();

  const handleRemoveFavourite = (company) => {
    dispatch(removeFavourite(company)); // Rimuovi l'azienda dai preferiti
  };

  return (
    <Container>
      <h1 className="my-4">Your Favourite Companies</h1>
      <ul>
        {favourites.length > 0 ? (
          favourites.map((company, index) => (
            <li key={index} className="mb-3">
              <Row>
                <Col xs={8}>
                  <Link to={`/${company}`} style={{ textDecoration: 'none' }}>
                    {company}
                  </Link>
                </Col>
                <Col xs={4} className="text-right">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFavourite(company)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </li>
          ))
        ) : (
          <p>No favourite companies added yet.</p>
        )}
      </ul>
    </Container>
  );
};

export default Favourites;
