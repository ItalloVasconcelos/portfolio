import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import './PortfolioBlock.scss'

function PortfolioBlock(props) {
   const { image, live, source, title, description, techs } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

         <Box component={'img'} src={image} alt={'mockup'} height={500} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>

         <p>{description}</p>

         <span>Put accordion to show the techs {techs}</span>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'2rem'}
            alignItems={'center'} fontSize={'1.2rem'} py={'1.6rem'}>

            <Box
               component="a"
               href={source}
               target="_blank"
               rel="noopener noreferrer"
               p={1.5}
               border="1px solid black"
               borderRadius={10}
               className="button">

               <IconLink link={live} title={'Página'} icon={'fa fa-safari'} />
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
               <IconLink link={source} title={'Código'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box >
   );
}

export default PortfolioBlock;