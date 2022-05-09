import React from 'react';
import css from './Catagories.css'
import item1 from '../../../images/iteam1.jpg'
import goldimg from '../../../images/Gold/chur.png'
import goldimg0 from '../../../images/Gold/chur-removebg-preview.png'
import goldimg2 from '../../../images/Gold/crown.png'
import goldimg3 from '../../../images/Gold/Bangle.png'
import silverimg from '../../../images/silver/others.png'
import silverimg2 from '../../../images/silver/anklet.png'
import accessories from '../../../images/Gold/accessories.png'


import { Container, NavLink } from 'react-bootstrap';

const Catagories = () => {
    return (
        <Container>
            <h1 style={{ fontFamily: 'Dancing Scripts,cursive', marginBottom: 100, marginTop: 100 }}>Top Catagories</h1>

            <div className=' item-container    mx-auto'>


                {/* div1 for tems */}
                <div className='d-flex' id="item-one">

                    <NavLink href="/gold" style={{ margin: 0, padding: 0 }}><div className='item'>
                        <img className='item-img' src={goldimg3} alt="" />
                        <h6 className='item-text'>Gold</h6>
                    </div>
                    </NavLink>
                    <NavLink href="/silver" style={{ margin: 0, padding: 0 }}>
                        <div className='item' >
                            <img className='item-img' src={silverimg} alt="" />
                            <h6 className='item-text'>Silver</h6>
                        </div>
                    </NavLink>

                </div>

                {/* div2 for items */}

                <div className='d-flex d-inline-block'>
                    <NavLink href="/diamonds">
                        <div className='item'>
                            <img className='item-img' src={goldimg2} alt="" />
                            <h6 className='item-text'>Diamond</h6>
                        </div>
                    </NavLink>

                    <NavLink href="/jwellerybag" >
                        <div className='item'>
                            <img className='item-img' src={accessories} alt="" />
                            <h6 className='item-text'>Accessories</h6>
                        </div>
                    </NavLink>
                </div>





            </div>
        </Container>
    );
};

export default Catagories;