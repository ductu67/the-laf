'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/san-pham', label: 'Sản phẩm' },
  { href: '/huong-dan-order', label: 'Hướng dẫn Order' },
  { href: '/bang-size', label: 'Bảng Size' },
  { href: '/lien-he', label: 'Liên hệ' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="The LaF – Trang chủ">
          <span className={styles.logoText}>The LaF</span>
          <span className={styles.logoTagline}>beautiful from the soul</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Menu chính">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="https://m.me/thelaf.vn"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.ctaBtn}`}
          aria-label="Đặt hàng qua Messenger"
        >
          Đặt hàng ngay
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Menu mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://m.me/thelaf.vn"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.mobileCta}`}
          >
            Đặt hàng ngay
          </Link>
        </nav>
      </div>
    </header>
  );
}
