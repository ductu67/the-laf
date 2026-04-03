import type { Metadata } from 'next';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hướng Dẫn Order Taobao Qua The LaF – Đơn Giản & Uy Tín',
  description:
    'Hướng dẫn chi tiết cách order quần áo Taobao cao cấp qua The LaF. 4 bước đơn giản: Chọn mẫu → Tư vấn size → Đặt cọc → Nhận hàng. Giải đáp mọi thắc mắc.',
  alternates: { canonical: '/huong-dan-order' },
};

const steps = [
  {
    number: '01',
    title: 'Chọn mẫu yêu thích',
    desc: 'Bạn có thể chọn từ các sản phẩm có sẵn trên website hoặc gửi link sản phẩm Taobao bạn muốn order cho shop. Shop sẽ kiểm tra tính khả dụng và báo giá.',
    icon: '🛍️',
  },
  {
    number: '02',
    title: 'Tư vấn size miễn phí',
    desc: 'Gửi cho shop: Chiều cao, cân nặng, và số đo vòng ngực/vòng eo (nếu có). Shop sẽ tra bảng size của hãng và tư vấn size phù hợp nhất cho bạn.',
    icon: '📏',
  },
  {
    number: '03',
    title: 'Xác nhận & Đặt cọc',
    desc: 'Sau khi xác nhận size, bạn đặt cọc 50% giá trị đơn hàng. Shop tiến hành order ngay khi nhận cọc. Số còn lại thanh toán khi hàng về Việt Nam.',
    icon: '💳',
  },
  {
    number: '04',
    title: 'Nhận hàng tận nhà',
    desc: 'Hàng về Việt Nam sau 7–14 ngày. Shop sẽ thông báo cho bạn khi hàng đến. Ship nội địa thêm theo biểu phí vận chuyển thực tế.',
    icon: '📦',
  },
];

const faqs = [
  {
    q: 'Thời gian hàng về mất bao lâu?',
    a: 'Thông thường 7–14 ngày kể từ khi đặt cọc, tùy thuộc vào tốc độ ship của người bán Taobao và thông quan. Shop sẽ cập nhật tình trạng liên tục cho bạn.',
  },
  {
    q: 'Phí ship là bao nhiêu?',
    a: 'Phí ship gồm 2 phần: Ship từ Trung Quốc về Việt Nam (thường 30–60k/kg) và phí ship nội địa trong Việt Nam (theo thực tế). Shop sẽ báo giá chi tiết trước khi bạn xác nhận đơn.',
  },
  {
    q: 'Nếu hàng về không đúng size thì sao?',
    a: 'Nếu shop tư vấn size sai so với thông tin bạn cung cấp, shop sẽ hỗ trợ đổi hàng. Tuy nhiên nếu bạn tự chọn size, shop không chịu trách nhiệm đổi trả.',
  },
  {
    q: 'Shop order được những gì?',
    a: 'Shop chuyên order quần áo nữ từ Taobao: váy, áo kiểu, set đồ, v.v. Không order phụ kiện, giày dép.',
  },
  {
    q: 'Giá trên web là giá cuối chưa?',
    a: 'Giá trên web là giá sản phẩm chưa bao gồm phí ship. Shop báo giá tổng (bao gồm ship về VN) khi bạn inbox đặt hàng.',
  },
  {
    q: 'Có thể gửi link Taobao để shop order không?',
    a: 'Có! Bạn tìm được mẫu mình thích trên Taobao, gửi link cho shop. Shop sẽ kiểm tra uy tín người bán, đánh giá chất lượng và báo giá cho bạn.',
  },
];

export default function HuongDanOrderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.page}>
        {/* Header */}
        <header className={styles.pageHeader}>
          <div className="container">
            <p className="tag">Đơn giản & Minh bạch</p>
            <div className="divider" style={{ margin: '1rem auto' }} />
            <h1>Hướng Dẫn Order</h1>
            <p style={{ maxWidth: 560, margin: '1rem auto 0' }}>
              4 bước đơn giản để sở hữu những mẫu quần áo Taobao cao cấp, chất lượng.
              Shop tư vấn tận tình, bạn an tâm mua sắm.
            </p>
          </div>
        </header>

        {/* Steps */}
        <section className="section" aria-labelledby="steps-heading">
          <div className="container">
            <h2 id="steps-heading" className="sr-only">4 bước đặt hàng</h2>
            <div className={styles.stepsContainer}>
              {steps.map((step, i) => (
                <RevealOnScroll key={step.number} delay={i * 100}>
                  <div className={styles.step}>
                    <div className={styles.stepLeft}>
                      <span className={styles.stepIcon}>{step.icon}</span>
                      <div className={styles.stepLine} />
                    </div>
                    <div className={styles.stepContent}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <h2 className={styles.stepTitle}>{step.title}</h2>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <RevealOnScroll>
              <h2>Sẵn sàng đặt hàng chưa?</h2>
              <p>Inbox ngay để được tư vấn miễn phí!</p>
              <a
                href="https://m.me/thelaf.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="order-guide-cta"
              >
                Inbox đặt hàng ngay
              </a>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faqSection}`} aria-labelledby="faq-heading">
          <div className="container">
            <RevealOnScroll>
              <div className="section-header">
                <p className="tag">Giải đáp thắc mắc</p>
                <div className="divider" />
                <h2 id="faq-heading">Câu Hỏi Thường Gặp</h2>
              </div>
            </RevealOnScroll>

            <div className={styles.faqGrid}>
              {faqs.map((faq, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className={styles.faqItem}>
                    <h3 className={styles.faqQ}>{faq.q}</h3>
                    <p className={styles.faqA}>{faq.a}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <p className={styles.faqCta}>
                Còn câu hỏi khác?{' '}
                <a href="https://m.me/thelaf.vn" target="_blank" rel="noopener noreferrer">
                  Nhắn tin cho shop
                </a>
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </>
  );
}
