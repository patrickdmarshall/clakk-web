// pages/_app.tsx
import "../styles/global.css"; // Add this import to load Tailwind's styles
import type { AppProps } from "next/app"; // This is for TypeScript users
import { CartProvider } from "../context/CartContext"; // Import the CartProvider
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrap your app with CartProvider to provide cart context
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
