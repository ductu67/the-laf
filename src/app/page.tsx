import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'The LaF – Shop Quần Áo Nữ Order Taobao Cao Cấp',
  description:
    'The LaF – Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu thiết kế nữ tính, thanh lịch. Tư vấn size tận tình, giao hàng toàn quốc.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The LaF – Shop Quần Áo Nữ Order Taobao Cao Cấp',
    description: 'The LaF – Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu thiết kế nữ tính, thanh lịch. Tư vấn size tận tình, giao hàng toàn quốc.',
    url: 'https://thelaf.vn',
    siteName: 'The LaF',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The LaF – Shop Quần Áo Nữ Order Taobao Cao Cấp',
    description: 'The LaF – Shop quần áo nữ chuyên order Taobao cao cấp. Váy, áo kiểu thiết kế nữ tính, thanh lịch. Tư vấn size tận tình, giao hàng toàn quốc.',
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
          <div className={styles.heroActions}>
            <CTAButton href="/san-pham" className={styles.heroBtn}>
              Xem bộ sưu tập
            </CTAButton>
            <Link href="/huong-dan-order" className={`btn btn-outline ${styles.heroSecondaryBtn}`}>
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
      <section className="section" aria-label="Sản phẩm nổi bật">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              title="Bộ Sưu Tập Nổi Bật"
              subtitle="Những mẫu được yêu thích nhất, tuyển chọn từ các brands Taobao cao cấp."
            />
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
      <section className="section bg-cream-dark" aria-label="Quy trình đặt hàng">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              title="4 Bước Đặt Hàng"
              subtitle="Quy trình đơn giản, nhanh chóng giúp bạn sở hữu những mẫu quần áo ưng ý nhất."
            />
          </RevealOnScroll>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <RevealOnScroll key={step.number} delay={index * 150}>
                <Card className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className={`section ${styles.reviews}`} aria-labelledby="reviews-heading">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              title="Đánh Giá Từ Khách Hàng"
              subtitle="Lắng nghe chia sẻ từ những cô nàng đã tin tưởng và lựa chọn The LaF."
            />
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
      {/* ===== INSTAGRAM FEED ===== */}
      <section className={`section ${styles.instaSection}`} aria-labelledby="insta-heading">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              title="Theo Dõi Chúng Mình Trên Instagram"
              subtitle="Cập nhật những mẫu thiết kế mới nhất và các chương trình ưu đãi độc quyền @thelafshop"
            />
          </RevealOnScroll>

          <div className={styles.instaGrid}>
            {[
              { id: 1, src: '/product-floral-dress.png', alt: 'Váy hoa nhí thời trang Taobao' },
              { id: 2, src: '/product-blouse.png', alt: 'Áo Blouse thanh lịch' },
              { id: 3, src: '/product-ao-yem.png', alt: 'Thiết kế áo yếm hiện đại' },
              { id: 4, src: '/product-slip-dress.png', alt: 'Váy lụa hai dây sang trọng' },
            ].map((img, i) => (
              <RevealOnScroll key={img.id} delay={i * 100}>
                <a href="https://www.instagram.com/thelafshop" target="_blank" rel="noopener noreferrer" className={styles.instaItem}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className={styles.instaImage} />
                  <div className={styles.instaOverlay}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <CTAButton
                href="https://www.instagram.com/thelafshop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Xem toàn bộ trên Instagram
              </CTAButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner} aria-labelledby="cta-heading">
        <div className="container">
          <RevealOnScroll>
            <h2 id="cta-heading">Chưa tìm được mẫu ưng ý?</h2>
            <p>Inbox cho shop, chúng mình sẽ tìm kiếm và tư vấn riêng cho bạn!</p>
            <div className={styles.ctaBtns}>
              <CTAButton
                href="https://www.facebook.com/thelaf.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nhắn tin Facebook
              </CTAButton>
              <CTAButton
                href="https://www.instagram.com/thelafshop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Nhắn tin Instagram
              </CTAButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
