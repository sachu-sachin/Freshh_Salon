import { AuroraText } from "../magicui/aurora-text";

export function HeadingText({ heading }) {
    // Split by '-' and apply AuroraText to odd indices (the text between '-')
    const parts = (heading || "Pamper Yourself with -Our Top Services-").split(/(-[^-]+-)/g);
    return (
        <h2 className="md:mb-10 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl text-balance text-center pb-6">
            {parts.map((part, idx) => {
                if (part.startsWith('-') && part.endsWith('-')) {
                    return <AuroraText key={idx}>{part.slice(1, -1)}</AuroraText>;
                }
                return part;
            })}
        </h2>
    );
}
