import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

let portfolios = [];

// GET all portfolios
app.get('/api/portfolios', (req, res) => res.json(portfolios));

// POST new portfolio
app.post('/api/portfolios', (req, res) => {
  const newPortfolio = { id: Date.now(), ...req.body };
  portfolios.push(newPortfolio);
  res.json(newPortfolio);
});

// PUT (edit/update)
app.put('/api/portfolios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = portfolios.findIndex(p => p.id === id);
  if (index !== -1) {
    portfolios[index] = { ...portfolios[index], ...req.body };
    res.json(portfolios[index]);
  } else {
    res.status(404).json({ message: 'Portfolio not found' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Portfolio backend running on port ${PORT}`));
