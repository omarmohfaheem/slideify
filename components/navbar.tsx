"use client";
import * as React from "react";
import Image from "next/image";
import NavLink from "./nav-link";
import slideifyLogo from "../public/slideify-logo.png";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [hasShadow, setHasShadow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { title: "Features", path: "features" },
    { title: "FAQs", path: "faq" },
    { title: "Contact", path: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const item = navigation.find((navItem) => navItem.path === id);
    if (item) {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({ top: topPosition, behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white bg-opacity-70 backdrop-blur-md border-b md:border-none ${
        hasShadow ? "shadow" : ""
      }`}
    >
      <nav className="custom-screen">
        <div className="items-center mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-4 md:block">
            <Link href="/">
              <Image
                src={slideifyLogo}
                width={130}
                alt="Slideify Logo"
                priority
              />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium text-sm">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-700 duration-150 hover:text-blue-600"
                  >
                    <button
                      onClick={() => scrollToSection(item.path)}
                      className="block w-full text-left"
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
              <li>
                <NavLink
                  href="/sign-up"
                  className="block py-2.5 px-4 text-center rounded-lg duration-150 font-medium text-sm text-white  bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:shadow-none shadow md:inline"
                >
                  Get Started
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
