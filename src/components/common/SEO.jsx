// const SITE_URL = "https://syncxel.vercel.app";

// export default function SEO({
//   title,
//   description,
//   path = "/",
//   image,
//   type = "website",
// }) {
//   const canonicalUrl = `${SITE_URL}${path}`;

//   return (
//     <>
//       <title>{title}</title>

//       <meta name="description" content={description} />
//       <meta name="robots" content="index, follow" />

//       <link rel="canonical" href={canonicalUrl} />

//       {/* Open Graph */}
//       <meta property="og:type" content={type} />
//       <meta property="og:site_name" content="SyncXel" />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:url" content={canonicalUrl} />

//       {image && (
//         <>
//           <meta property="og:image" content={image} />
//           <meta name="twitter:image" content={image} />
//         </>
//       )}

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//     </>
//   );
// }

const SITE_URL = "https://syncxel.vercel.app";

// const structuredData = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": `${SITE_URL}/#organization`,
//       name: "SyncXel",
//       url: SITE_URL,
//     },
//     {
//       "@type": "WebSite",
//       "@id": `${SITE_URL}/#website`,
//       name: "SyncXel",
//       url: SITE_URL,
//       publisher: {
//         "@id": `${SITE_URL}/#organization`,
//       },
//     },
//   ],
// };

export default function SEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SyncXel" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data - JSON-LD */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      /> */}
    </>
  );
}
