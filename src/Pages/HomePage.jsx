import React, { useEffect } from "react";
import Navbar from "../../Global/Navbar/Navbar";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../Store/Product";
import ProductCard from "../../Global/Crad/ProductCard";
import Footer from "../../Global/Footer/Footer";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("product", products);

  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} py={12}>
        <VStack spacing={8}>
          <Text
            as={"h1"}
            size={"2xl"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            fontSize={"30"}
            fontWeight={"bold"}
          >
            Current Product
          </Text>

          {products.length > 0 ? (
            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
                lg: 3,
              }}
              spacing={10}
              w={"full"}
            >
             {products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}

            </SimpleGrid>
          ) : (
            <Text
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"grey.500"}
            >
              No Product Found{" "}
              <Link to={"/create"}>
                <Text
                  as="span"
                  color={"blue.500"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a product
                </Text>
              </Link>
            </Text>
          )}
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
