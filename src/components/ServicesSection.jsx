import { LeafIcon } from "lucide-react";
import { ShimmerButton } from "./magicui/shimmer-button";
import { HeadingText } from "./ui/ServiceUi";
import { ShineBorder } from "./magicui/shine-border";
import AnimatedBackground from "./AnimatedBackground";
import { useState } from "react";
import serviceData from '../util/service-data.json';

const services = serviceData.services;

export default function ServicesSection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (img) => {
        setModalImage(img);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);

    return (
        <section className="relative bg-white/80 md:mt-[5%] scroll-mt-16" id="services">
            <AnimatedBackground />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <HeadingText heading={serviceData.heading} />
                <div className="grid justify-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="max-w-[280px] relative overflow-hidden rounded-2xl shadow-lg bg-white flex flex-col items-center p-6 transition-transform hover:-translate-y-1 hover:shadow-2xl">
                            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                            {service.tag && (
                                <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                    {service.tag}
                                </span>
                            )}
                            <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded-xl mb-4 cursor-pointer" onClick={() => openModal(service.image)} />
                            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                            <ul className="text-gray-500 text-center mb-4 list-disc list-inside space-y-1.5">
                                {service.subServices.map((sub, i) => (
                                    <li key={i} className="list-none flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>{sub}</li>
                                ))}
                            </ul>
                            <ShimmerButton className="shadow-2xl">
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Show All Details <LeafIcon className="inline-block h-4 w-4 text-white" />
                                </span>
                            </ShimmerButton>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative bg-black rounded-lg shadow-lg p-4 max-w-lg w-full flex flex-col items-center">
                        <button onClick={closeModal} className="absolute top-2 right-2 bg-white bg-opacity-80 border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-red-100 text-2xl font-bold shadow-lg transition-all duration-200 z-20">&times;</button>
                        <img src={modalImage} alt="Preview" className="max-h-[70vh] w-auto rounded-lg" />
                    </div>
                </div>
            )}
        </section>
    );
}
