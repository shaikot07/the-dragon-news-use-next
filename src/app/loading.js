import Image from 'next/image';
import React from 'react';
import loadingImg from '../assets/Loading_27.gif'
const LoadingPage = () => {
    return (
        <div>
            <Image src={loadingImg}
                alt='error img'
                width={500}
                height={300}
                unoptimized={true}
            />
        </div>
    );
};

export default LoadingPage;