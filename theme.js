import {extendTheme, theme as chakraTheme,} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
    ...chakraTheme?.fonts,
    body:"Lato"
}

const breakpoints = createBreakpoints({
    sm:'40em',
    md:'48em',
    lg:'62em',
})

// const fontWeight = {
//     normal
// }

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
}

const customTheme = extendTheme(overrides);

export default customTheme