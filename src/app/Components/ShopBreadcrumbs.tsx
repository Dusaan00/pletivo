import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ShopBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

function ShopBreadcrumbs({ items }: ShopBreadcrumbsProps) {
  return (
    <nav className="shop-breadcrumbs" aria-label="Breadcrumb">
      <ol className="shop-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="shop-breadcrumbs__item">
              {item.href && !isLast ? (
                <Link href={item.href} className="shop-breadcrumbs__link">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`shop-breadcrumbs__label${isLast ? " shop-breadcrumbs__label--current" : ""}`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && <span className="shop-breadcrumbs__separator">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default ShopBreadcrumbs;
