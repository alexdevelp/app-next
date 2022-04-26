import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  indexPage?: boolean;
  excludeTitleSuffix?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  indexPage = true,
  excludeTitleSuffix = false,
}: SEOProps) {
  const pageTitle = `${title} ${!excludeTitleSuffix ? '| Dev News' : ''}`;
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null;
  return (
    <Head>
      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}
      {!indexPage && <meta name="robots" content="noindex,nofollow" />}
      <title>{pageTitle}</title>
    </Head>
  );
}
