"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  navbarBrandName,
  navbarBrandSubtitle,
  navbarCta,
  navbarLinks,
} from "./Navbar.data";

import { Button } from "../ui/Button/Button";
import { navbarStyles } from "./styles";
import Link from "next/link";

type NavbarLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  brandName?: string;
  brandSubtitle?: string;
  brandHref?: string;
  navLinks?: readonly NavbarLink[];
  showCta?: boolean;
};

export function Navbar({
  brandName = navbarBrandName,
  brandSubtitle = navbarBrandSubtitle,
  brandHref = "#top",
  navLinks = navbarLinks,
  showCta = true,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={navbarStyles.wrapper}>
      <div className={navbarStyles.header}>
        {/* Brand */}
        <Link
  className={navbarStyles.brand}
  href={brandHref}
  aria-label={`${brandName} home`}
  onClick={closeMenu}
>
  <span className={navbarStyles.brandName}>
    {brandName}
  </span>

  <span className={navbarStyles.brandSubtitle}>
    {brandSubtitle}
  </span>
</Link>

        {/* Desktop Navigation */}
        {navLinks.length > 0 && (
          <nav
            className={navbarStyles.navigation}
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                className={navbarStyles.navigationLink}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {showCta && (
          <div className={navbarStyles.desktopCtaWrapper}>
            <Button href={navbarCta.href}>
              {navbarCta.label}
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {navLinks.length > 0 && (
          <button
            type="button"
            className={navbarStyles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {navLinks.length > 0 && isMenuOpen && (
        <div
          id="mobile-navigation"
          className={navbarStyles.mobileMenu}
        >
          <nav
            className={navbarStyles.mobileNavigation}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                className={navbarStyles.mobileNavigationLink}
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            {showCta && (
              <Button
                className={navbarStyles.mobileCta}
                href={navbarCta.href}
                onClick={closeMenu}
              >
                {navbarCta.label}
                <span aria-hidden="true">→</span>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}