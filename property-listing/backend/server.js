import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

let properties = [
  { id: 1, name: "Luxury Villa", type: "Villa", price: 120000, location: "Goa", description: "Sea-facing villa" },
  { id: 2, name: "City Apartment", type: "Apartment", price: 80000, location: "Mumbai", description: "2BHK in city center" },
];

app.get('/api/properties', (req, res) => res.json(properties));

app.post('/api/properties', (req, res) => {
  const newProp = { id: Date.now(), ...req.body };
  properties.push(newProp);
  res.json(newProp);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
