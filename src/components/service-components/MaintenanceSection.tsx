"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function MaintenanceSection() {
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
              <Settings className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
            </div>
            <div>
              <h2 className="font-display text-3xl lg:text-4xl text-slate-900 font-semibold mb-4">
                Maintenance Contracts & Supply of Spare Parts
              </h2>
            </div>
          </div>
          <div className="pl-0 lg:pl-20">
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              With the aid of our maintenance services, we assist you in a successful transition to your new product or solution. Our team of experts is there to help in the event of mechanical issues or breakdowns. We are also there to help you get the spare parts that are not easily available in case you need any.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
