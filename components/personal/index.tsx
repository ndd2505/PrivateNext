import {
    Avatar,
    Divider,
    Text
} from "@chakra-ui/react"

const Personal = () => {
    return (
        <div>
            <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <Text as={"b"} fontSize='50px' color='white'>
                Nguyen Dinh Duy
            </Text>
            <Divider />
        </div>
    )
}

export default Personal