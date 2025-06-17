/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY in environment");
}
const resend = new Resend(process.env.RESEND_API_KEY);

function getFromHeader(): string {
    const name = process.env.EMAIL_FROM_NAME?.trim();
    const address = process.env.EMAIL_FROM_ADDRESS?.trim();
    if (!name || !address) {
        throw new Error("EMAIL_FROM_NAME and EMAIL_FROM_ADDRESS must be set in .env");
    }
    return `${name} <${address}>`;
}

function getToAddresses(): string[] {
    const raw = process.env.EMAIL_TO?.trim();
    if (!raw) throw new Error("EMAIL_TO must be set in .env");
    return raw.split(",").map((addr) => addr.trim());
}

export async function POST(req: NextRequest) {
    try {
        // 1) Parse request body
        const {
            firstName,
            lastName,
            email,
            company,
            phone,
            preferredContact,
            services,
            message,
            attachments,
        } = (await req.json()) as Record<string, any>;

        // 2) Build a styled HTML table for all the fields
        let htmlContent = `
      <!-- Container with some padding and a neutral background -->
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f5f5f5;">
        <!-- Header bar -->
        <div style="background-color: #0d9488; color: #fff; padding: 10px 20px; border-radius: 5px 5px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>

        <!-- Main content area -->
        <div style="background-color: #fff; padding: 20px; border-radius: 0 0 5px 5px;">
          <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
            <!-- Row: Name -->
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: bold; width: 30%;">Name</td>
              <td>${firstName} ${lastName}</td>
            </tr>

            <!-- Row: Email -->
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: bold;">Email</td>
              <td>${email}</td>
            </tr>

            <!-- Row: Company (conditionally rendered) -->
            ${company
                ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: bold;">Company</td>
              <td>${company}</td>
            </tr>`
                : ``
            }

            <!-- Row: Phone (conditionally rendered) -->
            ${phone
                ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: bold;">Phone</td>
              <td>${phone}</td>
            </tr>`
                : ``
            }

            <!-- Row: Preferred Contact Method (conditionally rendered) -->
            ${preferredContact
                ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: bold;">Preferred Contact</td>
              <td>${preferredContact}</td>
            </tr>`
                : ``
            }

            <!-- Row: Services (conditionally rendered) -->
            ${Array.isArray(services) && services.length
                ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: bold;">Services</td>
              <td>${(services as string[]).join(", ")}</td>
            </tr>`
                : ``
            }

            <!-- Row: Message -->
            <tr style="vertical-align: top;">
              <td style="font-weight: bold;">Message</td>
              <td>${(message as string).replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
    `;

        // 3) If there are attachments, add a separate “Attachments” section
        if (Array.isArray(attachments) && attachments.length > 0) {
            // List each filename in a bullet list
            htmlContent += `
          <div style="margin-top: 20px; padding-top: 10px; border-top: 1px solid #e2e8f0;">
            <p style="font-weight: bold; margin-bottom: 8px;">Attachments:</p>
            <ul style="margin: 0; padding-left: 20px;">
              ${(attachments as { filename: string; type: string; data: string }[])
                    .map((att) => `<li>${att.filename}</li>`)
                    .join("\n")}
            </ul>
          </div>
        `;
        }

        // 4) Close container div
        htmlContent += `
        </div>
      </div>
    `;

        // 5) Build the payload for Resend
        const sendPayload: {
            from: string;
            to: string[];
            subject: string;
            html: string;
            attachments?: { filename: string; type: string; content: string }[];
        } = {
            from: getFromHeader(),
            to: getToAddresses(),
            subject: `📩 Contact from ${firstName} ${lastName}`,
            html: htmlContent,
        };

        // 6) Convert any attachments data→content for Resend
        if (Array.isArray(attachments) && attachments.length > 0) {
            sendPayload.attachments = (attachments as {
              filename: string;
              type: string;
              data: string;
            }[]).map((att) => ({
              filename: att.filename,
              type: att.type,
              content: att.data, // Resend expects `content` instead of `data`
            }));

            // Send confirmation email to the user
            const userConfirmationPayload = {
              from: getFromHeader(),
              to: [email],
              subject: `Thank you, ${firstName}! We've received your message`,
              html: `
                <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f5f5f5;">
                <div style="background-color: #0d9488; color: #fff; padding: 10px 20px; border-radius: 5px 5px 0 0;">
                  <h1 style="margin: 0; font-size: 22px;">Thank you for contacting us, ${firstName} ${lastName}!</h1>
                </div>
                <div style="background-color: #fff; padding: 20px; border-radius: 0 0 5px 5px;">
                  <p>We have received your message and will get back to you as soon as possible.</p>
                  <p><strong>Your message:</strong></p>
                  <blockquote style="border-left: 4px solid #0d9488; margin: 0; padding-left: 12px; color: #555;">
                  ${(message as string).replace(/\n/g, "<br/>")}
                  </blockquote>
                  <p style="margin-top: 20px;">Best regards,<br/>The Team</p>
                </div>
                 <div style="margin-top: 20px; text-align: center;">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/brilliant-ai-6d2ad.firebasestorage.app/o/logos%2Flogo-dark.png?alt=media&token=75857067-a378-4973-8dbf-2b1add87f2af"
            alt="Brilliant AI"
            style="width: 120px; opacity: 0.8;"
          />
        </div>
                </div>
              `,
            };
            await resend.emails.send(userConfirmationPayload);
        }

        // 7) Send via Resend
        const result = await resend.emails.send(sendPayload);
        console.log("Email sent successfully:", result);
        return NextResponse.json({ success: true, id: result.data?.id || "unknown" });
    } catch (error: any) {
        console.error("Error sending email via Resend:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Unknown error" },
            { status: 500 }
        );
    }
}
