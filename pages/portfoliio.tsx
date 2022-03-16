import {Grid, GridItem} from "@chakra-ui/react"
import Profiler from './profiler';

const Portfolio = () => {
    return (
        <>
        <Grid 
            h='100vh'
            templateRows={{lg:'repeat(2, 1fr)',base:'repeat(3, 1fr)'}}
            templateColumns='repeat(5, 1fr)' 
            gap={4}
            my={12}
        >
            <GridItem  rowSpan={{lg:2, sm:1, base:1}} colSpan={{lg:3, sm:5, base:5}} bg='tomato'>
                <Profiler />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{lg:2, sm:5, base:5}} bg='tomato'></GridItem>
            <GridItem colSpan={{lg:2, base:2}} bg='tomato'></GridItem>
            <GridItem colSpan={{lg:2, base:3}} bg='tomato'></GridItem>
        </Grid>
        </>
    )
}

export default Portfolio