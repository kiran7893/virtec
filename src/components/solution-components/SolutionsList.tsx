"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllSolutions } from "@/lib/solutions";

export default function SolutionsList() {
  const solutions = getAllSolutions();

  return (
    <section className="relative py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-primary-yellow/30 transition-all duration-300 bg-white"
            >
              {/* Solution Content */}
              <Link href={`/solutions/${solution.slug}`} className="block">
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary-yellow transition-colors">
                    {solution.title}
                  </h3>
                  {solution.subtitle && (
                    <h4 className="text-lg lg:text-xl font-medium text-primary-yellow mb-4">
                      {solution.subtitle}
                    </h4>
                  )}
                  <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary-yellow font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
