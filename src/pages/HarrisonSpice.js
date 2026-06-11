export const digitalCardDataHarrisonSpice = {
  company: {
    name: "Harrison's Spice",
    tagline: "Refined Indian cuisine with a modern twist in the heart of Ratby",
    logo: "/logo.png",
  },
  founder: {
    name: "Harrison's Spice",
    title: "Modern Indian dining with warm hospitality",
  },
  contacts: [
    { type: "Call", href: "tel:01162395644", icon: "Phone", styleClass: "bg-[#C5A265] hover:bg-[#D5A765]" },
    { type: "WhatsApp", href: "https://wa.me/441162395644", icon: "MessageCircle", styleClass: "bg-[#25D366] hover:opacity-90" },
    { type: "Website", href: "https://harrisons-spice.co.uk/", icon: "Globe", styleClass: "bg-[#C5A265] hover:bg-[#C5A265]" },
    { type: "Instagram", href: "https://www.instagram.com/harrisonspice.official?igsh=dTA0eTBmdmZ2bDlu&utm_source=qr", icon: "Instagram", styleClass: "bg-[#E1306C] hover:opacity-90" },
  ],
  about: "We deliver exceptional food, service, and ambiance for an unforgettable dining experience.",
  services: [
    "Dine-In Experience",
    "Takeaway & Delivery",
    "Modern Indian Cuisine",
    "Warm Hospitality",
  ],
  rating: {
    value: "5.0",
    text: "Exceptional food, service, and ambiance.",
  },
  location: "Ratby, Leicester",
  socialLinks: [
    { icon: "Music2", href: "https://www.tiktok.com/@harrisonspiceofficial?_r=1&_t=ZN-93Ql2Nmc3L4" },
  ],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardDataHarrisonSpice;

  const phone = contacts.find((c) => c.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((c) => c.type === "Website")?.href || "";

  const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${phone}
ADR;TYPE=WORK:;;${location};;;;
URL:${website}
END:VCARD
`.trim();

  const blob = new Blob([vcfData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${company.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
