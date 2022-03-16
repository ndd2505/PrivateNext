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

  const navHoverBg = useColorModeValue('gray.700', 'gray.200')

  const colorText = useColorModeValue('white', 'black')

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
        <Header navHoverBg={navHoverBg} colorText={colorText}/>
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
        px={[0,4,4]}
        mt={[4,8,8]}
      >
        <>{React.cloneElement(children, {navHoverBg: navHoverBg,colorText:colorText})}</>
      </Flex>
    </>
  )
}

export default Container
