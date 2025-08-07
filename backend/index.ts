import express from "express";
import bodyParser from "body-parser";
import { registerRoutes } from "./routes";

const app = express();
app.use(bodyParser.json());

registerRoutes(app).then(server => {
  server.listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
  });
});
