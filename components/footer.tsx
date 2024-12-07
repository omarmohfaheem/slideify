import Image from "next/image";
import slideifyLogo from "../public/slideify-logo.png";

export default function Footer() {
  const footerNavs = [
    {
      href: "",
      name: "Terms",
    },
    {
      href: "",
      name: "License",
    },
    {
      href: "",
      name: "Privacy",
    },
    {
      href: "",
      name: "About us",
    },
  ];
  return (
    <footer className="pt-10 ">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <div className="flex justify-center items-center">
            <Image src={slideifyLogo} width={130} alt="Slideify Logo" />
          </div>
          {/* <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="block py-2 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Let&apos;s get started
            </a>
          </div> */}
        </div>
        <p className="text-center mt-4">
          Ready to elevate your presentations? Start using Slideify today!
        </p>
        <div className="mt-10 py-10 border-t text-center items-center justify-between sm:flex">
          <p>© {new Date().getFullYear()} Slideify. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 hover:text-gray-500 duration-150"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
