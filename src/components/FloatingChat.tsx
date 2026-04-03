'use client';

import styles from './FloatingChat.module.css';

export default function FloatingChat() {
  return (
    <div className={styles.floatingWrapper}>
      {/* Instagram Button */}
      <a 
        href="https://www.instagram.com/thelafshop" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.chatButton} ${styles.instagram}`}
        aria-label="Follow Instagram"
      >
        <span className={styles.tooltip}>Instagram</span>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      {/* Messenger Button */}
      <a 
        href="https://m.me/thelaf.vn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.chatButton} ${styles.messenger}`}
        aria-label="Chat Messenger"
      >
        <span className={styles.tooltip}>Chat Facebook</span>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.47 2 2 6.14 2 11.25c0 2.9 1.48 5.48 3.8 7.15v3.45l3.47-1.92c.87.25 1.8.38 2.73.38 5.53 0 10-4.14 10-9.25S17.53 2 12 2zm1.09 12.63l-2.8-3-5.46 3 6-6.38 2.89 3 5.37-3-6 6.38z"/>
        </svg>
      </a>
    </div>
  );
}
