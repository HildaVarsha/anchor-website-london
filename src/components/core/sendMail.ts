"use server";
import nodemailer from "nodemailer";

export async function sendEmail({
  name,
  email,
  content,
}: {
  email: string;
  content: string;
  name: string;
}) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Define email options
  let mailOptions = {
    from: "regis@gmail.com",
    to: "info@anchorinformatics.co.uk",
    subject: `Mail from ${email}`,
    text: content,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
  <p style="font-weight: bold; font-size: 18px; color: #333;">Hello Anchor Informatics!</p>
  <p style="margin: 16px 0;">
    You have received a new contact request from the Anchor Informatics portal. Please find the details below:
  </p>
  <p style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #4caf50;">
    <strong style="font-size: 16px;">Name:</strong> 
    <span style="color: #555;">${name}</span>
  </p>
  <p style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #4caf50;">
    <strong style="font-size: 16px;">Email:</strong> 
    <span style="color: #555;">${email}</span>
  </p>
  <p style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #4caf50;">
    <strong style="font-size: 16px;">Message:</strong> 
    <span style="color: #555;">${content}</span>
  </p>
  <p style="margin-top: 16px; color: #666;">
    Please respond to this inquiry at your earliest convenience. 
  </p>
  <p style="font-size: 14px; color: #999;">
    Regards, <br/>
    Anchor Informatics Portal
  </p>
</div>
`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return "success";
  } catch (error) {
    console.error("Error sending email:", error);
    return "error";
  }
}
