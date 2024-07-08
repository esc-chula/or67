'use client';
import { useState } from 'react';
import { useUser } from '@/contexts/user-context';

export default function LandingPage(): JSX.Element {
    const { user, setUser, error } = useUser();
    const [studentId, setStudentId] = useState<string>('');

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();

        setUser(studentId);
    };

    return (
        <main>
            {!user.student ? (
                <form onSubmit={submitHandler}>
                    <label htmlFor='studentId'>หมายเลขประจำตัวนิสิต</label>
                    <input
                        onChange={(e) => {
                            setStudentId(e.target.value);
                        }}
                        placeholder='673xxxxx21'
                        type='text'
                        value={studentId}
                    />
                    {error ? <h2>ERROR: {error.message}</h2> : null}
                    <button type='submit'>ตรวจสอบ</button>
                </form>
            ) : (
                <div>
                    <h1>Welcome</h1>
                    <p>{user.student.name.th}</p>
                </div>
            )}
        </main>
    );
}
