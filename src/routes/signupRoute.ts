import express, { Router } from "express";
import { signupController } from "../controllers/signupController";

// Create a new router
const router: Router = express.Router();

// Define the home page route
router.get("/", signupController);

// Export the router
export default router;
