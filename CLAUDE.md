# The LaF Project - AI Assistance Rules (CLAUDE/CURSOR)

Tệp này quy định các nguyên tắc để AI (Claude / Antigravity / Cursor) khởi tạo và sửa đổi mã trong dự án The LaF, nhằm đảm bảo mã nguồn sạch sẽ, thống nhất và không bị lệch phong cách thiết kế hiện tại.

## 1. Phong cách Thiết kế (Styling & Design System)
- **Không sử dụng Tailwind CSS.** Dự án The LaF đang dựa trên hệ thống Vanilla CSS Modules (`*.module.css`) nhằm đảm bảo khả năng tùy biến sâu, mã hóa các hiệu ứng tinh tế dễ dàng.
- **Biến Global:** Mọi thông số tái sử dụng phải tham chiếu từ `src/app/globals.css`.
  - Màu sắc: Dùng các biến `--color-burgundy`, `--color-warm-brown`, `--color-cream` thay vì mã HEX trực tiếp để đồng bộ tông màu.
  - Typography: Bắt buộc dùng `--font-serif` (Lora) cho các Tiêu đề Chính (H1, Title) cảm giác sang trọng, `--font-sans` (Be Vietnam Pro) cho các đoạn text nội dung chuẩn Tiếng Việt, `--font-number` (Jost) cho giá tiền, chữ số.
- **Responsive:** Mobile First và sử dụng Layout Grid / Flexbox thay vì Absolute/Float.

## 2. Quy tắt Mã nguồn & Ngôn ngữ (Codebase & Language)
- **Framework:** Next.js App Router. Tuân thủ triệt để Server Components mặc định, và chỉ khai báo `'use client'` khi thực sự cần quản lý state, effects ở view (Ví dụ: `Navbar` có hiệu ứng cuộn, `Menu`...).
- **Cú pháp Typing:** TypeScript là bắt buộc (`Strict Mode`). Các Interface / Type nên đưa vào thư mục logic hoặc khai báo rõ ràng cạnh Component.
- **Tối ưu Hình ảnh:** 100% sử dụng `<Image />` từ `next/image` kết hợp thuộc tính `sizes`. Ưu tiên thẻ `priority` cho các tệp đồ họa khung Hero.
- **Analytics:** Dự án đang đấu nối với `@vercel/analytics`. Không tự ý xóa thư viện.

Luôn tối ưu SEO Semantic HTML, đảm bảo Accessibility (`aria-labels`) cho các thành phần click. Dữ liệu mock (như trong `lib/products.ts`) có thể mở rộng sau lên các headless CMS thực thụ.
