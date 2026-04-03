import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hướng Dẫn Order Taobao Qua The LaF – Đơn Giản & Uy Tín',
  description:
    'Hướng dẫn chi tiết cách order quần áo Taobao cao cấp qua The LaF. 4 bước đơn giản: Chọn mẫu → Tư vấn size → Đặt cọc → Nhận hàng. Giải đáp mọi thắc mắc.',
  alternates: { canonical: '/huong-dan-order' },
  openGraph: {
    title: 'Hướng Dẫn Order Taobao Qua The LaF – Đơn Giản & Uy Tín',
    description: 'Hướng dẫn chi tiết cách order quần áo Taobao cao cấp qua The LaF. 4 bước đơn giản: Chọn mẫu → Tư vấn size → Đặt cọc → Nhận hàng. Giải đáp mọi thắc mắc.',
    url: 'https://thelaf.vn/huong-dan-order',
    siteName: 'The LaF',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hướng Dẫn Order Taobao Qua The LaF – Đơn Giản & Uy Tín',
    description: 'Hướng dẫn chi tiết cách order quần áo Taobao cao cấp qua The LaF. 4 bước đơn giản: Chọn mẫu → Tư vấn size → Đặt cọc → Nhận hàng. Giải đáp mọi thắc mắc.',
  },
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
            <SectionHeader
              title="Hướng Dẫn Order"
              subtitle="4 bước đơn giản để sở hữu những mẫu quần áo Taobao cao cấp, chất lượng. Shop tư vấn tận tình, bạn an tâm mua sắm."
            />
          </div>
        </header>

        {/* Steps */}
        <section className="section" aria-labelledby="steps-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="steps-heading">4 bước đặt hàng</h2>
            </div>
            <div className={styles.stepsContainer}>
              {steps.map((step, i) => (
                <RevealOnScroll key={step.number} delay={i * 100} fillHeight>
                  <Card className={styles.step}>
                    <div className={styles.stepIcon}>
                      {step.icon}
                    </div>
                    <div className={styles.stepContent}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </Card>
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
              <CTAButton
                href="https://m.me/thelaf.vn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                Inbox đặt hàng ngay
              </CTAButton>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faqSection}`} aria-labelledby="faq-heading">
          <div className="container">
            <RevealOnScroll>
              <SectionHeader
                title="Câu Hỏi Thường Gặp"
                subtitle="Giải đáp những thắc mắc phổ biến của khách hàng khi order Taobao qua The LaF."
              />
            </RevealOnScroll>

            <div className={styles.faqGrid}>
              {faqs.map((faq, i) => (
                <RevealOnScroll key={i} delay={i * 80} fillHeight>
                  <Card className={styles.faqItem}>
                    <h3 className={styles.faqQ}>{faq.q}</h3>
                    <p className={styles.faqA}>{faq.a}</p>
                  </Card>
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
