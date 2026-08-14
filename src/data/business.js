export const businessInfo = {
  name: "Clickaboo Baby Studio",
  phone: "+91 86800 01050",
  whatsapp: "918680001050", // without plus, for API link
  address: "4, RKV Nagar Road, Thirupathiyar Nagar, Ramanathapuram, Coimbatore – 641045",
  instagram: "@clickaboo_baby_studio",
  instagramUrl: "https://instagram.com/clickaboo_baby_studio",
  rating: "5.0",
  reviewCount: "72",
  hours: "10:00 AM - 7:00 PM (Contact to confirm)",
  mapUrl: "https://maps.google.com/?q=Clickaboo+Baby+Studio+Coimbatore", // Can update with exact URL
  email: "hello@clickaboostudio.com",
};

export const getWhatsAppUrl = (message = "Hi Clickaboo Baby Studio! I'm interested in a photography session. Could you please share your packages and availability?") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodedMessage}`;
};
