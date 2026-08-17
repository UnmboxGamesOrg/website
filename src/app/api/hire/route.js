import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { fullName, email, projectDetails } = await request.json();

    if (!fullName || !email || !projectDetails) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Unmbox Games <hello@unmboxgames.com>",
      to: "hello@unmboxgames.com",
      replyTo: email,
      subject: `[Hire Us] New proposal from ${fullName}`,
      text: `From: ${fullName} (${email})\n\n${projectDetails}`,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send proposal." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
