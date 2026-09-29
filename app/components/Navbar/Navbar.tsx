import { navbarBrandName, navbarBrandSubtitle } from "./Navbar.data";
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
    <header className={navbarStyles.header}>
      <a className={navbarStyles.brand} href="/" aria-label={`${brandName} home`}>
        <span className={navbarStyles.brandName}>{brandName}</span>
        <span className={navbarStyles.brandSubtitle}>{brandSubtitle}</span>
      </a>
    </header>
  );
}
