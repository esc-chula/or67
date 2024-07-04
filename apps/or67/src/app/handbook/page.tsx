import Image from 'next/image';
import Link from 'next/link';
import Handbook1 from '@/assets/images/handbook/handbook1.png';
import Handbook2 from '@/assets/images/handbook/handbook2.png';
import Handbook3 from '@/assets/images/handbook/handbook3.png';
import Handbook4 from '@/assets/images/handbook/handbook4.png';
import Handbook5 from '@/assets/images/handbook/handbook5.png';

export default function Handbook(): JSX.Element {
    return (
        <main>
            <div>
                <h1>คู่มือการลงทะเบียนเรียนใน REG CHULA</h1>
            </div>
            <div>
                <h2>ตรวจสอบตารางเรียน</h2>
                <ol className='list-inside list-decimal'>
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
                        โดยจะมีรหัสรายวิชา EXP ENG I
                        ซึ่งนิสิตจะต้องลงทะเบียนเรียนตามรหัส
                        และตอนเรียนที่กำหนดเท่านั้น
                    </li>
                    <li>
                        นิสิตสามารถเลือกเมนู &quot;ตารางเรียน&quot;
                        เพื่อดูตารางเรียนของตัวเองได้
                    </li>
                </ol>
            </div>
            <div>
                <h2>เข้าสู่ระบบลงทะเบียน</h2>
                <ol className='list-inside list-decimal'>
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
                        <Image alt='Handbook 1' src={Handbook1} />
                    </div>
                    <li>
                        ให้นิสิตกรอกข้อมูลโดยใช้รหัสที่ได้รับจาก CU-NET
                        และใส่รหัสภาพ (captcha) และกดปุ่มตกลง
                    </li>
                    <div>
                        <Image alt='Handbook 2' src={Handbook2} />
                    </div>
                    <li>
                        ให้นิสิตเลือกเมนู “ลงปกติ” ในแถบซ้ายมือ
                        และกดปุ่มตกลงตามภาพ
                    </li>
                    <div>
                        <Image alt='Handbook 3' src={Handbook3} />
                    </div>
                </ol>
            </div>
            <div>
                <h2>ลงทะเบียนเรียน</h2>
                <ol className='list-inside list-decimal'>
                    <li>เมื่อเข้าสู่ระบบได้แล้วจะพบหน้าต่างดังรูป</li>
                    <div>
                        <Image alt='Handbook 4' src={Handbook4} />
                    </div>
                    <li>ให้นิสิตใส่รหัสรายวิชาตามที่แจ้งไป</li>
                    <div>
                        <Image alt='Handbook 5' src={Handbook5} />
                    </div>
                    <li>
                        สำหรับกลุ่มรายวิชา ให้นิสิตเปลี่ยนคำว่า “เท่านั้น” เป็น
                        G และใส่รหัสกลุ่มรายวิชาบริเวณสีแดง
                    </li>
                    <li>
                        สำหรับรายวิชา EXP ENG I (5500111)
                        ให้นิสิตกรอกตอนเรียนของตนเองหน้าช่อง “เท่านั้น”
                        บริเวณสีน้ำเงิน และเขียวตามลำดับ
                    </li>
                    <li>กดบันทึก</li>
                </ol>
            </div>
        </main>
    );
}
