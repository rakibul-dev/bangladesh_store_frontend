import React from 'react';
import { Col } from 'react-bootstrap';
import img from '../../../images/Gold/Bala.png'

const Diamond = () => {
    return (
        <Col sm={6} md={4}>
            <img className='img-fluid mt-3 ' src={img} alt="" />
            <h3>Name:Ring</h3>
            <h4>Price:55</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti repellat asperiores quos impedit. Inventore!</p>

        </Col>
    );
};

export default Diamond;