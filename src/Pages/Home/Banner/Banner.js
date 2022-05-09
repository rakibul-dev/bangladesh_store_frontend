import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner2 from '../../../images/banner2.png'
import banner5 from '../../../images/banner-5.jpg'
import bannerthree from '../../../images/banner-3.jpg'

const Banner = () => {

    return (

        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-500"
                        height={500}
                        src={Banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block', color: "rgb(101 85 85)" }}>Welcome </h2>
                        <h3 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block', color: "rgb(101 85 85)" }}>To Bangladesh Store</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-500"
                        height={500}
                        src={banner5}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block', color: "rgb(101 85 85)" }}>Welcome </h2>
                        <h3 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block', color: "rgb(101 85 85)" }}>To Bangladesh Store</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        height={500}
                        src={bannerthree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block', color: "rgb(101 85 85)" }}>Welcome </h2>
                        <h3 style={{ fontFamily: ' Dancing Script,cursive', fontSize: 45, fontWeight: 'bold', display: 'block', color: "rgb(101 85 85)" }}>To Bangladesh Store</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Banner;