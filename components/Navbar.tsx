"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-client";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Backwater Cruise", path: "/poovar-backwater-cruise" },
  { name: "Sunset Cruise", path: "/sunset-cruise" },
  { name: "Prices", path: "/pricing" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const mobileNav = useRef<HTMLElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const openRef = useRef(false);

  const focusMenuControl = useCallback(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const desktopLink = header.current?.querySelector<HTMLElement>(
        ".desktop-nav a[aria-current='page']"
      ) ?? header.current?.querySelector<HTMLElement>(".desktop-nav a");
      (desktopLink ?? header.current?.querySelector<HTMLElement>(".site-logo"))?.focus();
      return;
    }

    menuToggle.current?.focus();
  }, []);

  const closeMenu = useCallback(() => {
    // Move focus before aria-hidden/inert update so a focused link is never hidden.
    if (mobileNav.current?.contains(document.activeElement)) focusMenuControl();
    openRef.current = false;
    setOpen(false);
  }, [focusMenuControl]);

  const openMenu = () => {
    openRef.current = true;
    setVisible(true);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closeMenu]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const handleBreakpointChange = () => {
      if (desktopBreakpoint.matches && openRef.current) closeMenu();
    };

    desktopBreakpoint.addEventListener("change", handleBreakpointChange);
    return () => desktopBreakpoint.removeEventListener("change", handleBreakpointChange);
  }, [closeMenu]);

  useGSAP(() => {
    if (!header.current) return;

    const scrollState = ScrollTrigger.create({
      start: 24,
      end: 100000,
      toggleClass: { targets: header.current, className: "is-scrolled" },
    });

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.fromTo(".site-logo", { autoAlpha: 0, y: -6 }, {
        autoAlpha: 1, y: 0, duration: 0.45, clearProps: "all",
      });
      timeline.fromTo(".desktop-nav .nav-link", { autoAlpha: 0, y: -8 }, {
        autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.045, clearProps: "all",
      }, 0.04);
      timeline.fromTo(".desktop-booking", { y: -4 }, {
        y: 0, duration: 0.4, clearProps: "all",
      }, 0.16);
    }

    return () => scrollState.kill();
  }, { scope: header });

  useGSAP(() => {
    if (!visible || !mobileNav.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      if (!open) setVisible(false);
      return;
    }

    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
    if (open) {
      timeline.fromTo(mobileNav.current, { height: 0, autoAlpha: 0, y: -8 }, {
        height: "auto", autoAlpha: 1, y: 0, duration: 0.26, clearProps: "all",
      });
      timeline.fromTo(".mobile-nav-link", { autoAlpha: 0, y: -6 }, {
        autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.035, clearProps: "all",
      }, 0.05);
    } else {
      timeline.to(mobileNav.current, {
        height: 0,
        autoAlpha: 0,
        y: -6,
        duration: 0.2,
        onComplete: () => {
          if (!openRef.current) setVisible(false);
        },
      });
    }
  }, { scope: header, dependencies: [open, visible], revertOnUpdate: true });

  return (
    <header ref={header} className="site-header sticky top-0 z-50 border-b border-[#fff0dc]/10 bg-[#790b13]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="site-logo flex items-center" aria-label="Poovar Boating home">
          <Image
            src="/logo.webp"
            alt="Poovar Boating"
            width={130}
            height={40}
            priority
            className="h-auto w-28 brightness-0 invert sm:w-32"
          />
        </Link>

        <nav className="desktop-nav hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                aria-current={active ? "page" : undefined}
                className={`nav-link text-sm font-semibold ${active ? "is-active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="desktop-booking hidden lg:block">
          <Link href="/booking" className="button-primary">
            Book Now
          </Link>
        </div>

        <button
          ref={menuToggle}
          className="rounded-full p-3 text-[#fff0dc] transition hover:bg-[#fff0dc]/10 lg:hidden"
          onClick={() => (openRef.current ? closeMenu() : openMenu())}
          aria-label={open ? "Close main menu" : "Open main menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          type="button"
        >
          {open ? <FaTimes size={19} aria-hidden="true" /> : <FaBars size={19} aria-hidden="true" />}
        </button>
      </div>

      <nav
        ref={mobileNav}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
        className={`${visible ? "block" : "hidden"} overflow-hidden border-t border-[#fff0dc]/15 bg-[#790b13] lg:hidden`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`mobile-nav-link rounded-xl px-4 py-3 text-sm font-semibold transition ${active ? "bg-[#fff0dc]/12 text-[#fff0dc]" : "text-[#fff0dc] hover:bg-[#fff0dc]/8"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/booking" onClick={closeMenu} className="mobile-nav-link button-primary mt-2 w-full">
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
