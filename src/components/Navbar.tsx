import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navitems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="px-3 py-6 md:py-8 flex justify-center items-center">
      <nav className="bg-primary-light space-x-3 px-8 py-3 rounded-full">
        {/* <ul className="flex space-x-3 px-8 py-3 rounded-full bg-gradient-lilac text-background font-heading tracking-tighter transition"></ul> */}
        {navitems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-body tracking-tighter ${
              location.pathname === item.path
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
