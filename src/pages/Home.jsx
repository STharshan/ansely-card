import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Download,
  Star,
} from "lucide-react";

import { digitalCardData } from "../global";
import { downloadVCF } from "../pages/downloadVCF.js";
import { lazy, Suspense } from "react";

// Lazy load the heavy WebGL component
const FloatingLines = lazy(() => import("../components/FloatingLines.jsx"));

// Simple loading placeholder for WebGL
const WebGLPlaceholder = () => (
  <div className="w-full h-full bg-linear-to-b from-[#001F7F] to-black" />
);


const iconMap = { Phone, MessageCircle, Mail, Globe, Instagram, Facebook, Linkedin };

export default function DigitalCard() {
  const {
    company,
    founder,
    contacts,
    about,
    services,
    rating,
    location,
    socialLinks,
  } = digitalCardData;

  return (
    <main
      className="min-h-screen text-white flex justify-center"
      style={{ backgroundColor: "var(--bg-main)" }}
    >


      <div className="w-full ">
        {/* Full-width Animated Header */}
        <div className="relative w-full h-44 sm:h-64 overflow-hidden">
          {/* FloatingLines WebGL Background */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<WebGLPlaceholder />}>
              <FloatingLines
                enabledWaves={["top", "middle", "bottom"]}
                lineCount={[4, 8, 12]}
                lineDistance={[8, 6, 4]}
                bendRadius={5.0}
                bendStrength={4}
                interactive={true}
                parallax={true}
                linesGradient={["#001F7F", "#0045EF", "#0066FF", "#3399FF", "#66B3FF"]}
              />
            </Suspense>
          </div>

          {/* Headline Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4 text-center">
            <div>
              <h1
                className="text-4xl md:text-6xl font-bold tracking-[0.25em] text-white uppercase drop-shadow-lg"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              >
                {company.name}
              </h1>
              <div className="text-center mt-5">
                <p className="text-white text-[24px] md:text-[28px] tracking-tight leading-snug">
                  {company.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto max-w-md px-4 py-5">

          {/* Founder */}
          <section className="text-center mb-10">
            <h2 className="text-2xl font-semibold">{founder.name}</h2>
            <p className="text-gray-200 mt-1">{founder.title}</p>
          </section>

          {/* Contact Buttons */}
          <section className="mb-10">
            <div className="grid grid-cols-2 gap-3">
              {contacts.map((contact) => {
                const IconComponent = iconMap[contact.icon];
                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === "Website" || contact.type === "WhatsApp" ? "_blank" : "_self"}
                    className={`flex items-center justify-center gap-2 h-14 rounded-lg transition ${contact.styleClass}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {contact.type}
                  </a>
                );
              })}
            </div>
          </section>

          {/* About Card */}
          <div className="rounded-xl p-6 text-center mb-10 border bg-card">
            <p className="text-gray-300 leading-relaxed">{about}</p>
          </div>

          {/* Services */}
          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">Key Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex text-center justify-center items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-white">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Rating */}
          <div className="rounded-xl p-6 text-center mb-10 border bg-card">
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-star" />
              ))}
            </div>

            <p className="font-semibold mt-7">{rating.value} Google Rating</p>
            <p className="text-sm text-white italic mt-7">{rating.text}</p>
          </div>

          {/* Location */}
          <section className="flex justify-center items-center gap-2 text-white mb-10">
            <MapPin className="w-5 h-5" style={{ color: "var(--primary)" }} />
            {location}
          </section>

          {/* Social */}
          <section className="flex justify-center gap-4 mb-10">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a key={social.icon} href={social.href} className="h-12 w-12 rounded-full flex items-center justify-center transition bg-secondary">
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </section>

          {/* Save Contact */}
          <section className="mb-10">
            <button
              onClick={downloadVCF}
              className="w-full h-14 flex items-center justify-center gap-2 rounded-lg font-semibold bg-primary"
            >
              <Download className="w-5 h-5" />
              Save Contact
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-200">
            <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}