import React from 'react';
import styled from '@emotion/styled';
import Header from '@/components/header';
import {
  Box,
  useColorMode,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import DarkModeSwitch from '../DarkModeSwitch'

const Container = ({children}) => {

  const navHoverBg = useColorModeValue('#041C32', '#F5F5F5')

  const navHoverBg2 = useColorModeValue('#04293A', '#F05454')

  const colorText = useColorModeValue('#fff', '#121212')

  const colorText2 = useColorModeValue('#ECB365', '#30475E')

  const primaryColor = useColorModeValue('#9b94c2ba', '#1045a2b8')

  const {colorMode} = useColorMode()

  const bgColor = {
    light: "white",
    dark: "black"
  }

  const StickNav = styled(Flex)`
  position: sticky;
  justify-content: center;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur (20px);
  transition: height .5s line-height .5s;
  `

  return (
    <>
      <StickNav>
        <Header navHoverBg={navHoverBg} navHoverBg2={navHoverBg2} primaryColor={primaryColor} colorText={colorText} colorText2={colorText2}/>
        {/* <Box>
          <Button as="a" variant={"ghost"} p={[1,2,4]} _hover={{backgroundColor: navHoverBg}}>
            Homei
          </Button>
        </Box>
          <DarkModeSwitch /> */}
      </StickNav>
      <Flex
        flexDirection={"column"}
        bg={navHoverBg}
        color={colorText}
        as="main"
        justifyContent={"center"}
        px={[0,0,0]}
        mt={[0,0,0]}
      >
        <>{React.cloneElement(children, {primaryColor:primaryColor,navHoverBg: navHoverBg,colorText:colorText,navHoverBg2:navHoverBg2,colorText2:colorText2,})}</>
      </Flex>
    </>
  )
}

export default Container
