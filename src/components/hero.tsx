"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pb-28 pt-20 bg-gradient-to-b from-background via-70% via-secondary/20">
      <div className="container flex flex-col items-center gap-8 sm:gap-10">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 5, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex cursor-pointer items-center gap-1 rounded-full px-4 font-medium py-1 bg-secondary/10 text-secondary hover:bg-secondary/20"
        />
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-center font-heading text-4xl sm:text-5xl tracking-tight lg:text-6xl text-balance font-bold"
        >
          Welcome to
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-br to-primary from-secondary">
            &nbsp;Clakk
          </span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl"
        >
          Modern gaming requires modern options. Discover the rebrand today.
        </motion.p>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex"
        />
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
        <Image
          alt="Wallpaper"
          src="/images/d2r.png"
          width={1000}
          height={800}
          className="rounded-2xl shadow-lg border"
        />
      </div>
    </section>
  );
}
