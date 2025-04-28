import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { HeadphoneOff, Headphones } from "lucide-react";
import heroData from "../util/hero-data.json";

export default function VideoSlider() {
    const [unmutedIdx, setUnmutedIdx] = useState(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video) video.muted = !(unmutedIdx === idx);
        });
    }, [unmutedIdx]);

    return (
        <div className="w-full max-w-[70vw] md:max-w-[400px] mx-auto aspect-[9/16] min-h-[400px] max-h-[80vh] flex items-center justify-center mt-10">
            <Swiper
                effect="cards"
                grabCursor={true}
                pagination={{ clickable: true }}
                mousewheel
                modules={[EffectCards, Pagination, Mousewheel]}
                className="w-full h-full rounded-xl shadow-lg"
                style={{ touchAction: "pan-x" }}
                touchReleaseOnEdges={true}
                direction="horizontal"
                passiveListeners={false}
                allowTouchMove={true}
                onTouchStart={(e) => {
                    const touch = e.touches ? e.touches[0] : null;
                    if (touch) {
                        let startY = touch.clientY;
                        let startX = touch.clientX;
                        let moved = false;
                        const moveHandler = (moveEvent) => {
                            const moveTouch = moveEvent.touches[0];
                            const diffY = Math.abs(moveTouch.clientY - startY);
                            const diffX = Math.abs(moveTouch.clientX - startX);
                            if (!moved && diffY > diffX && diffY > 10) {
                                moveEvent.stopPropagation();
                                moveEvent.preventDefault = () => {};
                                document.removeEventListener('touchmove', moveHandler);
                            }
                            moved = true;
                        };
                        document.addEventListener('touchmove', moveHandler, { passive: false });
                        document.addEventListener('touchend', () => {
                            document.removeEventListener('touchmove', moveHandler);
                        }, { once: true });
                    }
                }}
            >
                {heroData.videoSlider.map((video, idx) => (
                    <SwiperSlide key={idx} className="flex items-center justify-center w-full h-full">
                        <div className="w-full h-full flex items-center justify-center relative">
                            <video
                                ref={el => videoRefs.current[idx] = el}
                                src={video.src}
                                className="w-full h-full object-cover rounded-xl"
                                autoPlay
                                loop
                                muted={unmutedIdx !== idx}
                                playsInline
                            />
                            <button
                                className="absolute bottom-3 right-3 bg-black/60 rounded-full p-2 z-20 hover:bg-black/80 flex items-center justify-center"
                                onClick={() => setUnmutedIdx(unmutedIdx === idx ? null : idx)}
                                aria-label={unmutedIdx === idx ? "Mute" : "Unmute"}
                            >
                                {unmutedIdx === idx ? (
                                    <Headphones color="#ffffff"/>
                                ) : (
                                    <HeadphoneOff color="#ffffff" />
                                )}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
