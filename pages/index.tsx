import Header from './header'
import Content from '@/components/content'
import {
  Box,
  useColorMode,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

export default function IndexPage(props) {

  return (
    <div>
      <Content {...props}/>
      <h1>aloha</h1>
    </div>
  )

}

