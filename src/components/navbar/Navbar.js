import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "../../pages/home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../../constants/info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'Sobre mim',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '1.6rem', md: '3rem', }}
                textTransform={'uppercase'} fontSize={{ xs: '1rem', md: '1.8rem' }}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {!link.type && <p style={{ paddingBottom: '0.2rem' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    )
}