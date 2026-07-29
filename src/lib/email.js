import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_dummy_build_key";

export const resend = new Resend(resendApiKey);

export function getWelcomeEmailHtml() {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to spicejar — 10% OFF Your First Order</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #FAF6F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2C1810; -webkit-font-smoothing: antialiased;">
    <!-- Container -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #EAE4D9; box-shadow: 0 16px 40px rgba(44, 24, 16, 0.08);">
      
      <!-- 1. Header Bar -->
      <tr>
        <td style="padding: 24px 30px; text-align: center; background-color: #FAF6F0; border-bottom: 1px solid #EAE4D9;">
          <a href="https://spicejarx.vercel.app" style="text-decoration: none; display: inline-block;">
            <img src="https://spicejarx.vercel.app/images/logo.png" alt="spicejar" width="160" style="height: auto; max-height: 50px; display: block; margin: 0 auto; object-fit: contain;" />
          </a>
        </td>
      </tr>

      <!-- 2. Hero Visual Section (PacSun & Teavana Inspired Bold Layout) -->
      <tr>
        <td style="padding: 0;">
          <div style="position: relative; background-color: #2C1810; text-align: center;">
            <a href="https://spicejarx.vercel.app/shop" style="text-decoration: none; display: block;">
              <img src="https://spicejarx.vercel.app/images/products/laal-ras-hero.png" alt="Spicejar Premium Spices" width="600" style="width: 100%; height: auto; max-height: 320px; object-fit: cover; display: block;" />
            </a>
          </div>
        </td>
      </tr>

      <!-- 3. High-Impact Offer Section -->
      <tr>
        <td style="padding: 40px 30px; text-align: center; background: linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%);">
          <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.25em; color: #C86D28; margin: 0 0 10px 0;">
            ✦ EXCLUSIVE WELCOME GIFT ✦
          </p>

          <h1 style="font-family: Georgia, 'Times New Roman', serif; font-size: 48px; line-height: 1.05; color: #2C1810; margin: 0 0 12px 0; font-weight: 400; letter-spacing: -0.02em;">
            10% OFF
          </h1>

          <p style="font-size: 16px; color: #66524A; margin: 0 auto 24px auto; max-width: 440px; line-height: 1.5;">
            Welcome to the family. Enjoy 10% off your entire first order of hand-sourced, stone-ground Indian spices.
          </p>

          <!-- Golden Ticket Coupon Box -->
          <div style="display: inline-block; background-color: #2C1810; border: 2px dashed #F5A623; border-radius: 12px; padding: 16px 36px; margin-bottom: 24px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #E0C9A6; margin: 0 0 6px 0; font-weight: 600;">
              YOUR PROMO CODE
            </p>
            <span style="font-family: 'Courier New', Courier, monospace; font-size: 26px; font-weight: 800; color: #F5A623; letter-spacing: 0.15em;">
              SPICE10
            </span>
          </div>

          <div>
            <a href="https://spicejarx.vercel.app/shop" style="display: inline-block; background-color: #C86D28; color: #FFFFFF; text-decoration: none; padding: 16px 42px; border-radius: 30px; font-weight: 700; font-size: 15px; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 8px 24px rgba(200, 109, 40, 0.35);">
              CLAIM YOUR 10% OFF →
            </a>
          </div>
        </td>
      </tr>

      <!-- 4. Featured Best Sellers Grid Header -->
      <tr>
        <td style="padding: 35px 30px 15px 30px; text-align: center; border-top: 1px solid #EAE4D9;">
          <h2 style="font-family: Georgia, serif; font-size: 26px; color: #2C1810; margin: 0 0 8px 0; font-weight: 400;">
            THE HARVEST SELECTION
          </h2>
          <p style="font-size: 14px; color: #7A675F; margin: 0;">
            Hand-picked customer favorites packed in sustainable glass jars.
          </p>
        </td>
      </tr>

      <!-- 5. Product Grid (2 Columns) -->
      <tr>
        <td style="padding: 10px 24px 30px 24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <!-- Product 1: Laal Ras -->
              <td width="50%" style="padding: 10px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; border: 1px solid #EAE4D9; padding: 16px; text-align: center;">
                  <a href="https://spicejarx.vercel.app/shop/laal-ras" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/laal-ras.png" alt="Laal Ras" width="220" style="width: 100%; height: 160px; object-fit: contain; border-radius: 10px; margin-bottom: 12px;" />
                    <span style="display: inline-block; background-color: #C86D28; color: #FFF; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.1em; margin-bottom: 8px;">BESTSELLER</span>
                    <h3 style="font-size: 16px; color: #2C1810; margin: 0 0 4px 0; font-weight: 600;">Laal Ras</h3>
                    <p style="font-size: 12px; color: #7A675F; margin: 0 0 10px 0;">Kashmiri Red Chilli</p>
                    <span style="display: inline-block; background-color: #2C1810; color: #FFF; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 20px;">Shop ₹349</span>
                  </a>
                </div>
              </td>

              <!-- Product 2: Kesar Dhaga -->
              <td width="50%" style="padding: 10px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; border: 1px solid #EAE4D9; padding: 16px; text-align: center;">
                  <a href="https://spicejarx.vercel.app/shop/kesar-dhaga" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/kesar-dhaga.png" alt="Kesar Dhaga" width="220" style="width: 100%; height: 160px; object-fit: contain; border-radius: 10px; margin-bottom: 12px;" />
                    <span style="display: inline-block; background-color: #2C1810; color: #F5A623; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.1em; margin-bottom: 8px;">PREMIUM</span>
                    <h3 style="font-size: 16px; color: #2C1810; margin: 0 0 4px 0; font-weight: 600;">Kesar Dhaga</h3>
                    <p style="font-size: 12px; color: #7A675F; margin: 0 0 10px 0;">Pure Kashmir Saffron</p>
                    <span style="display: inline-block; background-color: #2C1810; color: #FFF; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 20px;">Shop ₹999</span>
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Product 3: Haldi Gold -->
              <td width="50%" style="padding: 10px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; border: 1px solid #EAE4D9; padding: 16px; text-align: center;">
                  <a href="https://spicejarx.vercel.app/shop/haldi-gold" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/haldi-gold.png" alt="Haldi Gold" width="220" style="width: 100%; height: 160px; object-fit: contain; border-radius: 10px; margin-bottom: 12px;" />
                    <span style="display: inline-block; background-color: #D97706; color: #FFF; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.1em; margin-bottom: 8px;">HIGH CURCUMIN</span>
                    <h3 style="font-size: 16px; color: #2C1810; margin: 0 0 4px 0; font-weight: 600;">Haldi Gold</h3>
                    <p style="font-size: 12px; color: #7A675F; margin: 0 0 10px 0;">Lakadong Turmeric</p>
                    <span style="display: inline-block; background-color: #2C1810; color: #FFF; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 20px;">Shop ₹299</span>
                  </a>
                </div>
              </td>

              <!-- Product 4: Green Elaichi -->
              <td width="50%" style="padding: 10px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; border: 1px solid #EAE4D9; padding: 16px; text-align: center;">
                  <a href="https://spicejarx.vercel.app/shop/elaichi" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/elaichi.png" alt="Green Elaichi" width="220" style="width: 100%; height: 160px; object-fit: contain; border-radius: 10px; margin-bottom: 12px;" />
                    <span style="display: inline-block; background-color: #166534; color: #FFF; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.1em; margin-bottom: 8px;">AROMATIC</span>
                    <h3 style="font-size: 16px; color: #2C1810; margin: 0 0 4px 0; font-weight: 600;">Hari Elaichi</h3>
                    <p style="font-size: 12px; color: #7A675F; margin: 0 0 10px 0;">Idukki Green Cardamom</p>
                    <span style="display: inline-block; background-color: #2C1810; color: #FFF; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 20px;">Shop ₹449</span>
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- 6. Brand Guarantee Strip -->
      <tr>
        <td style="background-color: #2C1810; padding: 30px 20px; text-align: center; color: #FFFFFF;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td width="33%" style="text-align: center; padding: 5px;">
                <div style="font-size: 20px; margin-bottom: 4px;">🌾</div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #E0C9A6; font-weight: 600;">Single Origin</div>
              </td>
              <td width="33%" style="text-align: center; padding: 5px;">
                <div style="font-size: 20px; margin-bottom: 4px;">🪨</div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #E0C9A6; font-weight: 600;">Stone Ground</div>
              </td>
              <td width="33%" style="text-align: center; padding: 5px;">
                <div style="font-size: 20px; margin-bottom: 4px;">🫙</div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #E0C9A6; font-weight: 600;">Glass Jars</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- 7. Footer -->
      <tr>
        <td style="background-color: #1A0D08; padding: 30px; text-align: center; color: #88776F;">
          <p style="font-size: 13px; margin: 0 0 10px 0; color: #A8958B;">
            © ${new Date().getFullYear()} spicejar Storefront. Hand-sourced from Indian Soil.
          </p>
          <p style="font-size: 11px; color: #66554D; margin: 0;">
            You are receiving this email because you subscribed to spicejar updates.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

export async function sendWelcomeEmail(toEmail) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email dispatch.");
      return { success: false, error: "Missing RESEND_API_KEY" };
    }

    const htmlContent = getWelcomeEmailHtml();

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
