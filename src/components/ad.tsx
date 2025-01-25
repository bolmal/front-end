'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import test1 from '../../public/ㅂㄹㅁㄹ.svg';
import test2 from '../../public/ㅂㄹㅁㄹ.svg';
import test3 from '../../public/ㅂㄹㅁㄹ.svg';
import test4 from '../../public/ㅂㄹㅁㄹ.svg';
import test5 from '../../public/ㅂㄹㅁㄹ.svg';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Ad() {
    const testObj = [
        { id: '1', url: test1 },
        { id: '2', url: test2 },
        { id: '3', url: test3 },
        { id: '4', url: test4 },
        { id: '5', url: test5 },
    ];
    return (
        <div>
            <div className="rounded-[20px] bg-white w-[894px] h-[320px]">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // 사용할 모듈
                    // (Navigation : 이전/다음 버튼, Pagintation : 페이지 표시)
                    navigation // Prev Next 버튼
                    pagination={{ clickable: true }} // 페이지네이션 버튼 눌렀을 때 이동 가능
                    autoplay={{ delay: 3000 }} // 자동재생
                    loop={true} // 반복 여부
                >
                    {testObj.map((ad, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center h-full">
                                {ad.url ? (
                                    <Image className="w-[894px] h-[320px]" src={ad.url} alt={ad.id} />
                                ) : (
                                    <>없음</>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>점선</div>
        </div>
    );
}
