"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function QualityControlSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-slate-50">
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
              <Award className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
            </div>
            <div>
              <h2 className="font-display text-3xl lg:text-4xl text-slate-900 font-semibold mb-4">
                Quality Control
              </h2>
            </div>
          </div>
          <div className="pl-0 lg:pl-20">
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              To ensure the quality of our services, we closely adhere to well-defined development protocols as we move forward with our product development. We will appoint a quality-control manager to ensure that all developing procedures follow international standards, whether your project is basic hardware/software design or complex system development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
