import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Les champs nom, email et message sont requis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Send email via Resend if configured
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_TO = process.env.RESEND_TO; // destination (your company email)
    const RESEND_FROM = process.env.RESEND_FROM || "no-reply@your-domain.com";

    if (RESEND_API_KEY && RESEND_TO) {
      const resend = new Resend(RESEND_API_KEY);
      const subject = `Nouveau contact — ${projectType || "Demande de devis"}`;
      const html = `
        <div style="font-family: Inter, Arial, sans-serif; line-height:1.6; color:#111">
          <h2 style="margin:0 0 8px 0;">Nouveau message depuis le site</h2>
          <p style="margin:0 0 16px 0; color:#444;">Reçu le ${new Date().toLocaleString()}</p>
          <table style="border-collapse:collapse; width:100%; max-width:640px;">
            <tbody>
              <tr><td style="padding:6px 0; width:160px; color:#666;">Nom</td><td style="padding:6px 0;"><strong>${escapeHtml(
                name
              )}</strong></td></tr>
              <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(
                email
              )}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:6px 0; color:#666;">Téléphone</td><td style="padding:6px 0;">${escapeHtml(
                phone || ""
              )}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Type de projet</td><td style="padding:6px 0;">${escapeHtml(
                projectType || ""
              )}</td></tr>
            </tbody>
          </table>
          <h3 style="margin:16px 0 8px 0;">Message</h3>
          <p style="white-space:pre-wrap; margin:0; color:#111;">${escapeHtml(
            message
          )}</p>
        </div>
      `;
      await resend.emails.send({
        from: RESEND_FROM,
        to: RESEND_TO,
        replyTo: email,
        subject,
        html,
      });
    } else {
      // Fallback logging when email not configured
      console.log("Contact form submission (email not configured):", {
        name,
        email,
        phone,
        projectType,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { 
        success: true,
        message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les 24h." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

