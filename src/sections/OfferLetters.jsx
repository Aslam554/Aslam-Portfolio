import React from "react";
import { motion } from "framer-motion";

const offerImages = [
  "/achievements/IMG-20250416-WA0009.jpg",
  "/achievements/IMG-20250416-WA0001.jpg",
  "/achievements/IMG-20250416-WA0002.jpg",
  "/achievements/IMG-20250416-WA0003.jpg",
  "/achievements/IMG-20250416-WA0004.jpg",
  "/achievements/IMG-20250416-WA0005.jpg",
  "/achievements/IMG-20250416-WA0006.jpg",
  "/achievements/IMG-20250416-WA0007.jpg",
  "/achievements/IMG-20250416-WA0008.jpg",
];

const OfferLetters = () => {
  const shuffled = [...offerImages].sort(() => 0.5 - Math.random());

  return (
    <section className="pt-20">
      <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text mb-6">
        Offer Letters 📄
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shuffled.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400 bg-white/5 p-2 backdrop-blur shadow-md"
          >
            <img
              src={src}
              alt={`Offer ${i + 1}`}
              className="rounded-lg object-contain w-full h-96"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OfferLetters;
