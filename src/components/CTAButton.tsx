import React from 'react';
import styles from './CTAButton.module.css';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({
  href,
  children,
  target = '_self',
  rel,
  className = '',
  ariaLabel,
  style,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`btn btn-primary ${styles.ctaButton} ${className}`}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </a>
  );
}
