import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  keywords,
}: SEOProps) {
  const fullTitle = `${title} | OpsForge`;
  const baseUrl = 'https://opsforge.in';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ec4899" />
    </Helmet>
  );
}

export function StructuredData(data: any) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// Common structured data schemas
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpsForge',
  url: 'https://opsforge.in',
  logo: 'https://opsforge.in/logo.png',
  sameAs: [
    'https://www.youtube.com',
    'https://www.linkedin.com/company/opsforge',
    'https://twitter.com/opsforge',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-9876543210',
    email: 'hello@opsforge.in',
  },
});

export const getHowToSchema = (name: string, description: string, steps: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  description,
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step,
  })),
});

export const getArticleSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  author: string = 'OpsForge'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  image,
  datePublished,
  author: {
    '@type': 'Organization',
    name: author,
  },
});
