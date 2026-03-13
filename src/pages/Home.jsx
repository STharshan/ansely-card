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
      <div className="w-full max-w-md px-4 py-10">

        {/* Logo */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-40 h-20 flex items-center justify-center overflow-hidden ">
              <img src={company.logo} alt={`${company.name} Logo`} className="w-full h-full rounded-xl object-cover" />
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">{company.name}</h1>
          <p className="text-gray-400 text-sm mt-2">{company.tagline}</p>
        </header>

        {/* Founder */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold">{founder.name}</h2>
          <p className="text-gray-400 mt-1">{founder.title}</p>
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
          <h3 className="text-lg font-semibold mb-4">Key Services</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-gray-400">{service}</span>
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
          <p className="text-sm text-gray-400 italic mt-7">{rating.text}</p>
        </div>

        {/* Location */}
        <section className="flex justify-center items-center gap-2 text-gray-400 mb-10">
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
        <footer className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}