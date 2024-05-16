import React from 'react';
import Link from 'next/link';
import { Button, Container } from 'react-bootstrap';

function CustomJumbotron() {
  return (
    <div className="custom-jumbotron jumbotron jumbotron-fluid bg-light pt-5 pb-6">
      <Container>
        <h1 className="display-4">Validation Your JSON !</h1>
        <p className="lead">
          JSON Validator Website 
        </p>
        <hr className="my-4" />
        <p>
          validation Your JSON in here !!
        </p>
        <p className="lead">
          <Link href="/generate">
            <Button variant="primary">
              Generate JSON
            </Button>
          </Link>
          <Link href="/validation">
            <Button className="m-5" variant="warning">
              Validation Data
            </Button>
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default CustomJumbotron;
