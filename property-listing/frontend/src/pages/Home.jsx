import { useEffect, useState } from 'react';
import { Box, Grid, Input, useDisclosure, Heading } from '@chakra-ui/react';
import API from '../services/api';
import PropertyCard from '../components/PropertyCard';
import PropertyForm from '../components/PropertyForm';
import PropertyModal from '../components/PropertyModal';

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchData = async () => {
    const res = await API.get('/properties');
    setProperties(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const filtered = properties.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (prop) => { setSelected(prop); onOpen(); };
  const handleAdd = (newProp) => setProperties([...properties, newProp]);

  return (
    <Box p={5}>
      <Heading mb={4}>🏠 Property Listings</Heading>
      <Input placeholder="Search by name or location..." mb={4} value={search} onChange={(e) => setSearch(e.target.value)} />
      <PropertyForm onAdd={handleAdd} />
      <Grid mt={6} templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {filtered.map(p => <PropertyCard key={p.id} property={p} onView={handleView} />)}
      </Grid>
      <PropertyModal isOpen={isOpen} onClose={onClose} property={selected} />
    </Box>
  );
}
