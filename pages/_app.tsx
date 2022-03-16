import '../styles/index.css';
import '../styles/sidebar.css';
import '../styles/core.scss';
import Footer from '@/components/footer';
import SideBar from '@/components/sidebar';
import Container from '@/components/container';
import {useEffect} from "react";
import { ChakraProvider, ColorModeProvider, useColorMode,useColorModeValue} from '@chakra-ui/react';
import customTheme from '../theme';
import Fonts from './fonts';

function MyApp({ Component, pageProps }) {

  const {colorMode} = useColorMode();

  return (
    <ChakraProvider theme={customTheme}>
        <Fonts />
        <ColorModeProvider 
        options={{
          initialColorMode: 'dark',
          useSystemColorMode: true,
        }}
        >
        {/* <div className='container-scroller' >  */}
          {/* <SideBar /> */}
          <Container>
            <Component {...pageProps} />
          </Container>
          {/* <div className='row'>
            <div className='col-3'>
              <SideBar />
            </div>
            <div className='col-9'>
              <Component {...pageProps} />
            </div>
            <div className='col-12'>
              <Footer />
            </div>
          </div> */}
        {/* </div> */}
        {/* <Footer /> */}
        </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
