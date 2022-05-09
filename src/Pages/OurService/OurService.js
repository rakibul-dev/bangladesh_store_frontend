import React from 'react';
import css from './OurService.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Home/Footer/Footer';
import { Container } from 'react-bootstrap';

const OurService = () => {
    return (
        <div>

            <Container className='mb-5'>

                <h1>Our Services</h1>
                <div className='d-flex mt-5 '>
                    <div className='our-service'>
                        <h1>Tons</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente quaerat modi quibusdam asperiores odit recusandae cum hic eum. Quidem.</p>
                    </div>
                    <div className='our-service'>
                        <h1>Hallmarks</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestias deleniti, sapiente atque officiis maxime perferendis. Est itaque ipsam distinctio.</p>
                    </div>
                </div>



                <div className='d-flex'>
                    <div className='our-service'>
                        <h1>GoldCheck</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente quaerat modi quibusdam asperiores odit recusandae cum hic eum. Quidem.</p>
                    </div>
                    <div className='our-service'>
                        <h1>Iteam Exchange</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestias deleniti, sapiente atque officiis maxime perferendis. Est itaque ipsam distinctio.</p>
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default OurService;