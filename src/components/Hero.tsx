"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe,
  Award,
  Factory,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";

// Hero slides with Virtec products and content
const heroSlides = [
  {
    src: "https://virtec.us/images/EM700%20Basic%20HVAC%20Inverter.jpeg",
    alt: "EM700 Series Mini Inverter",
    badge: "Advanced HVAC Solutions",
    title: "EM700 Series Mini Inverter",
    subtitle: "Intelligent Motor Control for Ventilation Systems",
    description:
      "Advanced HVAC inverter technology delivering energy-efficient motor control with precision and reliability for modern ventilation systems.",
    icon: Zap,
    features: [
      "Energy Efficient",
      "Intelligent Control",
      "Precision Performance",
      "HVAC Optimized",
    ],
    ctaText: "View Product",
    ctaLink: "#products",
  },
  {
    src: "https://virtec.us/images/Virtec-Website_-1_edited.png",
    alt: "Electromagnetic Flow Meter",
    badge: "Precision Flow Measurement",
    title: "Electromagnetic Flow Meter - VIR EM",
    subtitle: "High-Precision Measurement (Range 6mm to 1000mm)",
    description:
      "State-of-the-art electromagnetic flow measurement technology delivering exceptional accuracy for water and HVAC applications worldwide.",
    icon: Factory,
    features: [
      "Wide Range Coverage",
      "99.7% Accuracy",
      "Low Maintenance",
      "Global Standards",
    ],
    ctaText: "Explore Flow Meters",
    ctaLink: "#flow-meters",
  },
  {
    src: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390842903fd056ef75182c_IMAGRE%20-1_%20(1).png",
    alt: "Ultrasonic Heat Meter",
    badge: "Thermal Energy Excellence",
    title: "Ultrasonic Heat Meter - VIR UF",
    subtitle: "District Heating & Cooling Solutions (Range 125mm to 800mm)",
    description:
      "Accurate thermal energy measurement for district heating and cooling systems, ensuring optimal energy management and sustainability.",
    icon: Award,
    features: [
      "District Energy Ready",
      "Long-Term Stability",
      "Low Power Consumption",
      "ISO Certified",
    ],
    ctaText: "View Heat Meters",
    ctaLink: "#heat-meters",
  },
  {
    src: "https://virtec.us/images/VIR-832-CLAMPONflowmeter.png",
    alt: "Clamp-On Flow Meter",
    badge: "Non-Invasive Technology",
    title: "VIR-832 Clamp-On Flow Meter",
    subtitle: "Non-Invasive Ultrasonic Measurement Solution",
    description:
      "Revolutionary clamp-on ultrasonic flow measurement technology that requires no pipe modification, ideal for retrofit installations.",
    icon: CheckCircle,
    features: [
      "Non-Invasive Installation",
      "No Pipe Modification",
      "Easy Retrofit",
      "Accurate Measurement",
    ],
    ctaText: "Learn More",
    ctaLink: "#products",
  },
  {
    src: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390ac59cb66255c49ac27d_Virtec%20Ultrasonic%20Water%20Meter_edited%20(1).png",
    alt: "Ultrasonic Electronic Flow Meter",
    badge: "Global Leadership",
    title: "Ultrasonic Electronic Flow Meter - LXC Series",
    subtitle: "Precision Water Flow Measurement Technology",
    description:
      "Premium ultrasonic flow measurement solutions trusted in 40+ countries, delivering exceptional accuracy and reliability for water applications.",
    icon: Globe,
    features: [
      "40+ Countries",
      "Premium Quality",
      "Advanced Technology",
      "Export Ready",
    ],
    ctaText: "Explore Products",
    ctaLink: "#products",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY = 15000;

  // Slide change handler
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);
    emblaApi.on("select", onSelect);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigation
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (idx: number) => emblaApi && emblaApi.scrollTo(idx),
    [emblaApi]
  );

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Embla Carousel */}
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] relative h-full"
              style={{ minWidth: "100%" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/60 to-slate-900/40" />
              </div>

              {/* Content with Text Transitions */}
              <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={index}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="space-y-6"
                        >
                          {/* Badge with transition */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/20 rounded-full text-white font-semibold text-xs uppercase tracking-[0.2em] backdrop-blur border border-primary-yellow/30"
                          >
                            <slide.icon size={18} className="text-primary-yellow" />
                            <span>{slide.badge}</span>
                          </motion.div>

                          {/* Main Heading with staggered animation */}
                          <div className="space-y-3">
                            <motion.h1
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                            >
                              {slide.title}
                            </motion.h1>

                            <motion.h2
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-yellow"
                            >
                              {slide.subtitle}
                            </motion.h2>
                          </div>

                          {/* Description with transition */}
                          <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                          >
                            {slide.description}
                          </motion.p>

                          {/* Features List with staggered animation */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                          >
                            {slide.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.6 + featureIndex * 0.1,
                                }}
                                className="flex items-center gap-2 text-white"
                              >
                                <CheckCircle
                                  size={16}
                                  className="text-primary-yellow"
                                />
                                <span className="text-base font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* CTA Buttons with transition */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                href={slide.ctaLink || "#products"}
                                className="inline-flex items-center justify-center rounded-full bg-primary-yellow px-8 py-3 text-base font-semibold text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95"
                              >
                                {slide.ctaText || "Explore Products"}
                                <ArrowRight size={20} className="ml-2" />
                              </Link>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20 hover:border-white/50"
                              >
                                <Phone size={20} />
                                Talk to an Engineer
                              </Link>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <div className="hidden md:flex absolute inset-y-0 left-4 z-40 items-center">
        <button
          onClick={scrollPrev}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-4 z-40 items-center">
        <button
          onClick={scrollNext}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent ${
              selectedIndex === index
                ? "w-8 bg-primary-yellow"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
