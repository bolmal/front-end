import { Swiper, SwiperSlide } from 'swiper/react';
import test1 from '../../../public/ㅂㄹㅁㄹ.svg';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

export default function RecommendLogout() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };
    const testObj = [
        { id: 1, url: test1 },
        { id: 2, url: test1 },
        { id: 3, url: test1 },
        { id: 4, url: test1 },
        { id: 5, url: test1 },
        { id: 6, url: test1 },
        { id: 7, url: test1 },
        { id: 8, url: test1 },
        { id: 9, url: test1 },
        { id: 10, url: test1 },
    ];
    return (
        <div className="flex">
            <button className="w-[50px] h-[50px] bg-gray-500 rounded-[50%] z-50" onClick={handlePrev}>
                ←
            </button>
            <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true} slidesPerView={5} onSwiper={setSwiper}>
                {testObj.map((component) => (
                    <SwiperSlide key={component.id}>
                        <Image
                            className="w-[204px] h-[272px] bg-black rounded-[10px]"
                            src={component.url}
                            alt={component.id.toString()}
                        ></Image>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="w-[50px] h-[50px] bg-gray-500 rounded-[50%] z-50" onClick={handleNext}>
                →
            </button>
        </div>
    );
}
