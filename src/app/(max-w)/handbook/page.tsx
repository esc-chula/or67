import Image from 'next/image';
import NextLink from 'next/link';
import { ESCLogoWithText } from '@/components/esc';
import { BackIcon } from '@/assets/icons/back';
import Handbook2 from '@/assets/images/handbook/handbook2.png';
import Handbook3 from '@/assets/images/handbook/handbook3.png';
import Handbook4 from '@/assets/images/handbook/handbook4.png';
import Handbook5 from '@/assets/images/handbook/handbook5.png';

function Header({ children }: { children: string }): JSX.Element {
    return (
        <div className='flex h-fit w-full gap-3'>
            <div className='bg-primary w-fit'>
                <h2 className='text-primary-foreground px-5 py-3 text-lg font-bold md:text-xl lg:px-10 lg:py-5 lg:text-2xl'>
                    {children}
                </h2>
            </div>
            <div className='bg-primary w-3 lg:w-6' />
        </div>
    );
}

function Link({ href }: { href: string }): JSX.Element {
    return (
        <NextLink
            className='text-primary font-semibold underline'
            href={href}
            rel='noreferrer noopener'
            target='_blank'
        >
            {href}
        </NextLink>
    );
}

export default function Handbook(): JSX.Element {
    return (
        <main className='mt-24 flex flex-col justify-center gap-8 pb-12 text-sm md:text-lg lg:mt-0 lg:pb-28 lg:text-2xl'>
            <NextLink className='absolute top-8' href='/'>
                <BackIcon className='stroke-primary size-7 lg:hidden' />
            </NextLink>
            <div className='mb-8 flex w-full flex-col items-center gap-6'>
                <ESCLogoWithText className='lg:hidden' />
                <h1 className='px-10 text-center text-2xl font-semibold lg:text-4xl'>
                    คู่มือการลงทะเบียนเรียนใน REG CHULA
                </h1>
            </div>
            <div className='flex w-full flex-col gap-6'>
                <Header>การตรวจสอบตารางเรียน</Header>
                <ol className='flex list-inside list-decimal flex-col gap-2 px-5'>
                    <li>
                        เข้าเว็บไซต์ <Link href='https://or68.intania.org' />{' '}
                        เพื่อตรวจสอบตารางเรียน
                    </li>
                    <li>
                        กดเลือกเมนู &quot;วิชาที่ลงทะเบียน&quot;
                        เพื่อตรวจสอบวิชาที่นิสิตลงทะเบียนได้
                    </li>
                    <li>
                        โดยจะมีรหัสวิชาสองชุดในหัวข้อ &quot;วิชาลงทะเบียน&quot;
                        คือรหัสกลุ่มรายวิชา และรหัสรายวิชา EXP ENG I
                        ซึ่งนิสิตจะต้องลงทะเบียนเรียนตามรหัส
                        และตอนเรียนที่กำหนดเท่านั้น
                    </li>
                    <li>
                        นิสิตสามารถกดปุ่ม &quot;ดูตารางเรียนใน CU GET REG&quot;{' '}
                        <br />
                        เพื่อสามารถดูตารางเรียนของตนเองในเว็บไซต์{' '}
                        <Link href='https://cugetreg.com' /> ได้
                    </li>
                </ol>
            </div>
            <div className='flex w-full flex-col gap-6'>
                <Header>ขั้นตอนการเข้าสู่ระบบลงทะเบียน</Header>
                <ol className='flex list-inside list-decimal flex-col gap-5 px-5'>
                    <li>
                        ให้นิสิตเข้าเว็ปไซต์{' '}
                        <Link href='https://www2.reg.chula.ac.th/' />
                    </li>
                    <li>
                        ให้นิสิตกรอกข้อมูลโดยใช้รหัสที่ได้รับจาก CU-NET
                        และใส่รหัสภาพ (captcha) และกดปุ่มตกลง
                        <Image
                            alt='Handbook 2'
                            className='w-full'
                            src={Handbook2}
                        />
                    </li>
                    <li>
                        ให้นิสิตเลือกเมนู “ลงปกติ” ในแถบซ้ายมือ
                        และกดปุ่มตกลงตามภาพ
                        <Image
                            alt='Handbook 3'
                            className='w-full'
                            src={Handbook3}
                        />
                    </li>
                </ol>
            </div>
            <div className='flex w-full flex-col gap-6'>
                <Header>การลงทะเบียนเรียน</Header>
                <ol className='flex list-inside flex-col gap-5 px-5 [counter-reset:section]'>
                    <li className="[counter-increment:section] marker:[content:counters(section,'.')'.']">
                        เมื่อเข้าสู่ระบบได้แล้วจะพบหน้าต่างดังรูป
                        <Image
                            alt='Handbook 4'
                            className='w-full'
                            src={Handbook4}
                        />
                    </li>
                    <li className="[counter-increment:section] marker:[content:counters(section,'.')'.']">
                        ให้นิสิตใส่รหัสรายวิชาตามที่แจ้งไป
                        <Image
                            alt='Handbook 5'
                            className='w-full'
                            src={Handbook5}
                        />
                        <ol className='mt-4 flex list-inside list-decimal flex-col gap-2 pl-8 [counter-reset:section]'>
                            <li className="[counter-increment:section] marker:[content:counters(section,'.''.')]">
                                สำหรับกลุ่มรายวิชา ให้นิสิตเปลี่ยนคำว่า{' '}
                                <span className='text-primary font-bold underline'>
                                    เท่านั้น
                                </span>{' '}
                                เป็น{' '}
                                <span className='text-primary font-bold underline'>
                                    G
                                </span>{' '}
                                และใส่รหัสกลุ่มรายวิชาบริเวณสีแดง <br />
                            </li>
                            <li className="[counter-increment:section] marker:[content:counters(section,'.')'.']">
                                สำหรับรายวิชา EXP ENG I (5500111)
                                ให้นิสิตกรอกตอนเรียนของตนเองหน้าช่อง{' '}
                                <span className='text-primary font-semibold underline'>
                                    เท่านั้น
                                </span>{' '}
                                บริเวณสีน้ำเงินและเขียว ตามลำดับ <br />
                            </li>
                            <li className="[counter-increment:section] marker:[content:counters(section,'.')'.']">
                                กดบันทึก
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </main>
    );
}
