import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

const Checkout = () => {
  const [order, setOrder] = useState(false);
  function RadioExample() {
    const [value, setValue] = useState("1");
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column">
          <Radio value="1">UPI</Radio>
          <Radio value="2">Card</Radio>
          <Radio value="3">Cash on Delivery</Radio>
        </Stack>
      </RadioGroup>
    );
  }
  return (
    <div>
      <Input placeholder="enter shipping address" w={1000} required/>
      <Heading size="md">Payment Methods</Heading>
      <RadioExample />
      <Button colorScheme="teal" variant="solid" onClick={() => setOrder(true)}>
        Checkout
      </Button>

      {order ? <div>Order Placed Successfully. Continue Shopping</div> : null}
    </div>
  );
};

export default Checkout;
