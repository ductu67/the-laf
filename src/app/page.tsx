import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'The LaF – Shop Quần Áo Nữ Order Taobao Cao Cấp',
  description:
    'The LaF – Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu thiết kế nữ tính, thanh lịch. Tư vấn size tận tình, giao hàng toàn quốc.',
  alternates: {
    canonical: '/',
  },
};

const steps = [
  {
    number: '01',
    title: 'Chọn mẫu yêu thích',
    desc: 'Duyệt qua bộ sưu tập được tuyển chọn kỹ lưỡng và chọn mẫu bạn thích.',
  },
  {
    number: '02',
    title: 'Inbox tư vấn size',
    desc: 'Nhắn tin cho shop kèm chiều cao, cân nặng. Shop sẽ tư vấn size phù hợp nhất.',
  },
  {
    number: '03',
    title: 'Xác nhận & đặt cọc',
    desc: 'Chốt đơn và đặt cọc để shop tiến hành order. An toàn, minh bạch.',
  },
  {
    number: '04',
    title: 'Nhận hàng tận nhà',
    desc: 'Hàng về sau 1–2 tuần. Giao tận nơi trên toàn quốc.',
  },
];

const reviews = [
  {
    id: 1,
    name: 'Linh Nguyễn',
    stars: 5,
    text: 'Shop tư vấn size rất nhiệt tình, váy về đẹp y hình. Chất liệu mềm mại, mặc rất thoải mái. Sẽ ủng hộ shop dài dài! 💕',
    item: 'Váy Hai Dây Lụa Beige',
  },
  {
    id: 2,
    name: 'Minh Châu',
    stars: 5,
    text: 'Lần đầu order Taobao qua shop, hàng về đúng như mô tả. Màu sắc đẹp hơn cả tưởng tượng. Thank you The LaF!',
    item: 'Váy Hoa Nhí Midi Pastel',
  },
  {
    id: 3,
    name: 'Thu Hà',
    stars: 5,
    text: 'Shop phản hồi nhanh, cập nhật tình trạng đơn hàng liên tục. Hàng đóng gói cẩn thận. Rất hài lòng!',
    item: 'Áo Kiểu Ren Trắng',
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero} aria-label="Banner giới thiệu">
        {/* Right: image column */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/hero-banner.png"
              alt="The LaF – Bộ sưu tập quần áo nữ order Taobao cao cấp"
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 768px) 280px, 480px"
            />
          </div>
        </div>

        {/* Left: content column */}
        <div className={styles.heroContent}>
          <p className={`tag ${styles.heroTag}`}>
            Order Taobao Cao Cấp
          </p>
          <h1 className={styles.heroTitle}>
            Đẹp từ
            <em>tâm hồn</em>
          </h1>
          <p className={styles.heroDesc}>
            Những thiết kế nữ tính, thanh lịch từ Taobao được tuyển chọn kỹ lưỡng.
            Tư vấn size tận tình, giao hàng toàn quốc.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/san-pham" className="btn btn-primary" id="hero-cta-products">
              Xem bộ sưu tập
            </Link>
            <Link href="/huong-dan-order" className="btn btn-outline" id="hero-cta-guide">
              Cách thức order
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span>Cuộn để khám phá</span>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className={styles.statsBar} aria-label="Thống kê shop">
        <div className={`container ${styles.statsGrid}`}>
          {[
            { value: '500+', label: 'Khách hàng hài lòng' },
            { value: '1–2 tuần', label: 'Thời gian giao hàng' },
            { value: '100%', label: 'Tư vấn miễn phí' },
            { value: 'Toàn quốc', label: 'Giao hàng' },
          ].map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <strong className={styles.statValue}>{stat.value}</strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <p className="tag">Mới nhất</p>
              <div className="divider" />
              <h2 id="featured-heading">Bộ Sưu Tập Nổi Bật</h2>
              <p>Những mẫu được yêu thích nhất, tuyển chọn từ các brands Taobao cao cấp.</p>
            </div>
          </RevealOnScroll>

          <div className={styles.productsGrid}>
            {featuredProducts.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 100}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className={styles.viewAllWrapper}>
              <Link href="/san-pham" className="btn btn-outline" id="view-all-products">
                Xem tất cả sản phẩm
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className={styles.brandStory} aria-labelledby="brand-heading">
        <div className="container">
          <div className={styles.brandGrid}>
            <RevealOnScroll className={styles.brandImageCol}>
              <div className={styles.brandImageWrapper}>
                <Image
                  src="/brand-story.png"
                  alt="The LaF – Câu chuyện thương hiệu, tuyển chọn trang phục Taobao cao cấp"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.brandImage}
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll className={styles.brandContent} delay={150}>
              <p className="tag">Câu chuyện thương hiệu</p>
              <div className="divider" style={{ margin: '1rem 0' }} />
              <h2 id="brand-heading">Tại sao chọn The LaF?</h2>
              <p style={{ marginTop: '1rem' }}>
                The LaF ra đời từ niềm đam mê thời trang và mong muốn mang những thiết kế
                đẹp, chất lượng từ Taobao đến tay chị em Việt Nam với mức giá hợp lý nhất.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Mỗi sản phẩm trong shop đều được tuyển chọn kỹ lưỡng về chất liệu, kiểu dáng
                và độ hoàn thiện. Shop cam kết tư vấn size trung thực, hỗ trợ nhiệt tình từ khi
                chọn hàng đến khi nhận đơn.
              </p>
              <ul className={styles.brandPoints}>
                <li>✦ Tuyển chọn từ brands Taobao cao cấp, uy tín</li>
                <li>✦ Tư vấn size miễn phí dựa trên số đo thực tế</li>
                <li>✦ Cập nhật tình trạng đơn hàng liên tục</li>
                <li>✦ Hỗ trợ đổi size nếu shop tư vấn sai</li>
              </ul>
              <Link href="/huong-dan-order" className="btn btn-primary" id="brand-order-guide" style={{ marginTop: '2rem' }}>
                Hướng dẫn đặt hàng
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== HOW TO ORDER ===== */}
      <section className={`section ${styles.howToOrder}`} aria-labelledby="how-to-order-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <p className="tag">Đơn giản & An toàn</p>
              <div className="divider" />
              <h2 id="how-to-order-heading">4 Bước Đặt Hàng</h2>
              <p>Quy trình đơn giản, minh bạch. Bạn yên tâm, shop lo phần còn lại.</p>
            </div>
          </RevealOnScroll>

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <RevealOnScroll key={step.number} delay={i * 100} fillHeight>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className={styles.orderCta}>
              <p>Sẵn sàng chọn mẫu yêu thích?</p>
              <a
                href="https://m.me/thelaf.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="home-order-cta"
              >
                Inbox đặt hàng ngay
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className={`section ${styles.reviews}`} aria-labelledby="reviews-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <p className="tag">Khách hàng nói gì</p>
              <div className="divider" />
              <h2 id="reviews-heading">Đánh Giá Từ Khách Hàng</h2>
            </div>
          </RevealOnScroll>

          <div className={styles.reviewsGrid}>
            {reviews.map((review, i) => (
              <RevealOnScroll key={review.id} delay={i * 120} fillHeight>
                <article
                  className={styles.reviewCard}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className={styles.stars} aria-label={`${review.stars} sao`}>
                    {'★'.repeat(review.stars)}
                  </div>
                  <blockquote className={styles.reviewText} itemProp="reviewBody">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className={styles.reviewMeta}>
                    <strong className={styles.reviewName} itemProp="author">{review.name}</strong>
                    <span className={styles.reviewItem}>Đã mua: {review.item}</span>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner} aria-labelledby="cta-heading">
        <div className="container">
          <RevealOnScroll>
            <h2 id="cta-heading">Chưa tìm được mẫu ưng ý?</h2>
            <p>Inbox cho shop, chúng mình sẽ tìm kiếm và tư vấn riêng cho bạn!</p>
            <div className={styles.ctaBtns}>
              <a
                href="https://www.facebook.com/thelaf.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="cta-facebook"
              >
                Nhắn tin Facebook
              </a>
              <a
                href="https://www.instagram.com/thelafshop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="cta-instagram"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Nhắn tin Instagram
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
