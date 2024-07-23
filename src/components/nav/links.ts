import {
    CalendarIcon,
    EditIcon,
    FinderIcon,
    ProfileIcon,
    TableIcon,
} from '@/assets/icons';
import type { SvgIconProps } from '@/assets/icons/type';

export interface Link {
    href: string;
    label: string;
    icon: (props: SvgIconProps) => JSX.Element;
    needFill: boolean;
    needStroke: boolean;
}

export const links: Link[] = [
    {
        href: '/profile',
        label: 'ข้อมูลนิสิต',
        icon: ProfileIcon,
        needFill: false,
        needStroke: true,
    },
    {
        href: '/subjects',
        label: 'รายวิชา',
        icon: EditIcon,
        needFill: true,
        needStroke: true,
    },
    {
        href: '/schedule',
        label: 'ตารางเรียน',
        icon: TableIcon,
        needFill: true,
        needStroke: true,
    },
    {
        href: '/calendar',
        label: 'ปฏิทินคณะ',
        icon: CalendarIcon,
        needFill: true,
        needStroke: true,
    },
    {
        href: '/makefriends',
        label: 'หาเพื่อน',
        icon: FinderIcon,
        needFill: false,
        needStroke: true,
    },
];
