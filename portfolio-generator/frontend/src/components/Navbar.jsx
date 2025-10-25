import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex bg="teal.500" p={4} justify="space-between" align="center" color="white">
      <Heading size="md">Portfolio Generator</Heading>
      <Link to="/">Home</Link>
    </Flex>
  );
}
