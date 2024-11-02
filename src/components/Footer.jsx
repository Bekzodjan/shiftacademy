import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="d-flex h-100">
                <div className='d-flex'>
                    <img src="src\assets\SHIFTbrandbook.png" alt="" width={75} />
                    <p>© “SHIFT ACADEMY”, 2024 - Barcha huquqlar himoyalangan.</p>
                </div>
                <div className='flex flex-column justify-center'>
                    <div className="d-flex gap-2">
                        <img src="./ig.svg" alt="" width={40} />
                        <img src="./face.png" alt="" width={30} />
                        <img src="./link.png" alt="" width={30} />
                    </div>
                    <p>+998 94 124 00 41</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
