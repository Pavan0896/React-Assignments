import "./App.css";
import { Box, Image, Stack } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w="100%" p={4} color="black">
        <Heading fontSize={{sm:"md", md:"lg", lg:"24"}}>
          Our Clients Speak
        </Heading>
        <Text fontSize={{sm:"sm", md:"md", lg:"lg"}}>We have been working with clients around the world</Text>
      </Box>
      <Stack display={"grid"} gridTemplateColumns={{sm:"repeat(1,1fr)", md:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gap={10} mt={5}>
        <div>
          <Card boxShadow='xl'>
            <CardBody p={30}>
              <Heading fontSize={{sm:"md", md:"md", lg:"lg"}} pb={3}>
                Efficient Collaborating
              </Heading>
              <Text fontSize={{sm:"sm", md:"md", lg:"lg"}} color={"grey"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </CardBody>
          </Card>
          <Box w="100%" p={4} color="black">
            <Image src="../img.jpg" h={10} m={"auto"} borderRadius={50} />
            <Heading fontSize={"sm"} pb={3}>
              Jane Cooper
            </Heading>
            <Text fontSize={"sm"} color={"grey"}>
              CEO at ABC Corporation
            </Text>
          </Box>
        </div>
        <div>
          <Card boxShadow='xl'>
            <CardBody p={30}>
              <Heading fontSize={{sm:"md", md:"md", lg:"lg"}} pb={3}>
                Intuitive Design
              </Heading>
              <Text fontSize={{sm:"sm", md:"md", lg:"lg"}} color={"grey"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </CardBody>
          </Card>
          <Box w="100%" p={4} color="black">
            <Image src="../img.jpg" h={10} m={"auto"} borderRadius={50} />
            <Heading fontSize={"sm"} pb={3}>
              Jane Cooper
            </Heading>
            <Text fontSize={"sm"} color={"grey"}>
              CEO at ABC Corporation
            </Text>
          </Box>
        </div>
        <div>
          <Card boxShadow='xl'>
            <CardBody p={30}>
              <Heading fontSize={{sm:"md", md:"md", lg:"lg"}} pb={3}>
                Mindblowing Service
              </Heading>
              <Text fontSize={{sm:"sm", md:"md", lg:"lg"}} color={"grey"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </CardBody>
          </Card>
          <Box w="100%" p={4} color="black">
            <Image src="../img.jpg" h={10} m={"auto"} borderRadius={50} />
            <Heading fontSize={"sm"} pb={3}>
              Jane Cooper
            </Heading>
            <Text fontSize={"sm"} color={"grey"}>
              CEO at ABC Corporation
            </Text>
          </Box>
        </div>
      </Stack>
    </>
  );
}

export default App;
