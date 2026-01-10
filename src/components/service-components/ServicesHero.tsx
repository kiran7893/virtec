"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-display text-4xl lg:text-6xl text-slate-900 leading-tight">
              Our <span className="text-primary-yellow">Services</span>
            </h1>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700">
              <p>
                In the arena of smart energy and water flow measurement solutions, we are one of the top manufacturers, and we pledge to offer the best assistance possible. By being our clients' preferred decarbonization partner, we want to build long-term value for all of our stakeholders—customers, workers, shareholders, and partners. We always look ahead in search of a better energy future that improves our clientele's efficiency while generating long-term value for the communities they serve. We do this via our leadership, experience, and enthusiasm for partnerships.
              </p>
              <p>
                Our expertise enables us to completely grasp and meet the needs of various applications, markets, languages, legislation, standards, procedures, and requirements.
              </p>
              <p>
                We provide a range of service alternatives to satisfy our clients' specific service demands. We offer low-cost and high-quality services.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-6xl lg:text-8xl font-display text-primary-yellow/30">
                  V
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Image Placeholder
                </p>
                <p className="text-xs text-slate-400">
                  Add your services image here
                </p>
              </div>
            </div>
            {/* Uncomment and update path when you have the image */}
            {/* <Image
              src="/images/services-hero.jpg"
              alt="Virtec Services"
              fill
              className="object-cover"
              priority
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
