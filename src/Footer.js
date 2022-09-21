import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';


function Footer() {
  return (
    <Row xs={1} md={0} className="g-3">


    <CardGroup>
      <div class="col-lg-4 mb-4">
      <Card>
        <Card.Img variant="top"src="https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Bolo de Chocolate</Card.Title>
          <Card.Text>
            Esse é um bolo feito com o mínimo de Kcal, para voê comer sem peso na consciência!
          </Card.Text>
          <Button variant="primary" href="https://www.youtube.com/watch?v=i2YomnFyQLo" target="_blank">Ir para receita</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </div>
       <div class="col-lg-4 mb-4">
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card.Body>
          <Card.Title>Panqueca Gourmet</Card.Title>
          <Card.Text>
            Panqueca leve, que pode ser feita com apenas dois ingredientes...
          </Card.Text>
          <Button variant="primary" href="https://www.youtube.com/watch?v=KhpTVZ_xtWQ" target="_blank">Ir para receita</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </div>
      <div class="col-lg-4 mb-4">
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Vitamina Protéica</Card.Title>
          <Card.Text>
            Perfeita para Café da manhã, lanche da tarde ou ceia,
            quer sber mais? aperta o botão abaixo
          </Card.Text>
          <Button variant="primary" href="https://www.youtube.com/watch?v=mmCzwdUibVE" target="_blank">Ir para receita</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </div>
    </CardGroup>
        </Row>
  );
}

export default Footer;