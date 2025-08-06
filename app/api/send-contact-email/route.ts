import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS || "khegarha.falahi.tanzeem@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "whwi iikf fihz fjjg",
      },
    })

    // Get current time for greeting
    const hour = new Date().getHours()
    let greeting = "Good Day!"

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning! 🌅"
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon! ☀️"
    } else if (hour >= 17 && hour < 21) {
      greeting = "Good Evening! 🌇"
    } else {
      greeting = "Good Night! 🌙"
    }

    // Create email content
    const subject = `📧 New Contact Message - ${formData.subject || "General Inquiry"}`
    const emailBody = `
${greeting}

We have received a new message through the KFT website contact form.

📬 CONTACT MESSAGE DETAILS:
═══════════════════════════════════════

👤 SENDER INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || "Not provided"}
• Subject: ${formData.subject || "General Inquiry"}

💬 MESSAGE:
${formData.message}

📅 Message Sent: ${new Date().toLocaleString()}
🌐 Source: KFT Website Contact Form

═══════════════════════════════════════

Please respond to this inquiry at your earliest convenience.

Best regards,
KFT Website System 🤖
    `

    // Recipients
    const recipients = ["khegarha.falahi.tanzeem@gmail.com"]

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS || "khegarha.falahi.tanzeem@gmail.com",
      to: recipients.join(", "),
      subject: subject,
      text: emailBody,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Contact message sent successfully!",
    })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ success: false, message: "Failed to send contact message" }, { status: 500 })
  }
}
