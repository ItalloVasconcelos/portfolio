import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import './PortfolioBlock.scss'

function PortfolioBlock(props) {
   const { image, live, source, title, description, techs } = props;

   return (

      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

         <Box component={'img'} src={image} alt={'mockup'} height={{ xs: '200px', md: '500px' }} />
         <h1 fontSize={{ xs: '1rem', md: '1.8rem' }} style={{ marginBottom: '1rem', width: '50%' }} >{title}</h1>
         <Box width={'60%'}><h3 style={{ marginBottom: '5px' }}>Description of Project </h3><span style={{ display: 'block', padding: '10px', fontSize: '.9rem', lineHeight: '1.6' }}>{description}</span></Box>
         <Box width={'60%'}>
            <h3 style={{ marginBottom: '5px' }}>Techs used</h3> <span style={{ display: 'block', padding: '10px', fontSize: '.9rem', lineHeight: '1.6' }}>{techs}</span>
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'1rem'}
            alignItems={'center'} fontSize={'1rem'} py={'1.2rem'}>

            <Box


               component="a"
               href={source}
               target="_blank"
               rel="noopener noreferrer"
               p={1.5}
               border="1px solid black"
               borderRadius={10}
               className="button">

               <IconLink link={live} title={'Live'} icon={'fa fa-safari'} />
            </Box>
            <Box
               component="a"
               href={source}
               target="_blank"
               rel="noopener noreferrer"
               p={1.5}
               border="1px solid black"
               borderRadius={10}
               className="button">
               <IconLink link={source} title={'Source'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box >
   );
}

export default PortfolioBlock;