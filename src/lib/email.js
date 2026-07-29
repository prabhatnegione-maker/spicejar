import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";

export const resend = new Resend(resendApiKey);

export async function sendWelcomeEmail(toEmail) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email dispatch.");
      return { success: false, error: "Missing RESEND_API_KEY" };
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to spicejar</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2C1810;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 30px auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E5E0D8; box-shadow: 0 10px 30px rgba(44, 24, 16, 0.06);">
            <!-- Header Banner -->
            <tr>
              <td style="background-color: #2C1810; padding: 40px 30px; text-align: center;">
                <h1 style="color: #F5A623; font-family: Georgia, serif; font-size: 32px; margin: 0; font-weight: 400; letter-spacing: 0.05em;">
                  spicejar
                </h1>
                <p style="color: #E0C9A6; font-size: 13px; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 8px;">
                  Pure · Stone-Ground · Sustainable
                </p>
              </td>
            </tr>

            <!-- Content Body -->
            <tr>
              <td style="padding: 40px 35px;">
                <h2 style="font-family: Georgia, serif; font-size: 24px; color: #2C1810; margin-top: 0; font-weight: 400;">
                  Welcome to the spicejar Family! 🌿
                </h2>
                
                <p style="font-size: 15px; line-height: 1.6; color: #55443D;">
                  Thank you for joining our community of passionate food lovers and culinary enthusiasts. At <strong>spicejar</strong>, we believe every dish deserves the uncompromised richness of authentic, single-origin spices.
                </p>

                <p style="font-size: 15px; line-height: 1.6; color: #55443D;">
                  From Kashmir's hand-harvested Saffron to Malabar's sun-dried Black Peppercorns — every jar we pack is stone-ground, free from artificial additives, and delivered in eco-friendly reusable glass jars.
                </p>

                <!-- Special Offer Box -->
                <div style="background-color: #FDF9F2; border: 1px dashed #F5A623; border-radius: 12px; padding: 25px; text-align: center; margin: 30px 0;">
                  <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #C86D28; font-weight: bold; margin: 0 0 8px 0;">
                    Your Welcome Gift
                  </p>
                  <h3 style="font-size: 22px; margin: 0 0 10px 0; color: #2C1810;">
                    Enjoy 10% Off Your First Order
                  </h3>
                  <div style="display: inline-block; background-color: #2C1810; color: #F5A623; font-family: monospace; font-size: 18px; padding: 10px 24px; border-radius: 8px; font-weight: bold; letter-spacing: 0.1em; margin: 10px 0;">
                    SPICE10
                  </div>
                  <p style="font-size: 13px; color: #88776F; margin: 10px 0 0 0;">
                    Use code <strong>SPICE10</strong> at checkout on your first order.
                  </p>
                </div>

                <!-- CTA Button -->
                <div style="text-align: center; margin-top: 35px;">
                  <a href="https://spicejarx.vercel.app/shop" style="display: inline-block; background-color: #C86D28; color: #FFFFFF; text-decoration: none; padding: 15px 36px; border-radius: 30px; font-weight: bold; font-size: 15px; box-shadow: 0 4px 14px rgba(200, 109, 40, 0.3);">
                    Explore Our Collection →
                  </a>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #FAF8F5; padding: 25px 35px; border-top: 1px solid #E5E0D8; text-align: center;">
                <p style="font-size: 13px; color: #88776F; margin: 0;">
                  © ${new Date().getFullYear()} spicejar Storefront. All rights reserved.
                </p>
                <p style="font-size: 12px; color: #AAA099; margin-top: 6px;">
                  You received this email because you subscribed on <a href="https://spicejarx.vercel.app" style="color: #C86D28; text-decoration: underline;">spicejarx.vercel.app</a>
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "spicejar <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Welcome to spicejar — Here is your 10% discount code! 🌿",
      html: htmlContent,
    });

    if (error) {
      console.warn("Resend email delivery notice:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Failed to send welcome email via Resend:", err);
    return { success: false, error: err.message };
  }
}
