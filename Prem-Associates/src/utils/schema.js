// ─── Local Business / Real Estate Agent Schema ───────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Prem Associates",
  "image": "https://premassociates.in/og-image.jpg",
  "telephone": "+91-9990713111",
  "email": "info@premassociates.in",
  "url": "https://premassociates.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st Floor, Green Avenue, Shop No-5, S3",
    "addressLocality": "Sector 85, Faridabad",
    "addressRegion": "Haryana",
    "postalCode": "121007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.3419",
    "longitude": "77.3152"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "10:00",
    "closes": "22:00"
  }],
  "priceRange": "₹₹₹",
  "description": "Prem Associates is a trusted real estate consultant in Sector 85 Faridabad offering plots sale, residential and commercial property services.",
  "areaServed": "Faridabad, Haryana",
  "serviceType": ["Plots Sale", "Residential Property", "Commercial Property", "Property Consultation"]
}

// ─── Properties Page Schema ───────────────────────────────────────────────────
export const propertiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Properties for Sale in Faridabad",
  "description": "Browse premium residential plots, villas and commercial properties available through Prem Associates.",
  "url": "https://premassociates.in/properties"
}

// ─── Services Page Schema ─────────────────────────────────────────────────────
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Real Estate Services in Faridabad",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Prem Associates"
  },
  "description": "Explore our property buying, selling, plots sale and investment consultation services in Sector 85 Faridabad.",
  "areaServed": "Faridabad, Haryana",
  "serviceType": ["Property Buying", "Property Selling", "Plots Sale", "Commercial Property", "Legal Support", "Investment Advice"]
}

// ─── Contact Page Schema ──────────────────────────────────────────────────────
export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Prem Associates",
  "url": "https://premassociates.in/contact",
  "description": "Get in touch with Prem Associates for property consultation, plots sale and real estate services in Sector 85 Faridabad."
}
