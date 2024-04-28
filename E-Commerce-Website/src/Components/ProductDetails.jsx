import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

const ProductDetails = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      let res = await fetch(`http://localhost:3000/products/${id}`);
      let details = await res.json();
      setData(details);
    };
    getDetails();
  }, []);

  const handleClick = () => {
    let newCart = [...cart, data];
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <Card maxW="sm" m={"auto"} boxShadow="2xl">
      <CardBody>
        <Image
          src={data.image}
          alt="image"
          borderRadius="lg"
          h={300}
          w={60}
          m={"auto"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.title}</Heading>
          <Text>{data.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {data.price}
          </Text>
          <Button colorScheme="teal" size="sm" onClick={handleClick}>
            Add to Cart
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;

{
  /* <img src={data.image} alt="image" style={{width:"10%"}}/>
<h2>{data.title}</h2>
<p>{data.description}</p>
<h4>{data.price}</h4>
<button onClick={handleClick}>Add to Cart</button> */
}
