import express from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";

// const app = express();
// app.use(express.json());

const PG_USERNAME = process.env.PG_USERNAME;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_HOST = process.env.PG_HOST;
const PG_PORT = parseInt(process.env.PG_PORT || "5432");
const PG_DATABASE = process.env.PG_DATABASE;

const pool = new Pool({
  user: PG_USERNAME,
  password: PG_PASSWORD,
  host: PG_HOST,
  database: PG_DATABASE,
  port: PG_PORT,
});

export default pool;
