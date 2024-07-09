'use client';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@ui/components/ui/carousel';
import { FacebookIcon } from '@/assets/icons/facebook';
import { InstagramIcon } from '@/assets/icons/instagram';
import Calendar_1 from '@/assets/images/calendar/calendar_1.png';
import Calendar_2 from '@/assets/images/calendar/calendar_2.png';
import CalendarCarousel_1 from '@/assets/images/calendar/calendarCarousel_1.png';
import CalendarCarousel_2 from '@/assets/images/calendar/calendarCarousel_2.png';
import CalendarCarousel_3 from '@/assets/images/calendar/calendarCarousel_3.png';

const calendarCarousel: { src: StaticImageData }[] = [
    {
        src: CalendarCarousel_1,
    },
    {
        src: CalendarCarousel_2,
    },
    {
        src: CalendarCarousel_3,
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

    return (
        <main className=''>
            <h2 className='mb-12 text-center text-2xl font-semibold lg:text-4xl'>
                ปฏิทินคณะ
            </h2>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 w-full'>
                <article className='text-base '>
                    <div className='z-0'>
                        <Carousel orientation='horizontal' setApi={setApi}>
                            <CarouselContent>
                                {calendarCarousel.map((item, index) => (
                                    <CarouselItem key={index}
                                    className=''>
                                        <Image
                                            src={item.src}
                                            alt='_blank'
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <p className='mt-4 mb-12 px-2 text-start'>
                        📍 ขอเชิญชวนให้นิสิตใหม่ Intania 108 ทุกคนเข้ากลุ่ม
                        Facebook และ LINE OpenChat เพื่อติดตามข่าวสาร ประกาศ
                        และกิจกรรมต่าง ๆ ภายในวิศวฯ จุฬาฯ กันนะ
                        <br />
                        <br />
                        🚨 ชาว Intania 108
                        ทุกคนอย่าลืมกรอกแบบฟอร์มนิสิตใหม่ก่อนที่จะขอเข้ากลุ่มกันด้วยนะ
                        ✨<br />
                        👉
                        <a
                            href='https://intania.link/108-entry-form'
                            className='underline'
                        >
                            https://intania.link/108-entry-form
                        </a>
                    </p>
                </article>
                <article className='text-base w-full h-full items-center'>
                    <Image
                        src={Calendar_1}
                        alt='_blank'
                    />
                    <p className='mt-4 mb-12 px-2 text-start'>
                        📣 กำหนดการกิจกรรมสำหรับนิสิตวิศวฯ ⚙️🗓️
                        <br />
                        <br />
                        ชาว Intania 108
                        ทุกคนจะได้เจอกับกิจกรรมต่างมากมายและพบเพื่อนทั้งในและนอกคณะ
                        บอกเลยว่าห้ามพลาดทุกกิจกรรมเลย !
                    </p>
                </article>
                <article className='text-base'>
                    <Image
                        src={Calendar_2}
                        alt='_blank'
                    />
                    <p className='mt-4 mb-12 px-2 text-start'>
                        📣 กำหนดการการลงทะเบียนนิสิตใหม่ ภาคการศึกษาต้น
                        ปีการศึกษา 2567 ⚙️📚 [รหัส 67]
                    </p>
                </article>
            </div>
            <div className='flex flex-col items-center lg:m-20'>
                <h3>ติดตามข่าวสารเพิ่มเติมได้ที่</h3>
                <div className='m-4 flex flex-row gap-x-5'>
                    <Link href={'https://www.facebook.com/escchula'}>
                        <FacebookIcon width={52} height={52} />
                    </Link>
                    <Link href={'https://www.instagram.com/escchula/?hl=en'}>
                        <InstagramIcon width={52} height={52} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
