import { resendClient } from "../lib/resend"
import { createWelcomeEmailTemplate } from "./emailTemplates"

export const sendWelcomeEmail = async ( email, name, clientURL) => {
    const  { data, error } = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to chatify!",
        html: createWelcomeEmailTemplate(name, clientURL),
    })
  if(error) {
    console.log("error sending email:", error);
    throw new Error("Failed to send welcome email")
  } 
  console.log("welcome email  sent successfully", data);
}
