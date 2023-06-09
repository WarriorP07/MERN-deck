import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "../models/Deck";
import { config } from "dotenv";

config();

const PORT = 5000;

const app = express();
app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
    console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createDeck = await newDeck.save();
  res.json(createDeck);
  console.log(`saved`);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
});
