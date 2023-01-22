import { RequestHandler } from "express";

import { pool } from "../database";

import { IAccount } from "../models/Account";

export const createAccount: RequestHandler = async (req, res) => {
  const { name, email, message } = req.body satisfies IAccount;

  try {
    const result = await pool.query(
      "INSERT INTO accounts (email, name, message) VALUES(?,?,?)",
      [email, name, message]
    );
    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, data: error });
  }
};
