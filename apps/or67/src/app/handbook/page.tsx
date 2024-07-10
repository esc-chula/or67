import Image from 'next/image';
import Link from 'next/link';
import { ESCLogoWithText } from '@ui/components/esc';
import { BackIcon } from '@/assets/icons/back';
import Handbook1 from '@/assets/images/handbook/handbook1.png';
import Handbook2 from '@/assets/images/handbook/handbook2.png';
import Handbook3 from '@/assets/images/handbook/handbook3.png';
import Handbook4 from '@/assets/images/handbook/handbook4.png';
import Handbook5 from '@/assets/images/handbook/handbook5.png';

export default function Handbook(): JSX.Element {
    return (
        <main className='text-medium flex flex-col justify-center space-y-16 pb-16 font-medium lg:pb-32 lg:text-2xl'>
            <Link href='/'>
                <BackIcon className='lg:hidde stroke-primary size-7 items-start' />
            </Link>
            <div className='flex w-full max-w-screen-lg flex-col items-center space-y-8 lg:space-y-0 lg:pt-0'>
                <div className='lg:hidden'>
                    <ESCLogoWithText />
                </div>
                <h1 className='px-10 text-center text-2xl font-bold lg:text-4xl'>
                    คู่มือการลงทะเบียนเรียนใน REG CHULA
                </h1>
            </div>
            <div className='w-full space-y-8 lg:space-y-10'>
                <div className='flex h-fit w-full flex-row space-x-3'>
                    <div
                        className='w-fit'
                        style={{ backgroundColor: '#821923' }}
                    >
                        <h2 className='px-5 py-2 text-lg font-bold text-white lg:px-10 lg:py-5 lg:text-2xl'>
                            การตรวจสอบตารางเรียน
                        </h2>
                    </div>
                    <div
                        className='w-3'
                        style={{ backgroundColor: '#821923' }}
                    />
                </div>
                <ol className='list-decimal space-y-2 px-10 lg:px-24'>
                    <li>
                        เข้าเว็บไซต์{' '}
                        <Link
                            className='underline'
                            href='https://or67.chula.engineering'
                        >
                            https://or67.chula.engineering
                        </Link>{' '}
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
                        <Link
                            className=' font-bold underline'
                            href='https://cugetreg.com'
                            style={{ color: '#821923' }}
                        >
                            https://cugetreg.com
                        </Link>{' '}
                        ได้
                    </li>
                </ol>
            </div>
            <div className='w-full space-y-8 lg:space-y-10'>
                <div className='flex h-fit w-full flex-row space-x-3'>
                    <div
                        className='w-fit'
                        style={{ backgroundColor: '#821923' }}
                    >
                        <h2 className='px-5 py-2 text-lg font-bold text-white lg:px-10 lg:py-5 lg:text-2xl'>
                            ขั้นตอนการเข้าสู่ระบบลงทะเบียน
                        </h2>
                    </div>
                    <div
                        className='w-3'
                        style={{ backgroundColor: '#821923' }}
                    />
                </div>
                <ol className='list-decimal space-y-2 px-10 lg:px-24'>
                    <li>
                        ให้นิสิตเข้าเว็ปไซต์{' '}
                        <Link
                            className='underline'
                            href='https://www.reg.chula.ac.th'
                            rel='noreferrer'
                            target='_blank'
                        >
                            www.reg.chula.ac.th
                        </Link>{' '}
                        และกดเข้าสู่ระบบ
                    </li>
                    <div>
                        <Image
                            alt='Handbook 1'
                            className='w-full pb-8 pt-3 lg:pb-16 lg:pt-6'
                            src={Handbook1}
                        />
                    </div>
                    <li>
                        ให้นิสิตกรอกข้อมูลโดยใช้รหัสที่ได้รับจาก CU-NET
                        และใส่รหัสภาพ (captcha) และกดปุ่มตกลง
                    </li>
                    <div>
                        <Image
                            alt='Handbook 2'
                            className='w-full pb-8 pt-3 lg:pb-16 lg:pt-6'
                            src={Handbook2}
                        />
                    </div>
                    <li>
                        ให้นิสิตเลือกเมนู “ลงปกติ” ในแถบซ้ายมือ
                        และกดปุ่มตกลงตามภาพ
                    </li>
                    <div>
                        <Image
                            alt='Handbook 3'
                            className='w-full pt-3 lg:pt-6'
                            src={Handbook3}
                        />
                    </div>
                </ol>
            </div>
            <div className='w-full space-y-8 lg:space-y-10'>
                <div className='flex h-fit w-full flex-row space-x-3'>
                    <div
                        className='w-fit'
                        style={{ backgroundColor: '#821923' }}
                    >
                        <h2 className='px-5 py-2 text-lg font-bold text-white lg:px-10 lg:py-5 lg:text-2xl'>
                            การลงทะเบียนเรียน
                        </h2>
                    </div>
                    <div
                        className='w-3'
                        style={{ backgroundColor: '#821923' }}
                    />
                </div>
                <ol className='list-decimal space-y-2 px-10 lg:px-24'>
                    <li>เมื่อเข้าสู่ระบบได้แล้วจะพบหน้าต่างดังรูป</li>
                    <div>
                        <Image
                            alt='Handbook 4'
                            className='w-full pb-8 pt-3 lg:pb-16 lg:pt-6'
                            src={Handbook4}
                        />
                    </div>
                    <li>ให้นิสิตใส่รหัสรายวิชาตามที่แจ้งไป</li>
                    <div>
                        <Image
                            alt='Handbook 5'
                            className='w-full pb-8 pt-3 lg:pb-16 lg:pt-6'
                            src={Handbook5}
                        />
                    </div>
                    <ol className='space-y-4 px-6 lg:px-16'>
                        <li>
                            2.1 สำหรับกลุ่มรายวิชา ให้นิสิตเปลี่ยนคำว่า{' '}
                            <span
                                className='font-bold underline'
                                style={{ color: '#821923' }}
                            >
                                เท่านั้น
                            </span>{' '}
                            เป็น{' '}
                            <span
                                className='font-bold underline'
                                style={{ color: '#821923' }}
                            >
                                G
                            </span>{' '}
                            และใส่รหัสกลุ่มรายวิชาบริเวณสีแดง <br />
                        </li>
                        <li>
                            2.2 สำหรับรายวิชา EXP ENG I (5500111)
                            ให้นิสิตกรอกตอนเรียนของตนเองหน้าช่อง{' '}
                            <span
                                className='font-bold underline'
                                style={{ color: '#821923' }}
                            >
                                เท่านั้น
                            </span>{' '}
                            บริเวณสีน้ำเงินและเขียว ตามลำดับ <br />
                        </li>
                        <li>2.3 กดบันทึก</li>
                    </ol>
                </ol>
            </div>
        </main>
    );
}
