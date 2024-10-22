 "use clint"
import Image from 'next/image';
import React from 'react';
import errorImg from '../assets/logo.png'
const error = () => {
    return (
        <div>
        <Image src={errorImg}
        alt='error img'
        width={500}
        height={300}
        unoptimized={true} 
        />
     </div>
    );
};

export default error;