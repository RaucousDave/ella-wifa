"use client"
import Link from "next/link"
import {usePathname} from "next/navigation";

export default function Navbar() {
  const location = usePathname();
  const navitems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="px-3 py-6 md:py-8 flex bg-background justify-center items-center">
      <nav className="bg-primary-light space-x-3 px-8 py-3 rounded-full">
        {/* <ul className="flex space-x-3 px-8 py-3 rounded-full bg-gradient-lilac text-background font-heading tracking-tighter transition"></ul> */}
        {navitems.map((item) => (
          <Link
              key={item.path}
            href={item.path}
            className={`font-body tracking-tighter ${
              location === item.path
                ? "text-primary-light bg-background rounded-full p-3"
                : "text-background"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
