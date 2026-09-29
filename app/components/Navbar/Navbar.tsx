import {
  navbarBrandName,
  navbarBrandSubtitle,
  navbarCta,
  navbarLinks,
} from "./Navbar.data";
import { navbarStyles } from "./styles";

type NavbarProps = {
  brandName?: string;
  brandSubtitle?: string;
};

export function Navbar({
  brandName = navbarBrandName,
  brandSubtitle = navbarBrandSubtitle,
}: NavbarProps) {
  return (
    <header className={navbarStyles.wrapper}>
      <div className={navbarStyles.header}>
        <a
          className={navbarStyles.brand}
          href="#top"
          aria-label={`${brandName} home`}
        >
          <span className={navbarStyles.brandName}>{brandName}</span>
          <span className={navbarStyles.brandSubtitle}>
            {brandSubtitle}
          </span>
        </a>

        <nav
          className={navbarStyles.navigation}
          aria-label="Primary navigation"
        >
          {navbarLinks.map((link) => (
            <a
              className={navbarStyles.navigationLink}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className={navbarStyles.cta} href={navbarCta.href}>
          {navbarCta.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}