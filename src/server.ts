import express from 'express';

import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Techostinger!');
});


app.get('/check', (req, res) => {
  res.send('Check!, Techostinger!');
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
