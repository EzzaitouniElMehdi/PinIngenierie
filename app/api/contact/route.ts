import { NextRequest, NextResponse } from "next/server";

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

    // Here you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - AWS SES
    
    // For now, we'll just log and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual email sending logic
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'your-email@example.com',
    //   subject: `Nouveau contact: ${projectType}`,
    //   html: `<p>Nom: ${name}</p><p>Email: ${email}</p><p>Téléphone: ${phone}</p><p>Type: ${projectType}</p><p>Message: ${message}</p>`
    // });

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

