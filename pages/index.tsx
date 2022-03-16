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

  const res = fetch('http://www.duytheegg.tech/telegram?mes=123345')

  return (
    <div>
      <Content {...props}/>
      <h1>aloha</h1>
    </div>
  )

}

export async function getStaticProps() {
  const res = await fetch('http://www.duytheegg.tech/telegram?mes=123345')

  return {
    props: {}
  }
}
