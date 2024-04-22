import { useState } from "react";
import "./App.css";
import { Box, Input, Button, Card, CardBody, Text } from "@chakra-ui/react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const handleClick = () => {
    let newInput = [...data, input];
    setData(newInput);
    setInput("");
  };
  return (
    <>
      <Box
        bg="teal"
        w="100%"
        p={4}
        color="white"
        fontWeight={500}
        fontSize={24}
      >
        <h1>Introduction to Chakra UI</h1>
      </Box>
      <Box bg="white" w="30%" p={4} color="black" display={"flex"}>
        <Input
          placeholder="Enter anything"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="teal" variant="outline" onClick={handleClick} ml={5}>
          Button
        </Button>
      </Box>
      <Box bg="white" w="50%" p={4} color="dark grey" textAlign={"start"} >
        {data.map((e, i) => (
          <>
          <Card key={i} mt={5} mb={5}>
          <CardBody>
            <Text>{i+1}) {e}</Text>
          </CardBody>
        </Card>
        </>
        ))}
      </Box>
    </>
  );
}

export default App;
