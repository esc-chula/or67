import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@ui/components/ui/carousel';
import { FacebookIcon } from '@/assets/icons/facebook';
import Calendar_1 from '@/assets/images/calendar/calendar_1.png';
import Calendar_2 from '@/assets/images/calendar/calendar_2.png';

const calendarCarousel: { src: StaticImageData }[] = [
    {
        src: Calendar_1
    },
    {
        src: Calendar_1
    },
    {
        src: Calendar_1
    }
];

export default function Page(): JSX.Element {
    return (
        <main className=''>
            <h2 className='text-center text-2xl lg:text-4xl font-semibold'>ปฏิทินคณะ</h2>
            <div className='flex flex-col items-center'>
                <article className='flex flex-col justify-center'>
                    <Carousel orientation='horizontal'>
                        <CarouselContent>
                            {
                                calendarCarousel.map((item, index) => (
                                    <CarouselItem key={index}>
                                        <Image src={item.src} width={393} height={393} alt="_blank"/>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    </Carousel>
                    <p>
                    📍 ขอเชิญชวนให้นิสิตใหม่ Intania 108 ทุกคนเข้ากลุ่ม Facebook และ LINE OpenChat เพื่อติดตามข่าวสาร ประกาศ และกิจกรรมต่าง ๆ ภายในวิศวฯ จุฬาฯ กันนะ<br/><br/>🚨 ชาว Intania 108 ทุกคนอย่าลืมกรอกแบบฟอร์มนิสิตใหม่ก่อนที่จะขอเข้ากลุ่มกันด้วยนะ ✨<br/>👉 
                    <a href="https://intania.link/108-entry-form" className='underline'>https://intania.link/108-entry-form</a> 
                    </p>
                </article>
                <article>
                    <Image src={Calendar_1} width={393} height={393} alt="_blank"/>
                    <p>
                    📣 กำหนดการกิจกรรมสำหรับนิสิตวิศวฯ ⚙️🗓️<br/><br/>ชาว Intania 108 ทุกคนจะได้เจอกับกิจกรรมต่างมากมายและพบเพื่อนทั้งในและนอกคณะ บอกเลยว่าห้ามพลาดทุกกิจกรรมเลย !
                    </p>
                </article>
                <article>
                    <Image src={Calendar_2} width={393} height={393} alt="_blank"/>
                    <p>
                        📣 กำหนดการการลงทะเบียนนิสิตใหม่ ภาคการศึกษาต้น ปีการศึกษา 2567 ⚙️📚 [รหัส 67]
                    </p>
                </article>
            </div>
            <div className='flex flex-col items-center'>
                <h3>ติดตามข่าวสารเพิ่มเติมได้ที่</h3>
                <div className='flex flex-row gap-x-4'>
                    <Link href={
                        "https://www.facebook.com/escchula"
                    }>
                        <FacebookIcon width={52} height={52}/>
                    </Link>
                    <Link href={"https://www.instagram.com/escchula/?hl=en"}>
                        <FacebookIcon width={52} height={52}/>
                    </Link>
                </div>
            </div>
        </main>
    );
}
