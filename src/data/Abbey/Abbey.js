export const digitalCardData = {
  company: {
    name: "Abbey Tyres",
    tagline: "Tyres, MOT, brakes, servicing, and workshop support for everyday vehicle care.",
    logo: "/Abbeyim/abbey.webp",
  },
  founder: {
    name: "Sahera",
    title: "Tyres, MOT, and Vehicle Servicing Specialists",
  },
  contacts: [
    { type: "Call", href: "tel:07737985510", icon: "Phone", styleClass: "bg-primary" },
    { type: "Website", href: "https://abbey-tyres.co.uk/", icon: "Globe", styleClass: "bg-primary" },
  ],
  about:
    "Abbey Tyres supports local drivers with servicing, tyres, MOT work, braking, clutches, exhausts, and workshop repairs from its Leicester site.",
  services: [
    { label: "Full Service" },
    { label: "Half Service" },
    { label: "Brakes" },
    { label: "Brake Pads" },
    { label: "Clutches" },
    { label: "Exhausts" },
    { label: "MOT" },
    { label: "Bearing Work" },
  ],
  rating: {
    value: "5.0",
    text: "Tap to view Abbey Tyres on Google.",
    href: "https://share.google/gpLjWNGbiknW0H69T",
  location: "146 Prestwold Rd, Leicester LE5 0EX, United Kingdom",
  locationHref: "https://share.google/gpLjWNGbiknW0H69T",
  socialLinks: [],
};

export function downloadVCF() {
  const { founder, company, contacts, location } = digitalCardData;

  const phone = contacts.find((contact) => contact.type === "Call")?.href.replace("tel:", "") || "";
  const website = contacts.find((contact) => contact.type === "Website")?.href || "";

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

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${company.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
