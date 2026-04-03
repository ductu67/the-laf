export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: string;
  priceNote?: string;
  image: string;
  description: string;
  featured: boolean;
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Váy Hai Dây Lụa Beige',
    slug: 'vay-hai-day-lua-beige',
    category: 'Váy',
    categorySlug: 'vay',
    price: '420.000',
    priceNote: 'Chưa bao gồm phí ship',
    image: '/product-slip-dress.png',
    description: 'Váy hai dây chất lụa mềm mại, màu beige thanh lịch. Phù hợp đi làm, dạo phố hay dự tiệc. Thiết kế tối giản nhưng vô cùng sang trọng.',
    featured: true,
    isNew: true,
  },
  {
    id: '2',
    name: 'Váy Hoa Nhí Midi Pastel',
    slug: 'vay-hoa-nhi-midi-pastel',
    category: 'Váy',
    categorySlug: 'vay',
    price: '380.000',
    priceNote: 'Chưa bao gồm phí ship',
    image: '/product-floral-dress.png',
    description: 'Váy midi họa tiết hoa nhí nhỏ xinh, tông màu pastel nhẹ nhàng. Chất liệu voan mềm mại, thoáng mát, phù hợp mọi dịp.',
    featured: true,
    isNew: true,
  },
  {
    id: '3',
    name: 'Áo Kiểu Ren Trắng Thanh Lịch',
    slug: 'ao-kieu-ren-trang-thanh-lich',
    category: 'Áo kiểu',
    categorySlug: 'ao-kieu',
    price: '295.000',
    priceNote: 'Chưa bao gồm phí ship',
    image: '/product-blouse.png',
    description: 'Áo kiểu chất ren trắng tinh tế, thiết kế nữ tính với chi tiết đăng ten nhẹ nhàng. Dễ mix đồ, phù hợp đi làm hoặc ra ngoài.',
    featured: true,
    isNew: false,
  },
  {
    id: '4',
    name: 'Áo Yếm Đỏ Đô Hiện Đại',
    slug: 'ao-yem-do-do-hien-dai',
    category: 'Áo kiểu',
    categorySlug: 'ao-kieu',
    price: '340.000',
    priceNote: 'Chưa bao gồm phí ship',
    image: '/product-ao-yem.png',
    description: 'Áo yếm cách tân màu đỏ đô quyến rũ, thiết kế hiện đại kết hợp nét truyền thống. Điểm nhấn hoàn hảo cho outfit đặc biệt.',
    featured: false,
    isNew: true,
  },
];

export const categories = [
  { name: 'Tất cả', slug: 'tat-ca' },
  { name: 'Váy', slug: 'vay' },
  { name: 'Áo kiểu', slug: 'ao-kieu' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'tat-ca') return products;
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
