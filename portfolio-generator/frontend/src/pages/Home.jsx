import { useEffect, useState } from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import API from "../services/api";
import PortfolioForm from "../components/PortfolioForm";
import PortfolioCard from "../components/PortfolioCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    const res = await API.get("/portfolios");
    setProfiles(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdd = (p) => setProfiles([...profiles, p]);

  return (
    <Box p={5}>
      <Heading mb={4}>🎨 Portfolio Generator</Heading>
      <PortfolioForm onAdd={handleAdd} />
      <Grid mt={5} templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {profiles.map((p) => <PortfolioCard key={p.id} profile={p} />)}
      </Grid>
    </Box>
  );
}
