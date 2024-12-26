import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Iuser } from "../interface/user.interface";

dotenv.config();

export const createToken = (user: Iuser): string => {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET no está definida");
  }

  return jwt.sign(user, secret);
};

export const validatedToken = (req: any, res: any, next: any) => {
  const authorization = req.get("authorization");
  let decodeToken: any = {};
  let token = null;
  const secret = process.env.ACCESS_TOKEN_SECRET || '';

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  if (token) {
    try {
      decodeToken = jwt.verify(token, secret);
    } catch (error) {
      return res.status(401).json({ error: "token invalid!" });
    }
  }

  if (!token || !decodeToken.id) {
    return res.status(401).json({ error: "token missing or invalid!" });
  }

  const userId: number = decodeToken.id;
  req.userId = userId;

  next();
};

