import type { Metadata } from 'next';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Tất Cả Sản Phẩm – Shop Order Taobao Nữ Cao Cấp',
  description:
    'Khám phá bộ sưu tập váy, áo kiểu nữ tính, thanh lịch từ Taobao cao cấp. Tư vấn size miễn phí, giao hàng toàn quốc.',
  alternates: { canonical: '/san-pham' },
};

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <header className={styles.pageHeader}>
        <div className="container">
          <p className="tag">The LaF Collection</p>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <h1>Bộ Sưu Tập</h1>
          <p style={{ maxWidth: 520, margin: '1rem auto 0' }}>
            Những thiết kế được tuyển chọn từ các thương hiệu Taobao cao cấp.
            Mỗi mẫu đều được kiểm tra kỹ về chất liệu và độ hoàn thiện.
          </p>
        </div>
      </header>

      {/* Products grid */}
      <section className="section" aria-label="Danh sách sản phẩm">
        <div className="container">
          <div className={styles.grid}>
            {products.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <RevealOnScroll>
            <h2>Không tìm thấy mẫu ưng ý?</h2>
            <p>Inbox cho shop, chúng mình sẽ tìm kiếm và tư vấn riêng theo yêu cầu của bạn!</p>
            <a
              href="https://m.me/thelaf.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="products-order-cta"
            >
              Nhắn tin tư vấn
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
