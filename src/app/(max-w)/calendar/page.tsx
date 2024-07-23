'use client';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { FacebookIcon } from '@/assets/icons/facebook';
import { InstagramIcon } from '@/assets/icons/instagram';
import Calendar1 from '@/assets/images/calendar/calendar_1.png';
import Calendar2 from '@/assets/images/calendar/calendar_2.png';
import CalendarCarousel1 from '@/assets/images/calendar/calendarCarousel_1.png';
import CalendarCarousel2 from '@/assets/images/calendar/calendarCarousel_2.png';
import CalendarCarousel3 from '@/assets/images/calendar/calendarCarousel_3.png';

const calendarCarousel: { src: StaticImageData }[] = [
    {
        src: CalendarCarousel1,
    },
    {
        src: CalendarCarousel2,
    },
    {
        src: CalendarCarousel3,
    },
];

export default function Page(): JSX.Element {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (api) {
                if (api.canScrollNext()) api.scrollNext();
                else api.scrollTo(0);
            }
        }, 5000);
        return () => {
            clearInterval(timer);
        };
    }, [api]);

    return (
        <main className='flex flex-col items-center'>
            <h2 className='mb-12 text-center text-2xl font-semibold md:text-4xl'>
                ปฏิทินคณะ
            </h2>
            <div className='grid w-full max-w-sm grid-cols-1 gap-5 md:max-w-none md:grid-cols-3'>
                <Link
                    className='text-base'
                    href='https://www.instagram.com/p/C8ZjLTjuMQD/?hl=en&img_index=1'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <div className='z-0'>
                        <Carousel orientation='horizontal' setApi={setApi}>
                            <CarouselContent>
                                {calendarCarousel.map((item, index) => (
                                    <CarouselItem
                                        className='h-full w-full'
                                        key={`carousel-${index + 1}`}
                                    >
                                        <Image alt='' src={item.src} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className='flex justify-center pt-4'>
                        {calendarCarousel.map((_, index) => (
                            <Button
                                className={`${
                                    current === index + 1
                                        ? 'bg-gray-800'
                                        : 'bg-gray-300'
                                } m-1 h-2 w-2 rounded-full`}
                                key={`calendar-${index + 1}`}
                                onClick={() => api?.scrollTo(index)}
                            />
                        ))}
                    </div>
                    <p className='mb-12 mt-4 px-2 text-start'>
                        📍 ขอเชิญชวนให้นิสิตใหม่ Intania 108 ทุกคนเข้ากลุ่ม
                        Facebook และ LINE OpenChat เพื่อติดตามข่าวสาร ประกาศ
                        และกิจกรรมต่าง ๆ ภายในวิศวฯ จุฬาฯ กันนะ
                        <br />
                        <br />
                        🚨 ชาว Intania 108
                        ทุกคนอย่าลืมกรอกแบบฟอร์มนิสิตใหม่ก่อนที่จะขอเข้ากลุ่มกันด้วยนะ
                        ✨<br />
                        👉
                        <Link
                            className='z-50 underline'
                            href='https://intania.link/108-entry-form'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            https://intania.link/108-entry-form
                        </Link>
                    </p>
                </Link>
                <Link
                    className='h-full w-full items-center text-base'
                    href='https://www.instagram.com/p/C8ZICCbyOsx/?hl=en&img_index=2'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <Image alt='' src={Calendar1} />
                    <p className='mb-12 mt-4 px-2 text-start'>
                        📣 กำหนดการกิจกรรมสำหรับนิสิตวิศวฯ ⚙️🗓️
                        <br />
                        <br />
                        ชาว Intania 108
                        ทุกคนจะได้เจอกับกิจกรรมต่างมากมายและพบเพื่อนทั้งในและนอกคณะ
                        บอกเลยว่าห้ามพลาดทุกกิจกรรมเลย !
                    </p>
                </Link>
                <Link
                    className='text-base'
                    href='https://www.instagram.com/p/C9CTl_atg6q/?hl=en'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <Image alt='' src={Calendar2} />
                    <p className='mb-12 mt-4 px-2 text-start'>
                        📣 กำหนดการการลงทะเบียนนิสิตใหม่ ภาคการศึกษาต้น
                        ปีการศึกษา 2567 ⚙️📚 [รหัส 67]
                    </p>
                </Link>
            </div>
            <div className='flex flex-col items-center md:m-20'>
                <h3>ติดตามข่าวสารเพิ่มเติมได้ที่</h3>
                <div className='m-4 flex flex-row gap-x-5'>
                    <Link
                        href='https://www.facebook.com/escchula'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <FacebookIcon height={52} width={52} />
                    </Link>
                    <Link
                        href='https://www.instagram.com/escchula/?hl=en'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <InstagramIcon height={52} width={52} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
