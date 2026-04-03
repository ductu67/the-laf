# The LaF - Quần Áo Nữ Order Taobao Cao Cấp

Chào mừng bạn đến với kho lưu trữ mã nguồn của **The LaF** – Website chính thức dành cho cửa hàng thời trang nữ chuyên order Taobao cao cấp.

## Stack Công Nghệ (Tech Stack)

Dự án này sử dụng các công nghệ hiện đại hướng tới trải nghiệm người dùng tối đa và tốc độ Load chuẩn SEO:

- **Framework:** Next.js (App Router) với React 19.
- **UI/Styling:** CSS Modules (`.module.css`) hỗ trợ viết code Vanilla CSS cô lập và mạnh mẽ.
- **Language:** TypeScript hoàn toàn (Strict-mode).
- **Fonts:** Được cấu hình linh hoạt kết hợp giữa `Be Vietnam Pro` (dành cho nội dung có dấu), `Lora` (cổ điển, dành cho Heading), và `Jost` (dành riêng hiển thị số/giá tiền).
- **Phân tích (Analytics):** Tích hợp Vercel Analytics.

## Cấu trúc dự án (Architecture)

Toàn bộ ứng dụng nằm trong thư mục `src/`:
- `src/app/`: Cấu trúc File-based Routing của Next.js (chứa các route chính mạng lưới website như `/`, `/san-pham`, `/huong-dan-order`, `/bang-size`,...).
- `src/components/`: Tập hợp các React Components linh hoạt (`Navbar`, `Footer`, `ProductCard`, `ScrollToTop`).
- `public/`: Nhóm các tài nguyên tĩnh (hình ảnh, favicon, ảnh minh hoạ động).

## Hướng dẫn cài đặt & Thiết lập nội bộ (Development)

1. **Cài đặt thư viện phụ thuộc:**
```bash
npm install
# hoặc
yarn install
```

2. **Khởi chạy môi trường Dev:**
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để kiểm tra cấu trúc.

## Bản quyền & Triển khai (Deployment)

Dự án này sẵn sàng triển khai trên hạ tầng Vercel cực kỳ mượt mà. Đẩy mã nguồn lên Github và Import Project vào [Vercel](https://vercel.com/) với thiết lập cơ bản.
