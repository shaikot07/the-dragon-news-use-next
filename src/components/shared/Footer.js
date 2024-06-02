import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
// icon 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
    const navItem = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },

    ];
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center"
                    sx={{
                        "& svg": {
                            color: "white",
                        },
                    }}>

                    <IconButton >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton >
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton >
                        <InstagramIcon />
                    </IconButton>

                </Box>
                {/* This is link  */}
                <Box className="w-full text-center">
                    {navItem.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white hover:text-orange-400 text-[10px]'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant='body2' color="gray" textAlign="center">
                @2024 The Dragon News. This is my create first next.js app
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;