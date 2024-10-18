import jwt from "jsonwebtoken";

import "dotenv/config";

const KEY = process.env.TOKEN_JWT;

export function gerarTokenJwt(payload) {
  return jwt.sign(payload, KEY);
}

export function autenticacao(req, resp, next) {
  try {
    const token = req.headers["Authorization"].split("Bearer ")[1];
    // const decoded = jwt.verify(token, KEY);

    console.log(token);
  } catch (error) {
    return resp.status(401).end();
  }
}
