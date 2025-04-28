import React from 'react';
import { HeadingText, AboutMedia } from './ui/AboutUI';
import { ShimmerButton } from './magicui/shimmer-button';
import aboutData from '@/util/about-data.json';

function AboutUs() {
    return (
        <section className="md:mt-20 relative mb-20 scroll-mt-16" id='about'>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <AboutMedia />
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <HeadingText />
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    {aboutData.description}
                                </p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                {aboutData.stats.map((stat, idx) => (
                                    <div key={idx} className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{stat.value}</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">{stat.label}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Know more About us
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
