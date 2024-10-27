import React from 'react';

const Section2 = () => {
    return (
        <div className='section2'>
            <h2>“SHIFT ACADEMY” BU - </h2>
            <div className="d-flex gap-4">
                <div className='section_card'>
                    <img src="src/assets/image.png" alt="" width={60} />
                    <p>Akademiyamiz maqsadi zamonaviy kasblarga qiziqadigan va o'zini IT sohasida rivojlantirmoqchi bo'lgan yoshlar uchun sifatli ta'lim berish!</p>
                </div>
                <div className='section_card'>
                    <img src="src/assets/image.png" alt="" width={60} />
                    <p>Texnologiya sohasida yuqori malakali dasturchilarni tayyorlash va ularni global IT bozoriga olib chiqish.</p>
                </div>
                <div className='section_card'>
                    <img src="src/assets/image.png" alt="" width={60} />
                    <p>IT sohasining rivojlanishiga hissa qo'shishni niyat qilganmiz.</p>
                </div>
            </div>
        </div>
    );
}

export default Section2;
