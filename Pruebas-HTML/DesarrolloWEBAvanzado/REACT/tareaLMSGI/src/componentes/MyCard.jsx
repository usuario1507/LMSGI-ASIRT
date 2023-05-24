import React from "react";
import Card from 'react-bootstrap/Card';
import './MyCard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({imagen,titulo,color}) {
  return (
    <article>
    <Card  style={{ width: '20rem'}}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className={color}>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto explicabo earum repellendus consectetur,
          fugiat ullam. Aut, hic nihil illo non nesciunt molestias aliquid culpa, cumque, mollitia debitis incidunt consequatur ratione.
        </Card.Text>
      </Card.Body>
    </Card>
    </article>
  );
}

export default MyCard;