import { useState } from "react";
import { Box, Input, Textarea, Button, VStack, Heading } from "@chakra-ui/react";
import API from "../services/api";

export default function PortfolioForm({ onAdd }) {
  const [data, setData] = useState({
    name: "", title: "", tagline: "", bio: "", email: "", phone: "", location: "",
    skills: "", projects: "", template: "1"
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...data, skills: data.skills.split(","), projects: data.projects.split(",") };
    const res = await API.post("/portfolios", payload);
    onAdd(res.data);
    setData({ name: "", title: "", tagline: "", bio: "", email: "", phone: "", location: "", skills: "", projects: "", template: "1" });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} borderWidth="1px" borderRadius="md" p={4} mt={4}>
      <Heading size="md" mb={2}>Create Portfolio</Heading>
      <VStack spacing={2}>
        {["name", "title", "tagline", "bio", "email", "phone", "location"].map((f) => (
          <Input key={f} name={f} placeholder={f} value={data[f]} onChange={handleChange} required />
        ))}
        <Input name="skills" placeholder="Skills (comma separated)" value={data.skills} onChange={handleChange} />
        <Textarea name="projects" placeholder="Projects (comma separated)" value={data.projects} onChange={handleChange} />
        <Input name="template" placeholder="Template (1 or 2)" value={data.template} onChange={handleChange} />
        <Button colorScheme="blue" type="submit">Add Portfolio</Button>
      </VStack>
    </Box>
  );
}
