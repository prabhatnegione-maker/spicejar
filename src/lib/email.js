import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_dummy_build_key";

export const resend = new Resend(resendApiKey);

// ==========================================
// THEME 1: Modern Multiproduct Studio Lineup
// ==========================================
export function getTheme1Html() {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[THEME 1] Spicejar Welcome</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #FAF6F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2C1810; -webkit-font-smoothing: antialiased;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #EAE4D9; box-shadow: 0 16px 40px rgba(44, 24, 16, 0.08);">
      
      <!-- 1. Header Bar -->
      <tr>
        <td style="padding: 24px 30px; text-align: center; background-color: #FAF6F0; border-bottom: 1px solid #EAE4D9;">
          <a href="https://spicejarx.vercel.app" style="text-decoration: none; display: inline-block;">
            <img src="https://spicejarx.vercel.app/images/logo.png" alt="spicejar" width="160" style="height: auto; max-height: 50px; display: block; margin: 0 auto; object-fit: contain;" />
          </a>
        </td>
      </tr>

      <!-- 2. Hero Visual Section (Multi-Product Studio Lineup) -->
      <tr>
        <td style="padding: 0;">
          <a href="https://spicejarx.vercel.app/shop" style="text-decoration: none; display: block;">
            <img src="https://spicejarx.vercel.app/images/products/collection-lineup.png" alt="Spicejar Multi-Product Lineup" width="600" style="width: 100%; height: auto; max-height: 380px; object-fit: cover; display: block;" />
          </a>
        </td>
      </tr>

      <!-- 3. High-Impact Offer Section -->
      <tr>
        <td style="padding: 40px 30px; text-align: center; background: linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%);">
          <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.25em; color: #C86D28; margin: 0 0 10px 0;">
            ✦ THEME 1: STUDIO LINEUP COLLECTION ✦
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
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

// ==========================================
// THEME 2: Dark Reserve Signature Luxe
// ==========================================
export function getTheme2Html() {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[THEME 2] Spicejar Dark Reserve</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #0E0704; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5EBE6; -webkit-font-smoothing: antialiased;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #1A0C07; border-radius: 20px; overflow: hidden; border: 1px solid #3A1F13; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);">
      
      <!-- 1. Header Bar -->
      <tr>
        <td style="padding: 28px 30px; text-align: center; background-color: #120805; border-bottom: 1px solid #2C1810;">
          <a href="https://spicejarx.vercel.app" style="text-decoration: none; display: inline-block;">
            <span style="font-family: Georgia, serif; font-size: 28px; color: #F5A623; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase;">
              SPICEJAR RESERVE
            </span>
          </a>
        </td>
      </tr>

      <!-- 2. Hero Visual Section -->
      <tr>
        <td style="padding: 0; position: relative;">
          <a href="https://spicejarx.vercel.app/shop" style="text-decoration: none; display: block;">
            <img src="https://spicejarx.vercel.app/images/products/laal-ras-hero.png" alt="Spicejar Reserve Collection" width="600" style="width: 100%; height: auto; max-height: 360px; object-fit: cover; display: block;" />
          </a>
        </td>
      </tr>

      <!-- 3. Luxe Offer Section -->
      <tr>
        <td style="padding: 45px 35px; text-align: center; background-color: #1A0C07;">
          <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.3em; color: #F5A623; margin: 0 0 12px 0;">
            THE ROYALTIES OF INDIAN SOIL
          </p>

          <h1 style="font-family: Georgia, serif; font-size: 42px; line-height: 1.1; color: #FFFFFF; margin: 0 0 16px 0; font-weight: 300;">
            PRIVILEGE OFFER · 10% OFF
          </h1>

          <p style="font-size: 15px; color: #C4B0A5; margin: 0 auto 30px auto; max-width: 440px; line-height: 1.6;">
            Welcome to the inner circle. Experience India's rarest single-origin spices, cold-stone ground and preserved in dark UV glass.
          </p>

          <!-- Metallic Gold Border Voucher Box -->
          <div style="display: inline-block; background-color: #24110A; border: 2px solid #F5A623; border-radius: 14px; padding: 18px 40px; margin-bottom: 30px; box-shadow: 0 0 25px rgba(245, 166, 35, 0.15);">
            <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.25em; color: #E0C9A6; margin: 0 0 6px 0; font-weight: 700;">
              VIP MEMBER REEEM CODE
            </p>
            <span style="font-family: 'Courier New', monospace; font-size: 28px; font-weight: 900; color: #F5A623; letter-spacing: 0.2em;">
              SPICE10
            </span>
          </div>

          <div>
            <a href="https://spicejarx.vercel.app/shop" style="display: inline-block; background: linear-gradient(135deg, #F5A623 0%, #C86D28 100%); color: #120805; text-decoration: none; padding: 18px 48px; border-radius: 35px; font-weight: 800; font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase; box-shadow: 0 10px 30px rgba(245, 166, 35, 0.3);">
              REDEEM VOUCHER NOW →
            </a>
          </div>
        </td>
      </tr>

      <!-- 4. Spotlight Products (Full Width Cards) -->
      <tr>
        <td style="padding: 20px 30px 40px 30px; background-color: #120805;">
          <h2 style="font-family: Georgia, serif; font-size: 24px; color: #F5A623; text-align: center; margin: 0 0 25px 0; font-weight: 400; letter-spacing: 0.05em;">
            FEATURED RESERVE HARVESTS
          </h2>

          <!-- Spotlight 1: Kesar Dhaga -->
          <div style="background-color: #1A0C07; border-radius: 16px; border: 1px solid #3A1F13; padding: 20px; margin-bottom: 20px; display: table; width: 100%;">
            <a href="https://spicejarx.vercel.app/shop/kesar-dhaga" style="text-decoration: none; display: block;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="35%" style="vertical-align: middle;">
                    <img src="https://spicejarx.vercel.app/images/products/kesar-dhaga.png" alt="Kesar Dhaga" width="120" style="width: 100%; height: 110px; object-fit: contain;" />
                  </td>
                  <td width="65%" style="padding-left: 20px; vertical-align: middle;">
                    <span style="color: #F5A623; font-size: 10px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase;">PURE KASHMIR SAFFRON</span>
                    <h3 style="font-size: 18px; color: #FFFFFF; margin: 4px 0;">Kesar Dhaga</h3>
                    <p style="font-size: 13px; color: #A8958B; margin: 0 0 10px 0;">Hand-picked Mongra Threads</p>
                    <span style="color: #F5A623; font-weight: bold; font-size: 16px;">₹999</span>
                  </td>
                </tr>
              </table>
            </a>
          </div>

          <!-- Spotlight 2: Haldi Gold -->
          <div style="background-color: #1A0C07; border-radius: 16px; border: 1px solid #3A1F13; padding: 20px; display: table; width: 100%;">
            <a href="https://spicejarx.vercel.app/shop/haldi-gold" style="text-decoration: none; display: block;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="35%" style="vertical-align: middle;">
                    <img src="https://spicejarx.vercel.app/images/products/haldi-gold.png" alt="Haldi Gold" width="120" style="width: 100%; height: 110px; object-fit: contain;" />
                  </td>
                  <td width="65%" style="padding-left: 20px; vertical-align: middle;">
                    <span style="color: #D97706; font-size: 10px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase;">9% HIGH CURCUMIN</span>
                    <h3 style="font-size: 18px; color: #FFFFFF; margin: 4px 0;">Haldi Gold</h3>
                    <p style="font-size: 13px; color: #A8958B; margin: 0 0 10px 0;">Lakadong Turmeric Powder</p>
                    <span style="color: #F5A623; font-weight: bold; font-size: 16px;">₹399</span>
                  </td>
                </tr>
              </table>
            </a>
          </div>
        </td>
      </tr>

      <!-- 5. Footer -->
      <tr>
        <td style="background-color: #0E0704; padding: 30px; text-align: center; color: #7A675F; border-top: 1px solid #2C1810;">
          <p style="font-size: 12px; margin: 0; color: #88776F;">
            © ${new Date().getFullYear()} SPICEJAR RESERVE STOREFRONT. ALL RIGHTS RESERVED.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

// ==========================================
// THEME 3: Vibrant Harvest Split Editorial
// ==========================================
export function getTheme3Html() {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[THEME 3] Spicejar Vibrant Harvest</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F7F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E1B18; -webkit-font-smoothing: antialiased;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #E6E2D8; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);">
      
      <!-- 1. Header Bar -->
      <tr>
        <td style="padding: 20px 30px; text-align: center; background-color: #FFFFFF;">
          <a href="https://spicejarx.vercel.app" style="text-decoration: none; display: inline-block;">
            <img src="https://spicejarx.vercel.app/images/logo.png" alt="spicejar" width="150" style="height: auto; max-height: 46px; display: block; margin: 0 auto;" />
          </a>
        </td>
      </tr>

      <!-- 2. Vibrant Color Block Hero Banner -->
      <tr>
        <td style="background: linear-gradient(135deg, #C86D28 0%, #E65100 100%); padding: 45px 30px; text-align: center; color: #FFFFFF;">
          <span style="display: inline-block; background-color: #2C1810; color: #F5A623; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 6px 16px; border-radius: 20px; letter-spacing: 0.15em; margin-bottom: 16px;">
            SEASONAL HARVEST SALE
          </span>

          <h1 style="font-family: Impact, Arial Black, sans-serif; font-size: 52px; line-height: 0.95; margin: 0 0 14px 0; text-transform: uppercase; letter-spacing: 0.02em;">
            10% OFF SITEWIDE
          </h1>

          <p style="font-size: 16px; max-width: 420px; margin: 0 auto 26px auto; opacity: 0.95; line-height: 1.5;">
            Upgrade your kitchen pantry with authentic stone-ground spices packed in eco-friendly glass jars.
          </p>

          <!-- White Voucher Card -->
          <div style="display: inline-block; background-color: #FFFFFF; border-radius: 14px; padding: 14px 32px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);">
            <span style="font-size: 11px; text-transform: uppercase; color: #88776F; display: block; font-weight: 700; margin-bottom: 2px;">DISCOUNT CODE</span>
            <span style="font-family: monospace; font-size: 24px; font-weight: 900; color: #C86D28; letter-spacing: 0.1em;">SPICE10</span>
          </div>
        </td>
      </tr>

      <!-- 3. Product Showcase Header -->
      <tr>
        <td style="padding: 35px 30px 10px 30px; text-align: center;">
          <h2 style="font-family: -apple-system, sans-serif; font-size: 22px; font-weight: 800; color: #1E1B18; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.05em;">
            POPULAR SPICE SELECTIONS
          </h2>
          <p style="font-size: 14px; color: #665D57; margin: 0;">Click any jar to shop directly on website</p>
        </td>
      </tr>

      <!-- 4. 3-Column Product Showcase -->
      <tr>
        <td style="padding: 15px 20px 35px 20px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <!-- Col 1: Laal Ras -->
              <td width="33.3%" style="padding: 6px; vertical-align: top;">
                <div style="background-color: #F7F5F0; border-radius: 12px; padding: 12px; text-align: center; border: 1px solid #E6E2D8;">
                  <a href="https://spicejarx.vercel.app/shop/laal-ras" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/laal-ras.png" alt="Laal Ras" width="140" style="width: 100%; height: 110px; object-fit: contain; margin-bottom: 8px;" />
                    <h3 style="font-size: 13px; color: #1E1B18; margin: 0 0 2px 0; font-weight: 700;">Laal Ras</h3>
                    <p style="font-size: 11px; color: #776B63; margin: 0 0 8px 0;">Red Chilli</p>
                    <span style="display: block; background-color: #C86D28; color: #FFF; font-size: 11px; font-weight: bold; padding: 5px 0; border-radius: 15px;">₹349</span>
                  </a>
                </div>
              </td>

              <!-- Col 2: Haldi Gold -->
              <td width="33.3%" style="padding: 6px; vertical-align: top;">
                <div style="background-color: #F7F5F0; border-radius: 12px; padding: 12px; text-align: center; border: 1px solid #E6E2D8;">
                  <a href="https://spicejarx.vercel.app/shop/haldi-gold" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/haldi-gold.png" alt="Haldi Gold" width="140" style="width: 100%; height: 110px; object-fit: contain; margin-bottom: 8px;" />
                    <h3 style="font-size: 13px; color: #1E1B18; margin: 0 0 2px 0; font-weight: 700;">Haldi Gold</h3>
                    <p style="font-size: 11px; color: #776B63; margin: 0 0 8px 0;">Turmeric</p>
                    <span style="display: block; background-color: #C86D28; color: #FFF; font-size: 11px; font-weight: bold; padding: 5px 0; border-radius: 15px;">₹399</span>
                  </a>
                </div>
              </td>

              <!-- Col 3: Hari Elaichi -->
              <td width="33.3%" style="padding: 6px; vertical-align: top;">
                <div style="background-color: #F7F5F0; border-radius: 12px; padding: 12px; text-align: center; border: 1px solid #E6E2D8;">
                  <a href="https://spicejarx.vercel.app/shop/elaichi" style="text-decoration: none; display: block;">
                    <img src="https://spicejarx.vercel.app/images/products/elaichi.png" alt="Hari Elaichi" width="140" style="width: 100%; height: 110px; object-fit: contain; margin-bottom: 8px;" />
                    <h3 style="font-size: 13px; color: #1E1B18; margin: 0 0 2px 0; font-weight: 700;">Hari Elaichi</h3>
                    <p style="font-size: 11px; color: #776B63; margin: 0 0 8px 0;">Cardamom</p>
                    <span style="display: block; background-color: #C86D28; color: #FFF; font-size: 11px; font-weight: bold; padding: 5px 0; border-radius: 15px;">₹449</span>
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- 5. Big CTA Button -->
      <tr>
        <td style="padding: 0 30px 40px 30px; text-align: center;">
          <a href="https://spicejarx.vercel.app/shop" style="display: inline-block; background-color: #2C1810; color: #F5A623; text-decoration: none; padding: 16px 42px; border-radius: 30px; font-weight: bold; font-size: 15px; letter-spacing: 0.05em; text-transform: uppercase;">
            SHOP ALL PRODUCTS NOW →
          </a>
        </td>
      </tr>

      <!-- 6. Footer -->
      <tr>
        <td style="background-color: #1E1B18; padding: 25px; text-align: center; color: #998D85;">
          <p style="font-size: 12px; margin: 0;">
            © ${new Date().getFullYear()} spicejar Storefront. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

// Master email dispatch helper
export async function sendWelcomeEmail(toEmail, themeChoice = "theme1") {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email dispatch.");
      return { success: false, error: "Missing RESEND_API_KEY" };
    }

    let htmlContent;
    let subjectLine;

    if (themeChoice === "theme2") {
      htmlContent = getTheme2Html();
      subjectLine = "👑 [THEME 2] Spicejar Welcome — Dark Reserve Signature Edition";
    } else if (themeChoice === "theme3") {
      htmlContent = getTheme3Html();
      subjectLine = "🌶️ [THEME 3] Spicejar Welcome — Vibrant Harvest Editorial";
    } else {
      htmlContent = getTheme1Html();
      subjectLine = "✨ [THEME 1] Spicejar Welcome — Studio Lineup Collection";
    }

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
