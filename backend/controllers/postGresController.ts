import { Pool } from "pg";

export const pool = new Pool({
  user: "username",
  host: "localhost",
  database: "game-collection",
  password: "games",
  port: 5432,
});

export async function saveGameDetails(req, res, next) {}
