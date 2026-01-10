"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Award, 
  Leaf, 
  ArrowRight,
  Linkedin 
} from "lucide-react";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const products = [
  { name: "Flow Meters", href: "#flow-meters" },
  { name: "Heat Meters", href: "#heat-meters" },
  { name: "Variable Speed Drives", href: "#vsd" },
  { name: "IAQ Sensors", href: "#iaq" },
];

const solutions = [
  { name: "District Energy", href: "#district-energy" },
  { name: "HVAC Optimization", href: "#hvac" },
  { name: "Water Utilities", href: "#water" },
  { name: "Industrial IoT", href: "#iot" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={logoError ? "/virtec-logo.png" : "/virtec-logoYellow.png"}
                  alt="Virtec Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  onError={() => setLogoError(true)}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">VIRTEC</h3>
                <p className="text-primary-yellow text-sm">Instruments Inc.</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
              Global leader in Heat and Flow Management Solutions for HVAC and Water 
              applications. Advanced Ultrasonic and Electromagnetic measurement technologies 
              delivering exceptional accuracy and reliability.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/virtec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-yellow transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary-yellow" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-yellow" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-yellow" />
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-yellow" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary-yellow" />
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-yellow" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary-yellow" />
            Contact Us
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-yellow mt-1 flex-shrink-0" />
              <div className="text-slate-300 text-sm leading-relaxed">
                2005 E 2700 S, STE 200
                <br />
                Salt Lake City, Utah 84109
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary-yellow flex-shrink-0" />
              <a
                href="tel:+13045194567"
                className="text-slate-300 hover:text-primary-yellow transition-colors text-sm"
              >
                +1 (304) 519-4567
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary-yellow flex-shrink-0" />
              <a
                href="mailto:sales@virtec.us"
                className="text-slate-300 hover:text-primary-yellow transition-colors text-sm"
              >
                sales@virtec.us
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-yellow px-6 py-3 text-base text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95 font-medium"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-primary-yellow/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-slate-300 text-sm">
              © {currentYear} Virtec Instruments Inc. All rights reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-xs leading-relaxed text-slate-400 max-w-4xl mx-auto">
            <p className="mb-2">
              <span className="text-slate-300">Disclaimer:</span>
            </p>
            <p>
              Logos and trademarks used are accredited to the OEM and belongs to the OEM. Virtec will accept no responsibility for possible errors in catalogues, brochures, and other printed material. Virtec reserves the right to alter its products without notice. This also applies to products already on order provided that such alteration can be made without subsequential changes being necessary for specifications already agreed. All trademarks in this material are property of the respective companies. Virtec and all Virtec logo types are trademarks of Virtec Instruments Inc. USA. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}