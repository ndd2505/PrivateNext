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
import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaTelegram,FaFacebook,FaInstagram} from 'react-icons/fa'
import moment from 'moment';
import { useInViewport } from 'react-in-viewport';
import { reduce } from 'lodash';
import { SocialIcon } from 'react-social-icons';
import React,{useState,useEffect} from 'react';
import anime from 'animejs';


// Twinkling Night Sky by Sharna

const StarrySky = (props:{colorText:string,colorText2:string,navHoverBg:string}) => {

    const [num, setNum] = useState(60);
    const [vw, setVW] = useState(0);
    const [vh, setVH] = useState(0);
    
    const starryNight = () => {
      anime({
        targets: ["#sky .star"],
        opacity: [
          {
            duration: 700,
            value: "0"
          },
          {
            duration: 700,
            value: "1"
          }
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i
      });
    };
    const shootingStars = () => {
      anime({
        targets: ["#shootingstars .wish"],
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
          {
            duration: 700,
            value: "1"
          }
        ],
        width: [
          {
            value: "150px"
          },
          {
            value: "0px"
          }
        ],
        translateX: 350
      });
    };
    const randomRadius = () => {
      return Math.random() * 0.7 + 0.6;
    };
    const getRandomX = () => {
      return Math.floor(Math.random() * Math.floor(vw)).toString();
    };
    const getRandomY = () => {
      return Math.floor(Math.random() * Math.floor(vh)).toString();
    };
    useEffect(()=>{
        starryNight();
        shootingStars();
        setVW(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
        setVH(Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
      },[])

      const {colorMode} = useColorMode();
      const theme = useColorModeValue('150%', '10%');
      const {colorText2,colorText,navHoverBg} = props
      return (
        <div id="banner">
            <div className='thesun' style={{top:theme}} />
          <svg id="sky">
            {[...Array(num)].map((x, y) => (
              <circle
                cx={getRandomX()}
                cy={getRandomY()}
                r={randomRadius()}
                stroke="none"
                strokeWidth="0"
                fill="white"
                key={y}
                className="star"
              />
            ))}
          </svg>
          <Text className='bannerText' size='1em' color={navHoverBg}>
            <GreatThings text='Wellcome to my site' />
                {/* Wellcome to my site */}
          </Text>
          <div id="shootingstars">
            {[...Array(60)].map((x, y) => (
              <div
                key={y}
                className="wish"
                style={{
                  left: `${getRandomY()}px`,
                  top: `${getRandomX()}px`
                }}
              />
            ))}
          </div>
        </div>
      );
  }
  
//   ReactDOM.render(<StarrySky />, document.getElementById("root"));
  

// export default function Content(props: { navHoverBg: string,navHoverBg2: string,primaryColor: string,colorText2: string,colorText: string}) {
//     return (
//         <>
//         </>
//     )
// }

export default StarrySky;