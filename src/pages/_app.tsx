// pages/_app.js (or _app.tsx if using TypeScript)

import "../styles/global.css"; // Add this import to load Tailwind's styles
import type { AppProps } from "next/app"; // This is for TypeScript users
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
