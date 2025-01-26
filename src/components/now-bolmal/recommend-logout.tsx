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
        { id: 1, url: test1, tag: '1차 티켓 오픈' },
        { id: 2, url: test1, tag: '팬클럽 선예매' },
        { id: 3, url: test1, tag: '팬클럽 선예매' },
        { id: 4, url: test1, tag: '1차 티켓 오픈' },
        { id: 5, url: test1, tag: '팬클럽 선예매' },
        { id: 6, url: test1, tag: '1차 티켓 오픈' },
        { id: 7, url: test1, tag: '팬클럽 선예매' },
        { id: 8, url: test1, tag: '1차 티켓 오픈' },
        { id: 9, url: test1, tag: '팬클럽 선예매' },
        { id: 10, url: test1, tag: '1차 티켓 오픈' },
    ];
    return (
        <div className="relative w-full">
            <div className="flex justify-between">
                <button
                    className="absolute left-[-2%] top-[136px] -translate-y-1/2 w-[50px] h-[50px] rounded-[50%] z-50 bg-white shadow-[0_0_10px_rgba(99,99,99,0.2)]"
                    onClick={handlePrev}
                >
                    {'<'}
                </button>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={5}
                    onSwiper={setSwiper}
                    spaceBetween={50}
                    className="w-full flex justify-between"
                >
                    {testObj.map((component) => (
                        <SwiperSlide key={component.id} className="w-[20%]">
                            <div className="flex flex-col items-center">
                                <Image
                                    className="w-[204px] h-[272px] bg-black rounded-[10px]"
                                    src={component.url}
                                    alt={component.id.toString()}
                                ></Image>
                                <div className="w-[204px] mt-[20px]">
                                    <div className="py-[9px] px-[10px] border-primary border-[2px] rounded-[10px] w-[8.54vw] mb-[10px] flex gap-[7px]">
                                        <Image className="w-[20px] h-[20px]" src={test1} alt="시간"></Image>
                                        <div className="text-[15px] font-[700] text-primary">{component.tag}</div>
                                    </div>
                                    <div className="mb-[6px] text-[20px] font-[700] text-primary">
                                        2024.01.09(목) 12PM
                                    </div>
                                    <div className="text-black text-[18px] font-[700]">2025 JUNIEL CONert..</div>
                                    <div className="text-[#AEAEAE] text-[15px] font-[500]">2025.01.25</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="absolute right-[-2%] top-[136px] -translate-y-1/2 w-[50px] h-[50px] bg-white shadow-[0_0_10px_rgba(99,99,99,0.2)] rounded-[50%] z-50"
                    onClick={handleNext}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}
