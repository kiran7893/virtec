"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type NavChild = {
  label: string;
  href: string;
  description: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "#products",
    children: [
      {
        label: "Flow Meters",
        href: "#flow-meters",
        description: "Ultrasonic & electromagnetic precision for water and HVAC.",
      },
      {
        label: "Heat Meters",
        href: "#heat-meters",
        description: "Thermal energy measurement for district systems.",
      },
      {
        label: "Variable Speed Drives",
        href: "#vsd",
        description: "Intelligent motor control for energy efficiency.",
      },
      {
        label: "IAQ Sensors",
        href: "#iaq",
        description: "Temperature, humidity, CO₂ and air quality insights.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      {
        label: "District Energy",
        href: "#district-energy",
        description: "Accurate metering for heating and cooling networks.",
      },
      {
        label: "HVAC Optimization",
        href: "#hvac",
        description: "Smart balancing for buildings and campuses.",
      },
      {
        label: "Water Utilities",
        href: "#water",
        description: "Loss reduction and flow transparency at scale.",
      },
      {
        label: "Industrial IoT",
        href: "#iot",
        description: "Connect meters with analytics and control platforms.",
      },
    ],
  },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const chevron = (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="h-4 w-4"
    fill="none"
  >
    <path
      d="M5 8l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-7xl rounded-full bg-white px-6 py-4 transition-all duration-300 sm:px-8 sm:py-5 lg:px-10 border border-slate-200 ${
        scrolled 
          ? 'shadow-[0_8px_40px_rgba(0,0,0,0.15)]' 
          : 'shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
      }`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-xl text-slate-900 sm:text-2xl"
          >
            <Image
              src="/virtec-logo.png"
              alt="Virtec Logo"
              width={180}
              height={180}
              className="h-14 w-auto sm:h-14"
              priority
            />
            
          </Link>

          <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-base font-medium text-slate-700 transition hover:text-slate-900"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span className="text-slate-600 transition group-hover:text-slate-800">
                      {chevron}
                    </span>
                  </button>
                  <div className="pointer-events-none absolute left-0 top-full mt-5 w-[420px] rounded-2xl border border-slate-200 bg-white/95 p-5 opacity-0 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group/item rounded-xl border border-transparent p-3 transition hover:border-slate-200 hover:bg-slate-50"
                        >
                          <div className="text-sm text-slate-900 group-hover/item:text-slate-950">
                            {child.label}
                          </div>
                          <div className="mt-1 text-xs leading-relaxed text-slate-600">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-slate-700 transition hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#contact"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-base text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
            >
              Request demo
            </Link>
            <Link
              href="#quote"
              className="rounded-full bg-primary-yellow px-6 py-2.5 text-base text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95"
            >
              Get a quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2.5 text-slate-700 transition hover:border-slate-400 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mx-auto mt-4 max-w-7xl rounded-full border border-slate-200 bg-white px-6 pb-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base text-slate-800"
                    onClick={() =>
                      setExpanded((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    aria-expanded={expanded === item.label}
                  >
                    {item.label}
                    <span
                      className={`transition ${expanded === item.label ? "rotate-180" : ""}`}
                    >
                      {chevron}
                    </span>
                  </button>
                  {expanded === item.label ? (
                    <div className="space-y-3 px-4 pb-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                        >
                          <div className="text-sm text-slate-900">
                            {child.label}
                          </div>
                          <div className="mt-1 text-xs text-slate-600">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                className="text-base text-slate-700"
              >
                {item.label}
              </Link>
            ),
            )}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="#contact"
                className="rounded-full border border-slate-300 px-4 py-2.5 text-center text-base text-slate-700"
              >
                Request demo
              </Link>
              <Link
                href="#quote"
                className="rounded-full bg-primary-yellow px-4 py-2.5 text-center text-base text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)]"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
