import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bảng Size Taobao – Hướng Dẫn Chọn Size Quần Áo Trung Quốc | The LaF',
  description:
    'Bảng size Taobao chi tiết để chọn size áo, váy chính xác. Hướng dẫn cách đo và quy đổi size Trung Quốc sang Việt Nam. Tư vấn size miễn phí tại The LaF.',
  alternates: { canonical: '/bang-size' },
};

export default function BangSizePage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.pageHeader}>
        <div className="container">
          <p className="tag">Chọn size đúng ngay từ đầu</p>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <h1>Bảng Size Tham Khảo</h1>
          <p style={{ maxWidth: 560, margin: '1rem auto 0' }}>
            Bảng size dưới đây chỉ mang tính tham khảo. Mỗi shop Taobao có bảng size riêng
            — hãy inbox để shop tra size chính xác cho bạn!
          </p>
        </div>
      </header>

      {/* How to Measure */}
      <section className="section" aria-labelledby="measure-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <p className="tag">Bước 1</p>
              <div className="divider" />
              <h2 id="measure-heading">Cách Đo Số Đo</h2>
              <p>Đo đúng cách để shop tư vấn size phù hợp nhất cho bạn.</p>
            </div>
          </RevealOnScroll>

          <div className={styles.measureGrid}>
            {[
              { part: 'Vòng ngực', icon: '👕', desc: 'Đo vòng to nhất của phần ngực. Thước dây ngang nách, đặt song song với mặt đất. Không kéo căng, không quá lỏng.' },
              { part: 'Vòng eo', icon: '📏', desc: 'Đo phần eo nhỏ nhất (thường cách rốn 2–3cm). Thở bình thường, không hút bụng.' },
              { part: 'Vòng mông', icon: '📐', desc: 'Đo vòng to nhất của phần mông. Thước dây song song với mặt đất.' },
              { part: 'Chiều dài', icon: '📕', desc: 'Đo từ điểm cao nhất của vai xuống đến điểm bạn muốn (eo, hông, gối, mắt cá).' },
            ].map((m, i) => (
              <RevealOnScroll key={m.part} delay={i * 80} fillHeight>
                <div className={styles.measureCard}>
                  <span className={styles.measureIcon}>{m.icon}</span>
                  <h3>{m.part}</h3>
                  <p>{m.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Size Table - Tops */}
      <section className={`section ${styles.tableSectionAlt}`} aria-labelledby="tops-table-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <p className="tag">Áo & Váy rời</p>
              <div className="divider" />
              <h2 id="tops-table-heading">Bảng Size Áo & Váy (Tham Khảo)</h2>
              <p>Size áo kiểu, áo yếm, váy hai dây, váy xòe. Đơn vị: cm.</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className={styles.tableWrapper}>
              <table className={styles.sizeTable} aria-label="Bảng size áo váy Taobao">
                <thead>
                  <tr>
                    <th>Size TQ</th>
                    <th>Vòng ngực (cm)</th>
                    <th>Vòng eo (cm)</th>
                    <th>Chiều cao gợi ý</th>
                    <th>Cân nặng gợi ý</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'XS', chest: '76–80', waist: '60–64', height: '150–158', weight: '40–46 kg' },
                    { size: 'S', chest: '80–84', waist: '64–68', height: '155–163', weight: '46–52 kg' },
                    { size: 'M', chest: '84–88', waist: '68–72', height: '158–165', weight: '52–58 kg' },
                    { size: 'L', chest: '88–94', waist: '72–78', height: '160–168', weight: '58–65 kg' },
                    { size: 'XL', chest: '94–100', waist: '78–84', height: '162–170', weight: '65–72 kg' },
                    { size: 'XXL', chest: '100–106', waist: '84–90', height: '163–172', weight: '72–80 kg' },
                  ].map((row) => (
                    <tr key={row.size}>
                      <td><strong>{row.size}</strong></td>
                      <td>{row.chest}</td>
                      <td>{row.waist}</td>
                      <td>{row.height} cm</td>
                      <td>{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>

          {/* Disclaimer */}
          <RevealOnScroll>
            <div className={styles.disclaimer}>
              <span className={styles.disclaimerIcon}>⚠️</span>
              <div>
                <strong>Lưu ý quan trọng:</strong> Bảng trên chỉ mang tính tham khảo chung.
                Mỗi shop Taobao đều có bảng size riêng — cùng một size M nhưng số đo có thể khác nhau giữa các shop.
                Hãy <a href="https://m.me/thelaf.vn" target="_blank" rel="noopener noreferrer">inbox cho shop</a> để được tra size chính xác theo từng sản phẩm!
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tips */}
      <section className="section" aria-labelledby="tips-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <p className="tag">Mẹo hay</p>
              <div className="divider" />
              <h2 id="tips-heading">Lưu Ý Khi Chọn Size Taobao</h2>
            </div>
          </RevealOnScroll>

          <div className={styles.tipsGrid}>
            {[
              { tip: 'Taobao thường nhỏ hơn VN', desc: 'Size Taobao thường nhỏ hơn label ở Việt Nam khoảng 1 size. Nên up 1 size so với bình thường.' },
              { tip: 'Ưu tiên đo số đo thực', desc: 'Thay vì chọn theo “tôi hay mặc size M”, hãy đo số đo thực tế và gửi cho shop.' },
              { tip: 'Mỗi shop có size riêng', desc: 'Size M của shop A khác size M của shop B. Đừng dựa vào size cũ — luôn inbox để được tra size mới.' },
              { tip: 'Inbox để an tâm', desc: 'Shop tra bảng size cựa từng người bán Taobao cụ thể và tư vấn chính xác nhất. Hoàn toàn miễn phí!' },
            ].map((t, i) => (
              <RevealOnScroll key={t.tip} delay={i * 100} fillHeight>
                <div className={styles.tipCard}>
                  <div className={styles.tipDot} />
                  <div>
                    <h3 className={styles.tipTitle}>{t.tip}</h3>
                    <p>{t.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className={styles.sizeCta}>
              <h3>Chưa chắc về size?</h3>
              <p>Inbox cho shop kèm chiều cao, cân nặng và số đo. Shop tư vấn miễn phí!</p>
              <a
                href="https://m.me/thelaf.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="size-guide-cta"
              >
                Tư vấn size ngay
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
