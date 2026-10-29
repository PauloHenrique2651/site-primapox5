import { company, socialProfiles } from "@/data/site";
import { siteUrl } from "@/data/seo";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness", "@id": `${siteUrl}/#organization`,
        name: company.name, url: siteUrl, logo: `${siteUrl}/icons/primapox-192.png`,
        image: `${siteUrl}/brand/primapox-og.jpg`, email: company.email,
        telephone: "+552134487320", foundingDate: "1993-07-13",
        address: {"@type":"PostalAddress",streetAddress:"Praça Itapitanga, 10 — Vigário Geral",addressLocality:"Rio de Janeiro",addressRegion:"RJ",addressCountry:"BR"},
        contactPoint: {"@type":"ContactPoint",telephone:`+${company.whatsappNumber}`,email:company.email,contactType:"customer service",availableLanguage:"Portuguese"},
        hasMap: company.mapsUrl,
        ...(socialProfiles.length ? { sameAs: socialProfiles.map((profile) => profile.url) } : {}),
      },
      { "@type":"WebSite", "@id":`${siteUrl}/#website`,url:siteUrl,name:company.shortName,inLanguage:"pt-BR",publisher:{"@id":`${siteUrl}/#organization`} },
      { "@type":"Service",name:"Pintura eletrostática a pó",url:`${siteUrl}/servicos`,serviceType:"Pintura eletrostática a pó de componentes metálicos",provider:{"@id":`${siteUrl}/#organization`} },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}} />;
}
