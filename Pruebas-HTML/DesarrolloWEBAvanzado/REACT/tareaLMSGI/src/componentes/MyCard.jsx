import React from "react";
import Card from 'react-bootstrap/Card';
import './MyCard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({color}) {
  return (
    <>
    <Card className={color} style={{ width: '20rem'}}>
      <Card.Img variant="top" src="/img/carousel_24-min.png" />
      <Card.Body>
        <Card.Title>Company</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto explicabo earum repellendus consectetur,
          fugiat ullam. Aut, hic nihil illo non nesciunt molestias aliquid culpa, cumque, mollitia debitis incidunt consequatur ratione.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className={color} style={{ width: '20rem'}}>
      <Card.Img variant="top" src="/img/servicios.jpg" />
      <Card.Body>
        <Card.Title>Services</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto explicabo earum repellendus consectetur,
          fugiat ullam. Aut, hic nihil illo non nesciunt molestias aliquid culpa, cumque, mollitia debitis incidunt consequatur ratione.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className={color} style={{ width: '20rem'}}>
      <Card.Img variant="top" src="/img/clientes.jpg" />
      <Card.Body>
        <Card.Title>Services</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto explicabo earum repellendus consectetur,
          fugiat ullam. Aut, hic nihil illo non nesciunt molestias aliquid culpa, cumque, mollitia debitis incidunt consequatur ratione.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default MyCard;