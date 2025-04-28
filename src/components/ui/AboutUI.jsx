import { cn } from "@/lib/utils";
import { AuroraText } from "../magicui/aurora-text";
import { ChevronRight, Instagram } from "lucide-react";
import ab2Video from '/videos/ab2.mp4';
import aboutData from "@/util/about-data.json";

// Discover Coimbatore's Best Salon Services: Our Story
export function HeadingText() {
    // Split by '-' and apply AuroraText to odd indices (the text between '-')
    const parts = (aboutData.heading || "Discover -Coimbatore's- Best Salon -Neofair-").split(/(-[^-]+-)/g);
    return (
        <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl mt-[50px] md:mt-[2%] text-balance text-center md:text-left">
            {parts.map((part, idx) => {
                if (part.startsWith('-') && part.endsWith('-')) {
                    return <AuroraText key={idx}>{part.slice(1, -1)}</AuroraText>;
                }
                return part;
            })}
        </h2>
    );
}

export function AboutMedia() {
    return (
        <div
            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-1 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <video className="rounded-xl object-cover" src={ab2Video} alt="about Us video" autoPlay loop muted playsInline />
            </div>
            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src={aboutData.abtImg.src}
                alt={aboutData.abtImg.alt} />
        </div>
    )
}
