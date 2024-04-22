import { useState } from "react";

import "./App.css";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Card maxW="sm" m={"auto"} boxShadow='2xl'>
        <CardBody>
          <Image
            src="../img.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="50%"
            m={"auto"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="lg">Lindsey James</Heading>
            <Text color={"grey"} fontWeight={400}>
              @lindsey_jam3s
            </Text>
            <Text fontSize={18} fontWeight={400} color={"darkslategrey"}>
              Actress, musician, song writer and artist. PM for work inquires{" "}
              <br /> or <br />
              <span style={{ color: "blue" }}>#tag</span> <br />
              me in your posts
            </Text>
            <Text color="blue.600" fontSize="16">
              <span style={{ margin: "2%" }}>#ART </span>{" "}
              <span style={{ margin: "2%" }}>#PHOTOGRAPHY </span>{" "}
              <span style={{ margin: "2%" }}>#MUSIC</span>
            </Text>
          </Stack>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"space-evenly"}>
          <Button borderRadius={50} pl={30} pr={30} colorScheme="teal" variant="ghost">
            Message
          </Button>
          <Button borderRadius={50} pl={30} pr={30} colorScheme="teal" variant="solid">
            Follow
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
