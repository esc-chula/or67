export default function Notation(): JSX.Element {
    return (
        <div className='bg-background h-full shrink-0 rounded-2xl p-5 shadow-lg max-md:w-full md:w-80'>
            <h3 className='mb-3 text-center font-semibold'>หมายเหตุ</h3>
            <ol className='text-md flex list-outside list-decimal flex-col gap-2 pl-2'>
                <li>
                    นิสิตทุกคนจะต้องลงทะเบียนเรียนเป็นแบบรหัสกลุ่มรายวิชาตามรหัสกลุ่มวิชาที่นิสิตได้รับเท่านั้น
                </li>
                <li>
                    นิสิตทุกคนต้องลงทะเบียนเรียนรายวิชา 5500111 EXP ENG 1
                    เพิ่มอีก 1 รายวิชา ตามตอนเรียนที่กำหนดให้เท่านั้น
                </li>
                <li>
                    นิสิตที่ไม่ปฏิบัติตามข้อ 1 หรือข้อ 2 หากคณะฯ
                    ตรวจสอบพบภายหลังจะดำเนินการ
                    <span className='font-semibold'>แจ้งถอนรายวิชา (W)</span>
                    ไปยังสำนักงานทะเบียนประมวลผล
                </li>
            </ol>
        </div>
    );
}
