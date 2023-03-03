import Head from 'next/head';

export default function StructuredData() {
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Web3 Partners',
            url: 'https://web3partners.nl',
            logo: 'https://web3partners.nl/images/logo-web3.png',
            sameAs: [
              'https://twitter.com/web3partners',
              'https://www.linkedin.com/company/web3-partners',
                ],      
            }),
        }}   />
    </Head>
  )
}