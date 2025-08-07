import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSignupSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email signup endpoint
  app.post("/api/signup", async (req, res) => {
    try {
      const parsed = insertSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getSignupByEmail(parsed.email);
      if (existingSignup) {
        return res.status(409).json({ 
          error: "Email already registered for updates" 
        });
      }

      const signup = await storage.createSignup(parsed);
      res.json({ 
        success: true, 
        message: "Successfully signed up for updates!",
        id: signup.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  // Get all signups (for admin purposes)
  app.get("/api/signups", async (req, res) => {
    try {
      const signups = await storage.getSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
