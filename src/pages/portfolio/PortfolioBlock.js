import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} height={400}/>
         <h1 style={{fontSize: '4em'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'.2rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={.9} border={'1px solid black'} borderRadius={'10px'}>
               <IconLink link={live} title={'Page'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={.9} border={'1px solid black'} borderRadius={'10px'}>
               <IconLink link={source} title={'Código'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;