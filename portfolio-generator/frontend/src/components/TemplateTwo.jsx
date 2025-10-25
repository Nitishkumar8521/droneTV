import { Box, Heading, Text, Divider } from "@chakra-ui/react";

export default function TemplateTwo({ profile }) {
  return (
    <Box p={6} bg="gray.100">
      <Heading color="teal.600">{profile.name}</Heading>
      <Text>{profile.title}</Text>
      <Divider my={3} />
      <Text>{profile.bio}</Text>
      <Heading size="sm" mt={3}>Skills</Heading>
      <Text>{profile.skills.join(", ")}</Text>
      <Heading size="sm" mt={3}>Projects</Heading>
      <Text>{profile.projects.join(", ")}</Text>
    </Box>
  );
}
