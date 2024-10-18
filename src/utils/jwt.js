import jwt from "jsonwebtoken";

import "dotenv/config";

const KEY = process.env.TOKEN_JWT;

export function gerarTokenJwt(payload) {
  return jwt.sign(payload, KEY, {
    expiresIn: "1hr",
  });
}

export function autenticacao(req, resp, next) {
  try {
    const token = req.headers["authorization"].split("Bearer ")[1];
    const decoded = jwt.verify(token, KEY);

    req.user = { id: decoded.id, email: decoded.email };

    next();
  } catch (error) {
    return resp.status(401).end();
  }
}
