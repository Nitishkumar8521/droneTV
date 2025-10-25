import { Box, Text, Button } from '@chakra-ui/react';

export default function PropertyCard({ property, onView }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md">
      <Text fontWeight="bold" fontSize="xl">{property.name}</Text>
      <Text>Type: {property.type}</Text>
      <Text>Location: {property.location}</Text>
      <Text>Price: ₹{property.price}</Text>
      <Button mt={2} colorScheme="teal" onClick={() => onView(property)}>View</Button>
    </Box>
  );
}
