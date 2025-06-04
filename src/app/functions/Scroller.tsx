"use client";
import Link from "next/link";

interface ScrollToTopProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ScrollToTop = ({ href, className, children }: ScrollToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={scrollToTop}
      scroll={false}
    >
      {children}
    </Link>
  );
};

export default ScrollToTop;
