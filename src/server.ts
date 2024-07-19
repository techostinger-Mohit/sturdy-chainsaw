import express from "express";
import signupRouter from "./routes/signupRoute";

// import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use("/signup", signupRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Techostinger!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
