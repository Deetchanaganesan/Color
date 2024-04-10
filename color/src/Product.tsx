import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Heading,
  Flex,
  Box,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { ChevronLeft, Circle, CircleCheck } from "lucide-react";

const Product = () => {
  return (
    <>
      <Image
        boxSize={{ base: "190px", md: "80px" }}
        ml={"40px"}
        src="dribble.png"
        alt="hello"
      ></Image>
      <Box
        ml={{ base: "280px", md: "150px" }}
        mt={{ base: "-100px", md: "-50px" }}
        borderRadius={"base"}
        bg={"#DCDFE4"}
        width={"30px"}
      >
        <ChevronLeft size={"24px"} />
      </Box>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "50px", md: "24px" }}
        ml={{ base: "350px", md: "0px" }}
        mt={{ base: "280px", md: "0px" }}
        width={{ base: "100%", md: "100%" }}
      >
        What brings you to Dribble?
      </Text>
      <br></br>
      <Text
        ml={{ base: "150px", md: "0px" }}
        width={{ base: "180%", md: "100%" }}
        fontSize={{ base: "40px", md: "18px" }}
      >
        Select the options that best describes you.Don't worry,you can explore
        other options later.
      </Text>
      <br></br>
      <Flex height={"100%"} width={{ base: "240%", md: "100%" }}>
        <Card maxW={{ base: "350px", md: "sm" }} gap={2}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size={{ base: "xl", md: "md" }}>
                The way to get started is to quit talking and begin doing😁
              </Heading>
              <Box ml={"150px"}>
                <Circle color="#DCDFE4" />
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Spacer></Spacer>
        <Card maxW={{ base: "350px", md: "sm" }}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size={{ base: "xl", md: "md" }}>
                The future belongs to those who believe in the dreams❤️
              </Heading>
              <Box ml={"150px"}>
                <Circle color="#DCDFE4" />
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Spacer></Spacer>
        <Card maxW={{ base: "380px", md: "sm" }}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Text fontSize={{ base: "30px", md: "md" }}>
                With over 7 million shots from a vast community of
                designers,Dribble is the leading source for design inspiration.
              </Text>
              <Box ml={{ base: "120px", md: "150px" }}>
                <CircleCheck size={"20px"} color="#CD519D" />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      <br></br>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "30px", md: "16px" }}
        ml={{ base: "300px", md: "0px" }}
        width={{ base: "100%", md: "100%" }}
      >
        Anything else?You can select multiple
      </Text>
      <Button
        colorScheme="pink"
        size={{ base: "lg", md: "md" }}
        ml={{ base: "400px", md: "20px" }}
        mt={{ base: "50px", md: "10px" }}
        width={"200px"}
      >
        Finish
      </Button>
      <Text
        color={"#8590A2"}
        fontSize={{ base: "30px", md: "16px" }}
        ml={{ base: "270px", md: "0px" }}
        width={{ base: "100%", md: "100%" }}
      >
        or Press <span style={{ fontWeight: "bold" }}>RETURN</span>
      </Text>
    </>
  );
};

export default Product;
