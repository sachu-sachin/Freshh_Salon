import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import reviews from "@/util/business-reviews.json";
import { AuroraText } from "./magicui/aurora-text";
import { useState } from "react";

const filteredReviews = reviews.filter(r => r.rating > 4);
const firstRow = filteredReviews.slice(0, Math.ceil(filteredReviews.length / 2));
const secondRow = filteredReviews.slice(Math.ceil(filteredReviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
  date,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-xs">{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section id="reviews" className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10 md:mt-[5%] scroll-mt-16">
        <HeadingText />
      <Marquee pauseOnHover className="[--duration:120s]">
        {firstRow.map((review,i) => (
          <ReviewCard key={review.username + i} {...review} />
          
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:120s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </section>
  );
}



export function HeadingText() {
    return (
        <>
            <h2 className="mb-10 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl mt-[50px] md:mt-[2%] text-balance text-center md:text-left">
                See <AuroraText>Our Customer's</AuroraText> Valuable <AuroraText>Comments</AuroraText>
            </h2>
        </>
    );
}