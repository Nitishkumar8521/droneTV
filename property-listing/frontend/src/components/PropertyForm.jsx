import { useState } from 'react';
import { Box, Input, Button, VStack } from '@chakra-ui/react';
import API from '../services/api';

export default function PropertyForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '', type: '', price: '', location: '', description: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/properties', formData);
    onAdd(res.data);
    setFormData({ name: '', type: '', price: '', location: '', description: '' });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={2}>
        {['name','type','price','location','description'].map(field => (
          <Input key={field} name={field} placeholder={field} value={formData[field]} onChange={handleChange} required />
        ))}
        <Button colorScheme="blue" type="submit">Add Property</Button>
      </VStack>
    </Box>
  );
}
