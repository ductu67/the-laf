import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={`card ${styles.card}`} itemScope itemType="https://schema.org/Product">
      <Link href={`/san-pham/${product.slug}`} className={styles.imageWrapper} aria-label={`Xem chi tiết ${product.name}`}>
        <Image
          src={product.image}
          alt={`${product.name} - The LaF Order Taobao`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={styles.image}
          itemProp="image"
        />
        <div className={styles.badges}>
          {product.isNew && <span className="badge badge-new">Mới</span>}
        </div>
        <div className={styles.overlay}>
          <span className={styles.overlayText}>Xem chi tiết</span>
        </div>
      </Link>

      <div className={styles.info}>
        <span className={styles.category} itemProp="category">{product.category}</span>
        <h2 className={styles.name} itemProp="name">
          <Link href={`/san-pham/${product.slug}`}>{product.name}</Link>
        </h2>
        <div className={styles.bottom}>
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="VND" />
            <meta itemProp="price" content={product.price.replace(/\./g, '')} />
            <span className={styles.price} aria-label={`Giá ${product.price} đồng`}>
              {product.price}₫
            </span>
          </div>
          <Link
            href="https://m.me/thelaf.vn"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-ghost ${styles.orderBtn}`}
            aria-label={`Đặt hàng ${product.name} qua Messenger`}
          >
            Đặt hàng
          </Link>
        </div>
      </div>
    </article>
  );
}
