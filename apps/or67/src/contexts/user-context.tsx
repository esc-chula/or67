'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Group } from '@/types/group';
import type { Student } from '@/types/student';
import type { Subject } from '@/types/subject';
import type { Teacher } from '@/types/teacher';
import { getStudentInfo } from '@/utils/get-student-info';
import {
    deleteStudentCookie,
    getStudentCookie,
    setStudentCookie,
} from '@/utils/cookie';
import { getTeacherInfo } from '@/utils/get-teacher-info';
import { getSubjectsInfo } from '@/utils/get-subject-info';
import { getGroupInfo } from '@/utils/get-group-info';

export interface UserContextType {
    user: {
        student: Student | undefined;
        teacher: Teacher | undefined;
        subjects: Subject[];
        group: Group | undefined;
    };
    setUser: (studentId: string) => void;
    logout: () => void;
    error: Error | undefined;
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

function UserProvider({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const [student, setStudent] = useState<Student>();
    const [teacher, setTeacher] = useState<Teacher>();
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [group, setGroup] = useState<Group>();
    const [error, setError] = useState<Error>();
    const router = useRouter();
    const pathname = usePathname();

    const setUser = (studentId: string): void => {
        async function fetchData(): Promise<void> {
            try {
                const studentData = await getStudentInfo(studentId);
                const teacherData = await getTeacherInfo(studentData.index);
                const groupData = await getGroupInfo(studentData.index);
                const subjectsData = await Promise.all(
                    groupData.subjects.map((subject) =>
                        getSubjectsInfo(subject.code)
                    )
                );
                setStudent(studentData);
                setStudentCookie(studentData.id);
                setTeacher(teacherData);
                setGroup(groupData);
                setSubjects(subjectsData.flat());
                setError(undefined);
            } catch (err) {
                setError(
                    err instanceof Error ? err : new Error('Unexpected error')
                );
            }
        }

        void fetchData();
    };

    const logout = (): void => {
        setStudent(undefined);
        setTeacher(undefined);
        setSubjects([]);
        setGroup(undefined);
        deleteStudentCookie();
        router.push('/');
    };

    useEffect(() => {
        const studentCookie = getStudentCookie();
        if (studentCookie) {
            setUser(studentCookie);
        }
    }, []);

    useEffect(() => {
        if (!student && pathname !== '/') router.push('/');
    }, [router, pathname, student]);

    return (
        <UserContext.Provider
            value={{
                user: { student, teacher, subjects, group },
                setUser,
                logout,
                error,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};

export { UserProvider, useUser };
