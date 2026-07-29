import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_dummy_build_key";

export const resend = new Resend(resendApiKey);

// ==========================================
// THEME 3 (Selected Winner): Vibrant Harvest Editorial
// ==========================================
export function getTheme3Html() {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to spicejar</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #FAF6F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E1B18; -webkit-font-smoothing: antialiased;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #EAE4D9; box-shadow: 0 16px 40px rgba(44, 24, 16, 0.08);">
      
      <!-- 1. Header Bar — Uncompressed Rich Brand Logo -->
      <tr>
        <td style="padding: 28px 30px; text-align: center; background-color: #FAF6F0; border-bottom: 1px solid #EAE4D9;">
          <a href="https://spicejarx.vercel.app" style="text-decoration: none; display: inline-block;">
            <img src="https://spicejarx.vercel.app/images/logo.png" alt="spicejar" width="180" style="width: 180px; max-width: 100%; height: auto; display: block; margin: 0 auto; object-fit: contain;" />
          </a>
        </td>
      </tr>

      <!-- 2. Hero Visual Section — Brand-Accurate 5-Jar Green Lid Lineup -->
      <tr>
        <td style="padding: 0;">
          <a href="https://spicejarx.vercel.app/shop" style="text-decoration: none; display: block;">
            <img src="https://spicejarx.vercel.app/images/products/collection-lineup.png" alt="Spicejar Gourmet Spices" width="600" style="width: 100%; height: auto; max-height: 380px; object-fit: cover; display: block;" />
          </a>
        </td>
      </tr>

      <!-- 3. Vibrant Color Block Hero Offer -->
      <tr>
        <td style="background: linear-gradient(135deg, #C86D28 0%, #E65100 100%); padding: 42px 30px; text-align: center; color: #FFFFFF;">
          <span style="display: inline-block; background-color: #2C1810; color: #F5A623; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 6px 16px; border-radius: 20px; letter-spacing: 0.15em; margin-bottom: 16px;">
            ✦ EXCLUSIVE WELCOME GIFT ✦
          </span>

          <h1 style="font-family: Georgia, 'Times New Roman', serif; font-size: 46px; line-height: 1.05; margin: 0 0 14px 0; font-weight: 400; letter-spacing: -0.01em;">
            10% OFF YOUR ORDER
          </h1>

          <p style="font-size: 16px; max-width: 440px; margin: 0 auto 26px auto; opacity: 0.95; line-height: 1.5;">
            Welcome to the family. Enjoy 10% off your first order of hand-sourced, stone-ground Indian spices.
          </p>

          <!-- White Voucher Box -->
          <div style="display: inline-block; background-color: #FFFFFF; border-radius: 14px; padding: 16px 36px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);">
            <span style="font-size: 11px; text-transform: uppercase; color: #88776F; display: block; font-weight: 700; margin-bottom: 4px; letter-spacing: 0.1em;">PROMO CODE</span>
            <span style="font-family: 'Courier New', monospace; font-size: 26px; font-weight: 900; color: #C86D28; letter-spacing: 0.15em;">SPICE10</span>
          </div>

          <div style="margin-top: 26px;">
            <a href="https://spicejarx.vercel.app/shop" style="display: inline-block; background-color: #2C1810; color: #F5A623; text-decoration: none; padding: 16px 42px; border-radius: 30px; font-weight: bold; font-size: 15px; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 6px 20px rgba(44, 24, 16, 0.4);">
              CLAIM YOUR 10% OFF →
            </a>
          </div>
        </td>
      </tr>

      <!-- 4. Product Showcase Header -->
      <tr>
        <td style="padding: 35px 30px 10px 30px; text-align: center;">
          <h2 style="font-family: Georgia, serif; font-size: 24px; font-weight: 400; color: #1E1B18; margin: 0 0 6px 0;">
            THE HARVEST SELECTION
          </h2>
          <p style="font-size: 14px; color: #665D57; margin: 0;">Hand-picked customer favorites packed in sustainable glass jars</p>
        </td>
      </tr>

      <!-- 5. 3-Column Product Showcase -->
      <tr>
        <td style="padding: 15px 20px 35px 20px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <!-- Col 1: Laal Ras -->
              <td width="33.3%" style="padding: 6px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; padding: 14px 10px; text-align: center; border: 1px solid #EAE4D9;">
                  <a href="https://spicejarx.vercel.app/shop/laal-ras" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/laal-ras.png" alt="Laal Ras" width="140" style="width: 100%; height: 110px; object-fit: contain; margin-bottom: 8px;" />
                    <h3 style="font-size: 14px; color: #1E1B18; margin: 0 0 2px 0; font-weight: 700;">Laal Ras</h3>
                    <p style="font-size: 11px; color: #776B63; margin: 0 0 8px 0;">Kashmiri Chilli</p>
                    <span style="display: block; background-color: #C86D28; color: #FFF; font-size: 11px; font-weight: bold; padding: 6px 0; border-radius: 15px;">Shop ₹349</span>
                  </a>
                </div>
              </td>

              <!-- Col 2: Haldi Gold -->
              <td width="33.3%" style="padding: 6px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; padding: 14px 10px; text-align: center; border: 1px solid #EAE4D9;">
                  <a href="https://spicejarx.vercel.app/shop/haldi-gold" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/haldi-gold.png" alt="Haldi Gold" width="140" style="width: 100%; height: 110px; object-fit: contain; margin-bottom: 8px;" />
                    <h3 style="font-size: 14px; color: #1E1B18; margin: 0 0 2px 0; font-weight: 700;">Haldi Gold</h3>
                    <p style="font-size: 11px; color: #776B63; margin: 0 0 8px 0;">Lakadong Turmeric</p>
                    <span style="display: block; background-color: #C86D28; color: #FFF; font-size: 11px; font-weight: bold; padding: 6px 0; border-radius: 15px;">Shop ₹399</span>
                  </a>
                </div>
              </td>

              <!-- Col 3: Hari Elaichi -->
              <td width="33.3%" style="padding: 6px; vertical-align: top;">
                <div style="background-color: #FAF6F0; border-radius: 14px; padding: 14px 10px; text-align: center; border: 1px solid #EAE4D9;">
                  <a href="https://spicejarx.vercel.app/shop/elaichi" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/elaichi.png" alt="Hari Elaichi" width="140" style="width: 100%; height: 110px; object-fit: contain; margin-bottom: 8px;" />
                    <h3 style="font-size: 14px; color: #1E1B18; margin: 0 0 2px 0; font-weight: 700;">Hari Elaichi</h3>
                    <p style="font-size: 11px; color: #776B63; margin: 0 0 8px 0;">Green Cardamom</p>
                    <span style="display: block; background-color: #C86D28; color: #FFF; font-size: 11px; font-weight: bold; padding: 6px 0; border-radius: 15px;">Shop ₹449</span>
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- 6. Brand Guarantee Bar -->
      <tr>
        <td style="background-color: #2C1810; padding: 25px 20px; text-align: center; color: #FFFFFF;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td width="33%" style="text-align: center; padding: 5px;">
                <div style="font-size: 18px; margin-bottom: 3px;">🌾</div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #E0C9A6; font-weight: 600;">Single Origin</div>
              </td>
              <td width="33%" style="text-align: center; padding: 5px;">
                <div style="font-size: 18px; margin-bottom: 3px;">🪨</div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #E0C9A6; font-weight: 600;">Stone Ground</div>
              </td>
              <td width="33%" style="text-align: center; padding: 5px;">
                <div style="font-size: 18px; margin-bottom: 3px;">🫙</div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #E0C9A6; font-weight: 600;">Glass Jars</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- 7. Footer -->
      <tr>
        <td style="background-color: #1E1B18; padding: 25px; text-align: center; color: #998D85;">
          <p style="font-size: 12px; margin: 0; color: #88776F;">
            © ${new Date().getFullYear()} spicejar Storefront. Hand-sourced from Indian Soil.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

// Master email dispatch helper — Defaulting to Theme 3 (Winner)
export async function sendWelcomeEmail(toEmail, themeChoice = "theme3") {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email dispatch.");
      return { success: false, error: "Missing RESEND_API_KEY" };
    }

    const htmlContent = getTheme3Html();
    const subjectLine = "🌶️ Welcome to spicejar — Here is your 10% discount code! 🌿";

    const { data, error } = await resend.emails.send({
      from: "spicejar <onboarding@resend.dev>",
      to: [toEmail],
      subject: subjectLine,
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
