import Header from './header'
import Content from '@/components/content'
import StarrySky from '@/components/banner'

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
      <div className='banner'>
        <StarrySky {...props}/>
      </div>
      
      <Content {...props}/>
      <h1>aloha</h1>
    </div>
  )

}

