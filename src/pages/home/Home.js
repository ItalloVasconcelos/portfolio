import React from 'react';
import Style from './Home.module.scss';
import me from '../../_assents/img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';

export default function Home() {
   return (
      <>
         <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'column', }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(65vh - 175px)'}  >
            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
               justifyContent={'center'} minHeight={'calc(65vh - 175px)'}>
               <Box className={classNames(Style.avatar, Style.shadowed)} alt={'foto Itallo Vasconcelos'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '25vh', md: '30vh' }}
                  height={{ xs: '25vh', md: '30vh' }}
                  borderRadius={'50%'} p={'0.25rem'} mb={{ xs: '2rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }}
               />

               <Box >
                  <h1>Hello there! I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
                  </h1>
                  <h2>{info.position}.</h2>
                  <Box component={'ul'} p={'0.1rem'} >
                     {info.miniBio.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                     ))}
                  </Box>
                  <Box display={'flex'} gap={'1.5rem'} justifyContent={{ xs: 'center', md: 'start' }} fontSize={{ xs: '1.7rem', md: '2.5rem' }}>
                     {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                     ))}
                  </Box>

               </Box>
            </Box>

            <About />


            <Portfolio />
         </Box >
      </>
   )
}