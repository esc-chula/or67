import Handbook1 from '@/assets/images/handbook/handbook1.png';
import Handbook2 from '@/assets/images/handbook/handbook2.png';
import Handbook3 from '@/assets/images/handbook/handbook3.png';
import Handbook4 from '@/assets/images/handbook/handbook4.png';
import Handbook5 from '@/assets/images/handbook/handbook5.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Handbook(): JSX.Element {
    return (
    <main>
        <div>
            <h1>คู่มือการลงทะเบียนเรียนใน REG CHULA</h1>
        </div>
        <div>
            <h2>ตรวจสอบตารางเรียน</h2>
            <ol className='list-decimal list-inside'>
                <li>
                    เข้าเว็บไซต์{' '}
                    <Link
                        href="https://or67.chula.engineering"
                        className="underline"
                    >
                        https://or67.chula.engineering
                    </Link>{' '}
                    เพื่อตรวจสอบตารางเรียน
                </li>
                <li>
                    กดเลือกเมนู "วิชาที่ลงทะเบียน" เพื่อตรวจสอบวิชาที่นิสิตลงทะเบียนได้
                </li>
                <li>
                    โดยจะมีรหัสรายวิชา EXP ENG I ซึ่งนิสิตจะต้องลงทะเบียนเรียนตามรหัส และตอนเรียนที่กำหนดเท่านั้น
                </li>
                <li>
                    นิสิตสามารถเลือกเมนู "ตารางเรียน" เพื่อดูตารางเรียนของตัวเองได้
                </li>   
            </ol>
        </div>
        <div>
            <h2>เข้าสู่ระบบลงทะเบียน</h2>
            <ol className='list-decimal list-inside'>
                <li>
                    ให้นิสิตเข้าเว็ปไซต์{' '}
                    <Link
                        href="https://www.reg.chula.ac.th"
                        className="underline"
                        rel="noreferrer"
                        target="_blank"
                    >
                        www.reg.chula.ac.th
                    </Link>{' '}
                    และกดเข้าสู่ระบบ
                </li>
                <div>
                    <Image src={Handbook1} alt="Handbook 1" />
                </div>
                <li>
                    ให้นิสิตกรอกข้อมูลโดยใช้รหัสที่ได้รับจาก CU-NET และใส่รหัสภาพ (captcha) และกดปุ่มตกลง
                </li>
                <div>
                    <Image src={Handbook2} alt="Handbook 2" />
                </div>
                <li>
                    ให้นิสิตเลือกเมนู “ลงปกติ” ในแถบซ้ายมือ และกดปุ่มตกลงตามภาพ
                </li>
                <div>
                    <Image src={Handbook3} alt="Handbook 3" />
                </div>
            </ol>
        </div>
        <div>
            <h2>ลงทะเบียนเรียน</h2>
            <ol className='list-decimal list-inside'>
                <li>
                    เมื่อเข้าสู่ระบบได้แล้วจะพบหน้าต่างดังรูป
                </li>
                <div>
                    <Image src={Handbook4} alt="Handbook 4" />
                </div>
                <li>
                    ให้นิสิตใส่รหัสรายวิชาตามที่แจ้งไป
                </li>
                <div>
                    <Image src={Handbook5} alt="Handbook 5" />
                </div>
                <li>
                    สำหรับกลุ่มรายวิชา ให้นิสิตเปลี่ยนคำว่า “เท่านั้น” เป็น G และใส่รหัสกลุ่มรายวิชาบริเวณสีแดง
                </li>
                <li>
                    สำหรับรายวิชา EXP ENG I (5500111) ให้นิสิตกรอกตอนเรียนของตนเองหน้าช่อง “เท่านั้น” บริเวณสีน้ำเงิน และเขียวตามลำดับ
                </li>
                <li>
                    กดบันทึก
                </li>
            </ol>
        </div>
    </main>
    )
}
