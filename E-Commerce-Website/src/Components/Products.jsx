import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Image, Stack, Heading, Box } from "@chakra-ui/react";

const Products = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:3000/products");
      let data = await res.json();
      setProd(data);
    };
    getData();
  }, []);
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(1,1fr)",
        lg: "repeat(2,1fr)",
      }}
      gap={10}
    >
      {prod.map((e) => (
        <div key={e.id}>
          <Link to={`/products/${e.id}`}>
            <Card mt={10} mb={10} boxShadow="2xl">
              <CardBody>
                <Image
                  src={e.image}
                  borderRadius="lg"
                  width={40}
                  height={200}
                  m={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={15}>{e.title}</Heading>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default Products;
