import React from 'react';
import './NotFound.css';
import notFound from '../../../src/images/notfound1.jpg';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
        <div>
            <Container>
            <img
        src={notFound}
        width="100%"
        className="d-inline-block align-top"
        alt="learn-area-logo"
      />
            </Container>
        </div>
        <div className="w-75 mx-auto text-center py-5">
            <Link to="/">
                <Button variant="warning">GO BACK</Button>
            </Link>
        </div>
        </>
    );
};

export default NotFound;