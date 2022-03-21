import { ReactNode,useRef } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  usePrefersReducedMotion,
  Grid,
  GridItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Center,
  keyframes,
  useColorMode,
  Image,
  Text,
  Fade, ScaleFade, Slide, SlideFade,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaTelegram,FaFacebook,FaInstagram} from 'react-icons/fa'
import moment from 'moment';
import { useInViewport } from 'react-in-viewport';
import { reduce } from 'lodash';
import { SocialIcon } from 'react-social-icons';

export default function Content(props: { navHoverBg: string,navHoverBg2: string,primaryColor: string,colorText2: string,colorText: string}) {
    const {navHoverBg,colorText,navHoverBg2,colorText2,primaryColor} = props
    const { colorMode, toggleColorMode } = useColorMode();
    const ref = useRef()
    const ref2nd = useRef()
    const {
        inViewport,
        enterCount,
        leaveCount,
      } = useInViewport(
        ref,
        {rootMargin:"-50px"},
        { disconnectOnLeave: false }
      );

      const {
        inViewport:inViewport2nd,
      } = useInViewport(
        ref2nd,
        {rootMargin:"-50px"},
        { disconnectOnLeave: false }
      );

    const born = moment("1999-05-25", "YYYY-MM-DD");
    const workSince = moment("2019-12-24", "YYYY-MM-DD");
    const workFrom = moment("2021-10-20", "YYYY-MM-DD");
    const current = moment().startOf('day');

    const workDuration = moment.duration(current.diff(workFrom)).asDays()
    const workExpe = moment.duration(current.diff(workSince)).years()
    const ages = moment.duration(current.diff(born)).years()

    const test = <Icon as={FaTelegram} />

    const info1st = [
        {title:"Hometown",data:"Phan Thiet \n 86 BinhThuan"},
        {title:"Living In:",data:"GoVap, \n Ho Chi Minh City"},
        {title:"Working:",data:"Software Engineer \n At SieuViet Group"},
        {title:"Contact:",data:`duy2551999@gmail.com`,icons:[<Icon _groupHover={{color:"#fff"}} color={"#0088cc"} className='mr-2' as={FaTelegram} />,<Icon className='mr-2' as={FaFacebook} color="#1877f2" _groupHover={{color:"#fff"}} />,<Icon _groupHover={{color:"#fff"}} color="#c13584" className='mr-2' as={FaInstagram} />]},
    ]
    
    const info2nd = [
        {title:"Ages",data:ages},
        {title:"Year Of Experience:",data:workExpe},
        {title:"Projects:",data:"12+"},
        {title:"I'm have been worked here for:",data:`${workDuration} days`},
    ]

    const pulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }
      
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
      }
      
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    `

    const prefersReducedMotion = usePrefersReducedMotion()

    const animationImg = prefersReducedMotion
    ? undefined
    : `${pulse} infinite 2s ease-in-out`

    console.log(colorMode)
    
    return (
        <>
        <Flex direction={{base:"column",lg:"row"}}>
            <Box flex={1} bg={navHoverBg} ref={ref}>
                    <Grid 
                        h="100%"
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={3}
                        p={3}
                        >
                            {
                                info1st?.map((infoItem,ind) => (
                                    <GridItem key={ind} rowSpan={{base:4,sm:2,lg:1}} colSpan={{base:4,sm:2,lg:4}}>
                                        <SlideFade offsetX="-40px" offsetY={0} in={inViewport} delay={ind/10+0.5}>
                                            <Box role="group" color={colorText}  _hover={{ bg: primaryColor, color: navHoverBg}} borderRadius={10} p={2} borderWidth={"1px"} shadow="md">
                                                <Text fontSize='md' color={colorText2} fontFamily={'Permanent Marker'}>
                                                    {infoItem?.title}
                                                </Text>
                                                <Text fontSize='xl' whiteSpace={"pre-line"}>
                                                    {infoItem?.data}
                                                </Text>
                                                <div>
                                                {infoItem?.icons?.map((item) => <a href="#">{item}</a>)}
                                                </div>
                                            </Box>
                                        </SlideFade>
                                    </GridItem>
                                ))
                            }
                    </Grid>
            </Box>
            <Center flex={2} p={5} bg={navHoverBg}>
                <Box h={400} w={300}
                borderRadius={'9999px'}
                bg={"red.200"}
                _hover={{ animation: animationImg}}
                >
                    <Avatar color={'white'} bg={"black"} fontSize={240} size="full" name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                </Box>
            </Center>
            <Box flex={1} bg={navHoverBg} ref={ref2nd}>
                <Grid
                    gap={3}
                    p={3}
                    h="100%"
                    templateRows='repeat(4, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                >
                    {
                        info2nd?.map((itemInfo,ind) => (
                            <GridItem key={ind} rowSpan={{base:4,sm:2,lg:1}} colSpan={{base:4,sm:2,lg:4}}>
                                <SlideFade offsetX="40px" offsetY={0} in={inViewport2nd} delay={ind/10+0.5}>
                                    <Box role="group" color={colorText}  _hover={{ bg: primaryColor, color: navHoverBg}}  borderRadius={10} p={2} borderWidth={"1px"} shadow="md">
                                        <Text fontSize='sm' color={colorText2} fontFamily={'Permanent Marker'}>
                                            {itemInfo?.title}
                                        </Text>
                                        <Text fontSize='3xl' lineHeight="2em">
                                            {itemInfo?.data}
                                        </Text>
                                    </Box>
                                </SlideFade>
                            </GridItem>
                        ))
                    }
                </Grid>
            </Box>
        </Flex>
        </>
    )
}