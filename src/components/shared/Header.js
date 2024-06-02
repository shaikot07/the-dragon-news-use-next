import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headerImage from '@/assets/The Dragon News.png'
import { getCurrentDate } from '@/utils/getCurrentDate';
const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headerImage} width={400} height={400} alt='header images' className='mx-auto' />
                <Typography variant='body2' color='gray' textAlign="center" className='my-2'>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography variant='body2' color='gray' textAlign="center" >
                    { currentDate}
                </Typography>

            </Container>
        </Box>
    );
};

export default Header;