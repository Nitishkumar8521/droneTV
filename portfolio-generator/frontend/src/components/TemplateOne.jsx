import { Box, Heading, Text, Tag, Wrap } from "@chakra-ui/react";

export default function TemplateOne({ profile }) {
  return (
    <Box p={5}>
      <Heading>{profile.name}</Heading>
      <Text fontSize="xl">{profile.title}</Text>
      <Text mt={2}>{profile.tagline}</Text>
      <Text mt={4}>{profile.bio}</Text>
      <Wrap mt={3}>{profile.skills.map((s, i) => <Tag key={i}>{s}</Tag>)}</Wrap>
      <Box mt={4}>
        <Heading size="md">Projects</Heading>
        {profile.projects.map((p, i) => <Text key={i}>• {p}</Text>)}
      </Box>
    </Box>
  );
}
