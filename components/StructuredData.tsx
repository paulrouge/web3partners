export default function addOrganizationData() {
  return {
    __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Web3 Partners: the Netherlands",
        "alternateName": "Web3 Partners",
        "url": "https://www.web3partners.nl/",
        "logo": "https://www.web3partners.nl/_next/image?url=%2Fimages%2Flogo-web3.png&w=1920&q=75",
        "sameAs": [
            "https://www.web3partners.nl/",
            "https://twitter.com/Web3Partners_"
            ]
        }`, 
    };
}