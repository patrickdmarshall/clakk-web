// next.config.mjs

const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for development
  env: {
    // Handling Google Private Key with newline replacement to ensure it works correctly in the environment
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL, // Make sure this is also in your .env file
  },
  // Additional configuration can go here
};

export default nextConfig;
