import React from 'react';
import Navbar from './Navbar';

const Section1 = () => {
    return (
        <div className='section1'>
            <Navbar/>
            <h1 className='h1_in_section1'>10 oyda yangi kasb <br /> o’rganing!</h1>
            <h2 className='h2_in_section1'>Buxorodagi eng sifatli dasturlash va kompyuter kurslari!</h2>
            <button className="btn btn-info">BEPUL KONSULTATSIYA!</button>
        </div>
    );
}

export default Section1;
