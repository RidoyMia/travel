import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    //Destructuring Part
    const {img, name, price, duration,  enrolled } = props.course;
    //Fontawesome icons
    const userSignIn = <FontAwesomeIcon icon={faSignInAlt} />
    const durationIcon = <FontAwesomeIcon icon={faClock} />
    const enrolledUsersIcon = <FontAwesomeIcon icon={faUsers} />
    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" className=" img-fluid rounded-4" src={img}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="d-flex flex-column flex-md-row justify-content-between"> <span>{durationIcon} {duration}</span> 
                <span>{enrolledUsersIcon} Enrolled: {enrolled}</span>
                </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                    <h5 className="text-muted">Price: ${price}</h5>
                    <Button variant="outline-success">{userSignIn} Enroll Now</Button>
                </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Course;