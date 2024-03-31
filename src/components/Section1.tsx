/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "./ui/button";

type CardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const Card = ({ title, description, image, href }: CardProps) => {
  return (
    <div className="bg-card overflow-hidden rounded-2xl shadow">
      <div className="flex h-full flex-col gap-8 p-4 text-center md:text-start">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <img
            src={image}
            alt="card image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="text-card-foreground text-2xl font-semibold">
            {title}
          </h3>
          <p className="text-card-foreground mt-4 text-base">{description}</p>
        </div>
        <Button className="mt-auto w-full hover:bg-red-500" asChild>
          <Link href={href}>Book now</Link>
        </Button>
      </div>
    </div>
  );
};

const items: CardProps[] = [
  {
    title: "Architecture Tour",
    description:
      "Dive into the heart of the city's architectural wonders with our architecture tour.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hudson_Yards_Plaza_March_2019_53.jpg",
    href: "#",
  },
  {
    title: "Street Art Tour",
    description:
      "Join our Street Art Tour for a vibrant journey through the city's most colorful streets. Discover hidden masterpieces and iconic murals, learn about the artists and their unique expressions.",
    image:
      "https://www.guggenheim.org/wp-content/uploads/2020/12/gen-blog-nyc-to-art.jpg",
    href: "#",
  },
  {
    title: "Hidden Gem Tour",
    description:
      "Our Hidden Gems Tour invites you on a unique adventure to explore the city's most closely guarded secrets. Experience enchanting hideaways, cultural spots, and the stories behind hidden doors.",
    image:
      "https://wp-tid.zillowstatic.com/streeteasy/2/hidden-streets-in-nyc-pomander-walk-42daf8.jpeg",
    href: "#",
  },
];

const Section1 = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto space-y-16">
        <h2 className="text-primary w-full text-center text-4xl font-semibold md:text-5xl">
          Explore our Tours
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
