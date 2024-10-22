import Image from 'next/image';
import React from 'react';
import errorImg from '../assets/forofor.gif'
const HomePage = () => {
  return (
    <div>
      <h1>this is a home pages</h1>
      <h1>this is a home pages</h1>
      <h1>this is a home pages</h1>
      <div>
           <Image src={errorImg}
           alt='error img'
           width={500}
           height={300}
           unoptimized={true} 
           />
        </div>
    </div>
  );
};

export default HomePage;