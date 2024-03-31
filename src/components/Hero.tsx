import Link from "next/link";
import { Button } from "./ui/button";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="bg-white py-8 md:py-32">
      <div className="container mx-auto grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
          <h1 className="text-4xl font-extrabold leading-none text-red-500 md:text-6xl">
            Explore the City with NYUs Finest Tour Guides!
          </h1>
          <p className="text-primary/90 md:mr-16">
            Welcome to VioletTours! Our team of tour guides, made up of current
            NYU students, is here to help you navigate the vibrant streets of
            New York City with ease and energy
          </p>
          <div className="mt-4 flex gap-4">
            <Button asChild className="bg-red-500">
              <Link href="#">Book a Tour</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#">Guide a Tour</Link>
            </Button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;h=1603&amp;q=80"
          className="rounded-xl shadow"
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
