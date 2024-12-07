import EmailTemplate from "@/components/templates/email-template";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { fullName, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: `Slideify <omarmohamedfaheem@slideify.co>`,
      to: ["omarmohamedfaheem@gmail.com"],
      subject: "Slideify Contact Form Submission",
      react: EmailTemplate({
        fullName,
        email,
        message,
      }),
    });
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
