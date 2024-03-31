import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const NavLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <Button variant="link" asChild>
      <Link href={href}>{name}</Link>
    </Button>
  );
};

const Navbar = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between py-5 md:flex-row">
        <Link href="/" className="text-xl font-black leading-none">
          <span className="text-primary">VioletTours</span>
          <span className="text-indigo-600">.</span>
        </Link>
        <div className="flex flex-col divide-x-0 divide-y md:flex-row md:divide-x md:divide-y-0">
          <nav className="flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
          </nav>
          <div className="flex items-center justify-center gap-2 pt-4 md:pl-4 md:pt-0">
            <Button asChild className="bg-red-500">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
