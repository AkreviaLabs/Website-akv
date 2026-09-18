"use server";

import { Resend } from "resend";

// Initialize Resend. Will fall back to a mock if no API key is provided
const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  // Fallback for development without a real API key
  if (!process.env.RESEND_API_KEY) {
    console.log("Mock Email Sent (No RESEND_API_KEY found):", { name, email, company, message });
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, mock: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Akrevia Website <onboarding@resend.dev>", // Resend's testing domain
      to: ["vishwagautam57@gmail.com"],
      replyTo: email,
      subject: `Project inquiry from ${name}${company ? ` at ${company}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Error:", error);
    return { error: "Failed to send email. Please try again." };
  }
}
