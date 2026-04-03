<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# The LaF Project - AI Assistance Rules (CURSOR / AGENTS)

Tệp này quy định bổ sung các nguyên tắc dành riêng cho Agent AI thao tác mã nguồn The LaF. Đọc kỹ file này và `CLAUDE.md`.

## 1. Phong cách Thiết kế (Styling & Design System)
- **Tuyệt đối Không sử dụng Tailwind CSS hoặc framework lai tạp khác.** Khách hàng dự án chỉ định sử dụng hệ thống Vanilla CSS và hệ thống CSS Modules (`*.module.css`) nhằm đảm bảo khả năng tùy biến sâu, mã hóa các hiệu ứng tinh tế. Cấm tự động thêm class hay convert cấu trúc sang Tailwind.
- **Biến Global:** Mọi thông số tái sử dụng tham chiếu trong file `src/app/globals.css`. Dùng `--color-burgundy`, `--color-warm-brown` thay vì mã HEX trực tiếp để đồng bộ tông màu toàn website.
- **Typography:** Bắt buộc thiết lập font có hỗ trợ tiếng Việt trên các nút CTA (Be Vietnam Pro - `--font-sans`). Không dùng chữ In Hoa (Text-transform: uppercase) ở những Heading lớn có dấu tiếng Việt vì dễ tạo ra sự cố font tuột diacritic.

## 2. Quy tắt Mã nguồn & Ngôn ngữ (Codebase & Language)
- **Cú pháp Typing:** Sử dụng TypeScript (`Strict Mode`). Thêm interface rõ ràng.
- Bất kì yêu cầu về thiết kế Layout nào cũng phải đảm bảo Responsive. Không sử dụng width hoặc max-width bằng `px` đóng cứng mà không kèm padding an toàn hoặc calc, thay vào đó hãy dùng tỷ lệ `%`, `vw` hoặc Flexbox.
