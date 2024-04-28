import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [count, setCount] = useState(0);

  const handleRemove = (i) => {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCount(count + 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={10}
      >
        {cart.length > 0 ? (
          cart.map((e, i) => (
            <Card maxW="sm" key={e.id} boxShadow="2xl">
              <CardBody>
                <Image
                  src={e.image}
                  alt="image"
                  borderRadius="lg"
                  width={40}
                  height={200}
                  m={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{e.title}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    {e.price}
                  </Text>
                  <Button
                    colorScheme="red"
                    variant="solid"
                    onClick={() => handleRemove(i)}
                  >
                    Remove
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))
        ) : (
          <div>No items in cart. Continue Shopping.</div>
        )}
      </Box>
      <Link to="/checkout">
        <div>
          <Text>Total items in cart : {cart.length}</Text>
          <Button colorScheme="teal" variant="outline">
            Checkout
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
