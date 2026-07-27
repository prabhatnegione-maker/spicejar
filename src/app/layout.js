import "@/styles/globals.css";
import "@/styles/animations.css";
import "@/styles/components.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata = {
  title: "spicejar — Premium Indian Spices & Wellness Herbs",
  description:
    "Hand-sourced, stone-ground Indian spices packed in sustainable glass jars. From Kashmir's saffron fields to Malabar's pepper vines — pure, honest spices delivered to your kitchen.",
  keywords: "Indian spices, premium spices, turmeric, saffron, glass jar spices, organic spices, wellness herbs",
  openGraph: {
    title: "spicejar — Premium Indian Spices",
    description: "From Indian soil to your table. Pure, hand-sourced spices in sustainable glass jars.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main style={{ minHeight: "calc(100vh - var(--header-height))" }}>
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
