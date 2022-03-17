import { ReactNode } from 'react';
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
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
   

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav(props: { navHoverBg: string,colorText: string}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {navHoverBg,colorText} = props

  return (
    <>
      <Box w="100%" bg={navHoverBg} px={4}>
        <Flex w="100%" h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box h={"100%"}>
            <Image
                display={"block"}
                h="100%"
                w="100%"
                // boxSize='100px'
                objectFit='cover'
                alt="logo"
                src={'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/08/t_white-rabbit-logo_9.png'}
            />
          </Box>

          <Flex alignItems={'center'}>
            <Stack width={"100%"} direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} colorScheme={navHoverBg}>
                {colorMode === 'light' ? <MoonIcon color={colorText}/> : <SunIcon color={colorText}/>}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}