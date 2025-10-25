import { Box, Text, Button, Tag, Wrap } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function PortfolioCard({ profile }) {
  const navigate = useNavigate();
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md">
      <Text fontWeight="bold" fontSize="xl">{profile.name}</Text>
      <Text>{profile.title}</Text>
      <Wrap mt={2}>{profile.skills.map((s, i) => <Tag key={i}>{s}</Tag>)}</Wrap>
      <Button mt={3} colorScheme="teal" onClick={() => navigate(`/portfolio/${profile.id}`)}>View Portfolio</Button>
    </Box>
  );
}
