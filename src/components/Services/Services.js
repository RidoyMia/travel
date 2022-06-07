import { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Services.css';

const Services = (props) => {
    const[services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    //Destructuring Part
    const {courses} = props;
    return (
        //Services Part
    <>
    <div className="container">
        <h1 className="text-center mt-5">Our Services</h1>
    </div>
        <div className="py-5">
            <Container>
                <Row xs={1} md={4} className="g-4">
                        {
                            services?.map(course => <Course key={course.id} course={course}>
                            </Course> )
                        }
                </Row>
            </Container>
        </div>
        
    </>
    );
};

export default Services;