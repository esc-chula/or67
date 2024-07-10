interface GroupSubjectProps {
    groupCode: string;
}

export default function GroupSubject({
    groupCode,
}: GroupSubjectProps): JSX.Element {
    return (
        <div className='bg-background flex flex-col gap-2 rounded-2xl p-8 shadow-lg'>
            <p className='text-muted-foreground'>รหัสกลุ่มรายวิชา</p>
            <p className='font-semibold'>{groupCode}</p>
        </div>
    );
}
