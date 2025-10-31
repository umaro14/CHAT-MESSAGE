import {Resend} from "resend";
import"dotenv/config"

export const resendClient = new Resend(process.env.RESEND_API_KEY)

//export const EMAIL_FROM = process.env.EMAIL_FROM || 

export const sender = {
    email: process.env.EMAIL_FROM,
    name: process.env.EMAIL_FROM_NAME
}