import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingChat from '@/components/FloatingChat';
import { Analytics } from '@vercel/analytics/react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thelaf.vn';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The LaF – Shop Quần Áo Nữ Order Taobao Cao Cấp',
    template: '%s | The LaF',
  },
  description:
    'The LaF – Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu thiết kế nữ tính, thanh lịch. Tư vấn size tận tình, giao hàng toàn quốc. Inbox để đặt hàng ngay!',
  keywords: [
    'order taobao',
    'shop quần áo nữ',
    'váy order taobao',
    'order quần áo trung quốc',
    'shop thời trang nữ online',
    'áo kiểu taobao',
    'the laf',
    'váy đẹp order',
    'shop order taobao uy tín',
  ],
  authors: [{ name: 'The LaF', url: 'https://www.facebook.com/thelaf.vn' }],
  creator: 'The LaF',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: 'The LaF',
    title: 'The LaF – Shop Quần Áo Nữ Order Taobao Cao Cấp',
    description:
      'Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu nữ tính thanh lịch. Giao hàng toàn quốc.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The LaF – Shop Order Taobao',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The LaF – Shop Quần Áo Nữ Order Taobao',
    description: 'Váy, áo kiểu nữ tính thanh lịch. Order Taobao cao cấp, giao hàng toàn quốc.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'The LaF',
    url: SITE_URL,
    logo: `${SITE_URL}/hero-banner.png`,
    description:
      'Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu nữ tính, thanh lịch.',
    sameAs: [
      'https://www.facebook.com/thelaf.vn',
      'https://www.instagram.com/thelafshop',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://m.me/thelaf.vn',
      availableLanguage: 'Vietnamese',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bộ sưu tập The LaF',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Váy' },
        { '@type': 'OfferCatalog', name: 'Áo kiểu' },
      ],
    },
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingChat />
        <Analytics />
      </body>
    </html>
  );
}
