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

type NavbarProps = {
  brandName?: string;
  brandSubtitle?: string;
};

export function Navbar({
  brandName = navbarBrandName,
  brandSubtitle = navbarBrandSubtitle,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={navbarStyles.wrapper}>
      <div className={navbarStyles.header}>
        {/* Brand */}
        <a
          className={navbarStyles.brand}
          href="#top"
          aria-label={`${brandName} home`}
          onClick={closeMenu}
        >
          <span className={navbarStyles.brandName}>
            {brandName}
          </span>

          <span className={navbarStyles.brandSubtitle}>
            {brandSubtitle}
          </span>
        </a>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <div className={navbarStyles.desktopCtaWrapper}>
          <Button href={navbarCta.href}>
            {navbarCta.label}
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className={navbarStyles.mobileMenu}
        >
          <nav
            className={navbarStyles.mobileNavigation}
            aria-label="Mobile navigation"
          >
            {navbarLinks.map((link) => (
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
            <Button
              className={navbarStyles.mobileCta}
              href={navbarCta.href}
              onClick={closeMenu}
            >
              {navbarCta.label}
              <span aria-hidden="true">→</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}