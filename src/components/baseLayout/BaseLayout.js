
import Style from './BaseLayout.module.scss'
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Portfolio from "../../pages/portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
   // let [darkMode, setDarkMode] = useState(false);

   // function handleClick() {
   //    setDarkMode(!darkMode);
   // }

   return (
      <Box className={Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            {/* <Grid item>
               <Navbar  handleClick={handleClick} />
            </Grid> */}
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
               </Routes>
            </Grid>
         </Grid>
      </Box>
   )
}

