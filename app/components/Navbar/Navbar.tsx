import { navbarBrandName } from "./Navbar.data";
import { navbarStyles } from "./styles";

type NavbarProps = {
  brandName?: string;
};

export function Navbar({ brandName = navbarBrandName }: NavbarProps) {
  return (
    <header className={navbarStyles.header}>
      <a className={navbarStyles.brand} href="/" aria-label={`${brandName} home`}>
        {brandName}
      </a>
    </header>
  );
}
