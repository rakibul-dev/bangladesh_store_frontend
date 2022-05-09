import React from 'react';
import owner2 from '../../../images/owner/owner11.png';
import owner1 from '../../../images/owner/owner2.png';
import "./Owners.css";


const Owners = () => {

    return (
        <div className='owner-section '>

            <div className='owner-container' >

                {/* owner-1 */}

                <div className='owner '>
                    <div className='owner-img'>
                        <img src={owner2} className='img-fluid' alt="" />
                    </div>
                    <div className='owner-text mt-3'>
                        <h4>SOTTO PAUL</h4>
                        
                    </div>
                </div>

                {/* owner-2  */}

                <div className='owner '>
                    <div className='owner-img '>
                        <img src={owner1} className="img-fluid" alt="" />
                    </div>
                    <div className='owner-text mt-3 overflow-hidden'>
                        <h4>MANORANJAN PAUL</h4>
                        
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Owners;