import { Helmet } from 'react-helmet-async'

export default function Seo({
  title = 'Prem Associates - Real Estate Consultant | Plots Sale in Sector 85 Faridabad',
  description = 'Buy and sell residential plots, commercial properties and homes with Prem Associates, trusted real estate consultant in Sector 85 Faridabad.',
  canonical = 'https://premassociates.in/',
  ogImage = 'https://premassociates.in/og-image.jpg',
  schema = null,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Prem Associates" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
