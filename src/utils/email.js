import { createTransport } from "nodemailer";
import { feedbackEmailTemplate } from "./emailTemplate.js";

export const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "maximilian.koss18@ethereal.email",
    pass: "GtympBbhUqbRTVJ2nW",
  },
});
