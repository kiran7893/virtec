"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function SalesCoverageSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-yellow/10 flex items-center justify-center">
              <Users className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
            </div>
            <div>
              <h2 className="font-display text-3xl lg:text-4xl text-slate-900 font-semibold mb-4">
                Sales Coverage
              </h2>
            </div>
          </div>
          <div className="pl-0 lg:pl-20">
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              We continue to provide thorough sales coverage by employing educated, highly skilled & qualified application engineers and manufacturer representatives who are familiar with the particular demands and requirements of the market. Virtec is a service-oriented business with an unmatched dedication to client happiness. That matters the most to us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
