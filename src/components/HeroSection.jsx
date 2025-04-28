import { ShimmerButton } from "./magicui/shimmer-button";
import { InstaTopText, HeadingText, ScrollHeading, ReviewText, ReviewAvatars } from "./ui/HeroUI";
import VideoSlider from "./VideoSlider";
import AnimatedBackground from "./AnimatedBackground";
import { CalendarCheck2 } from 'lucide-react';

export default function HeroSection() {
    return (
        <section id="hero" className="relative hero-section mt-28 min-h-screen w-full overflow-hidden scroll-mt-16">
            <AnimatedBackground />
            <div className="relative z-10">
                <InstaTopText />
                <HeadingText />
                <ScrollHeading />
                <VideoSlider />
                <div className="flex flex-col items-center justify-center gap-2 mt-10">
                    <ReviewAvatars />
                    <ReviewText />
                </div>
                <div className="flex justify-center mt-10">
                    <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Book Vip Appointment <CalendarCheck2 className="inline ml-2" size={16} />
                        </span>
                    </ShimmerButton>
                </div>
            </div>
        </section>
    );
}








