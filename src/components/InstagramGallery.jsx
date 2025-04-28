import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import { ArrowUpRight } from "lucide-react";
import galleryData from '../util/gallery-data.json';

export default function InstagramGallery() {
    return (
        <section id="gallery" className="py-12 bg-base-100">
            <div className="container mx-auto px-4">
                <HeadingText heading={galleryData.heading} />
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance] iframe-insta">
                    {galleryData.posts.map((post, idx) => (
                        <div key={idx} className="mb-4 break-inside-avoid">
                            <iframe
                                src={post.src}
                                className="rounded-lg shadow-lg w-full min-h-[480px] h-full"
                                allowtransparency="true"
                                frameBorder="0"
                                scrolling="no"
                                title={post.title || `Instagram Post ${idx + 1}`}
                                hideCaption="true"
                                allowFullScreen="true"
                            ></iframe>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <ShimmerButton className="shadow-2xl" onClick={() => window.open(galleryData.instagramLink, '_blank')}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            {galleryData.buttonText} <ArrowUpRight className="inline" size={16} />
                        </span>
                    </ShimmerButton>
                </div>
            </div>
        </section>
    );
}

export function HeadingText({ heading }) {
    // Split by '-' and apply AuroraText to odd indices (the text between '-')
    const parts = (heading || "Discover Our -Instagram Gallery-").split(/(-[^-]+-)/g);
    return (
        <>
            <h2 className="mb-10 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl mt-[50px] md:mt-[2%] text-balance text-center md:text-left">
                {parts.map((part, idx) => {
                    if (part.startsWith('-') && part.endsWith('-')) {
                        return <AuroraText key={idx}>{part.slice(1, -1)}</AuroraText>;
                    }
                    return part;
                })}
            </h2>
        </>
    );
}