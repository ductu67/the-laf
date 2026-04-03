import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, products } from '@/lib/products';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} – ${product.price}₫ | The LaF Order Taobao`,
    description: `${product.description} Giá ${product.price}₫. Tư vấn size miễn phí, giao hàng toàn quốc. Inbox The LaF để đặt hàng ngay.`,
    openGraph: {
      title: `${product.name} | The LaF`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
    alternates: { canonical: `/san-pham/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: 'The LaF' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: product.price.replace(/\./g, ''),
      availability: 'https://schema.org/InStock',
      url: `https://thelaf.vn/san-pham/${product.slug}`,
      seller: { '@type': 'Organization', name: 'The LaF' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className={styles.page}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList" className={styles.breadcrumbList}>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item"><span itemProp="name">Trang chủ</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span aria-hidden>›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/san-pham" itemProp="item"><span itemProp="name">Sản phẩm</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span aria-hidden>›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name">{product.name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="section">
          <div className="container">
            <div className={styles.productGrid}>
              {/* Image */}
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={`${product.name} – The LaF Order Taobao`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />
                  {product.isNew && (
                    <span className={`badge badge-new ${styles.badge}`}>Mới</span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className={styles.infoCol}>
                <p className="tag">{product.category}</p>
                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.price}>{product.price}₫</p>
                {product.priceNote && (
                  <p className={styles.priceNote}>* {product.priceNote}</p>
                )}

                <p className={styles.desc}>{product.description}</p>

                <div className={styles.notice}>
                  <strong>📌 Lưu ý khi đặt hàng:</strong>
                  <ul>
                    <li>Vui lòng cung cấp chiều cao & cân nặng để được tư vấn size chính xác.</li>
                    <li>Thời gian hàng về: 1–2 tuần sau khi xác nhận đơn.</li>
                    <li>Giá chưa bao gồm phí vận chuyển nội địa.</li>
                  </ul>
                </div>

                <div className={styles.actions}>
                  <a
                    href={`https://m.me/thelaf.vn?text=Mình muốn đặt hàng: ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id={`order-${product.slug}`}
                  >
                    Đặt hàng qua Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/thelafshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    id={`order-ig-${product.slug}`}
                  >
                    Đặt qua Instagram
                  </a>
                </div>

                <div className={styles.trustBadges}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✦</span>
                    <span>Tư vấn size miễn phí</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✦</span>
                    <span>Giao hàng toàn quốc</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✦</span>
                    <span>Hỗ trợ đổi size nếu shop tư vấn sai</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✦</span>
                    <Link href="/huong-dan-order">Xem hướng dẫn đặt hàng</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
