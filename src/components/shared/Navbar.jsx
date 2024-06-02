"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
// icon 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Header from './Header';

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

function Navbar() {
    return (
        <>
            <Header></Header>
            <AppBar position="static" className="bg-black">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={Logo} width={100} height={100} alt="logo" />
                        <Box className="w-full text-center">
                            {navItem.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className='text-white hover:text-[#FD0004]'>{item.route}</Button>
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{
                            "& svg": {
                                color: "white",
                            },
                        }}>
                            <Stack direction="row">
                                <IconButton >
                                    <FacebookIcon className='hover:text-[#FD0004]'/>
                                </IconButton>
                                <IconButton >
                                    <TwitterIcon className='hover:text-[#FD0004]'/>
                                </IconButton>
                                <IconButton >
                                    <YouTubeIcon className='hover:text-[#FD0004]'/>
                                </IconButton>
                                <IconButton >
                                    <LinkedInIcon className='hover:text-[#FD0004]'/>
                                </IconButton>
                                <IconButton >
                                    <InstagramIcon className='hover:text-[#FD0004]'/>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
