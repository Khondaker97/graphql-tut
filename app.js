import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schemaBook from "./schema/Schema.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaBook,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));
app.listen(PORT, () => console.log(`server running on ${PORT}`));
