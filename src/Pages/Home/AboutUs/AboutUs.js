import React from 'react';
import css from './AboutUs.css'
import model from '../../../images/jwelery-model.jpg'
import { Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div id='aboutus' className='about-section '>

            <div className='about-text ' >
                <div className='w-100 mx-auto p-5 '>
                    <h1 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block' }} className="mx-auto">About Us</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus delectus porro doloremque facere? Amet repellat eum vero reprehenderit in cumque. Ab, voluptate, laborum quibusdam odio saepe dolorum ut culpa omnis porro consequatur expedita, dolorem fuga. Consequuntur facere debitis optio?

                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa, reprehenderit magnam aspernatur
                    </p>
                </div>
            </div>

            <div className='w-50'>
                <div className='about-model-background w-100'>
                    <div className='about-model '>
                        <img className=' about-img img-fluid' src={model} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;