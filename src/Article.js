import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Receitas saudáveis e práticas</h1>
          <p className="lead">Acompanhe abaixo as instruções de como fazer os lanches:</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;