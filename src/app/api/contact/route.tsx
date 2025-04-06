import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter, smtpEmail } from "../../../utils/nodemailer";
import { Email } from "../../components/email";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = await render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(options);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
