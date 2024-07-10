import { describe, expect, it, vitest } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { UserContext, useUser, type UserContextType } from '../user-context';
import '@testing-library/jest-dom';

const mockUser: UserContextType = {
    user: {
        student: {
            index: '1',
            id: '6631000021',
            name: {
                th: 'นายสุขี ชีวัน',
                en: 'Mr. Sukee  Cheewan',
            },
            program: 'วิศวกรรมคอมพิวเตอร์-โอลิมปิกวิชาการ',
        },
        teacher: {
            index: '123456',
            range: { start: 1, end: 10 },
            name: 'Teacher 1',
            room: 'Room 1',
            program: 'วิศวกรรมคอมพิวเตอร์-โอลิมปิกวิชาการ',
        },
        group: {
            index: '1',
            groupCode: '2198374',
            range: { start: 1, end: 5 },
            subjects: [
                {
                    code: '2199001',
                    section: 1,
                },
                {
                    code: '2199002',
                    section: 2,
                },
            ],
        },
        subjects: [
            {
                index: '1',
                code: '2199001',
                name: 'Subject 1',
                lectureCredit: 3,
                midterm: '3 กรกฎาคม 2564',
                final: '4 กรกฎาคม 2564',
                sections: [
                    {
                        section: 1,
                        studentStart: 1,
                        studentEnd: 30,
                        classes: [
                            {
                                format: 'Lecture',
                                day: 'Monday',
                                timeStart: '08:00',
                                timeEnd: '10:00',
                                location: 'บ้าน',
                            },
                        ],
                    },
                ],
            },
            {
                index: '2',
                code: '2199002',
                name: 'Subject 2',
                lectureCredit: 3,
                midterm: '3 กรกฎาคม 2564',
                final: '4 กรกฎาคม 2564',
                sections: [
                    {
                        section: 1,
                        studentStart: 1,
                        studentEnd: 30,
                        classes: [
                            {
                                format: 'Lecture',
                                day: 'Monday',
                                timeStart: '08:00',
                                timeEnd: '10:00',
                                location: 'บ้าน',
                            },
                        ],
                    },
                ],
            },
        ],
        expEngSection: {
            section: 1,
            studentStart: 1,
            studentEnd: 30,
            classes: [
                {
                    format: 'Lecture',
                    day: 'Monday',
                    timeStart: '08:00',
                    timeEnd: '10:00',
                    location: 'บ้าน',
                },
            ],
        },
    },
    setUser: vitest.fn(),
    logout: vitest.fn(),
    error: undefined,
};

function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <UserContext.Provider value={mockUser}>{children}</UserContext.Provider>
    );
}

function MockedLandingPage(): JSX.Element {
    const { user, setUser, logout, error } = useUser();
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
            <button onClick={logout} type='button'>
                Logout
            </button>
        </main>
    );
}

describe('UserProvider', () => {
    it('renders correctly', async () => {
        render(<MockedLandingPage />, { wrapper: Wrapper });

        await waitFor(() => {
            expect(screen.getByText('Welcome')).toBeInTheDocument();
            expect(screen.getByText('นายสุขี ชีวัน')).toBeInTheDocument();
            expect(screen.queryByRole('form')).not.toBeInTheDocument();
        });

        await waitFor(() => {
            screen.getByRole('button').click();
            expect(mockUser.logout).toHaveBeenCalled();
        });
    });
});
