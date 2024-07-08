import type { SvgIconProps } from './type';

export function FinderIcon({ className, stroke }: SvgIconProps): JSX.Element {
    return (
        <svg
            className={className}
            fill='none'
            height='28'
            viewBox='0 0 29 28'
            width='29'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M11.3531 11.185C12.0381 11.185 12.7163 11.0576 13.3491 10.8101C13.9819 10.5625 14.5569 10.1997 15.0412 9.74227C15.5255 9.28486 15.9097 8.74184 16.1718 8.1442C16.4339 7.54656 16.5688 6.90602 16.5688 6.25914C16.5688 5.61226 16.4339 4.97172 16.1718 4.37409C15.9097 3.77645 15.5255 3.23342 15.0412 2.77601C14.5569 2.3186 13.9819 1.95576 13.3491 1.70821C12.7163 1.46066 12.0381 1.33325 11.3531 1.33325C9.96985 1.33325 8.64322 1.85223 7.66509 2.77601C6.68696 3.6998 6.13745 4.95271 6.13745 6.25914C6.13745 7.56557 6.68696 8.81849 7.66509 9.74227C8.64322 10.6661 9.96985 11.185 11.3531 11.185Z'
                stroke={stroke}
                strokeLinejoin='round'
                strokeWidth='2.37037'
            />
            <path
                d='M17.3138 16.8147H11.204C7.86596 16.8147 6.19694 16.8147 4.92134 17.4283C3.79979 17.968 2.88795 18.8292 2.31647 19.8885C1.66675 21.0932 1.66675 22.6695 1.66675 25.822V26.6665H17.3138M27.0001 25.9628L24.6366 23.7313M24.6366 23.7313C24.9138 23.4703 25.1337 23.1594 25.2835 22.8179C25.4334 22.4764 25.5103 22.1103 25.5099 21.7406C25.51 21.0894 25.2711 20.4582 24.8338 19.9547C24.3964 19.4513 23.7878 19.1066 23.1115 18.9794C22.4353 18.8522 21.7332 18.9504 21.125 19.2573C20.5169 19.5642 20.0402 20.0607 19.7762 20.6623C19.5122 21.2639 19.4772 21.9334 19.6773 22.5566C19.8773 23.1798 20.3 23.7182 20.8733 24.0801C21.4465 24.442 22.1349 24.605 22.8212 24.5413C23.5074 24.4775 24.149 24.1918 24.6366 23.7313Z'
                stroke={stroke}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.37037'
            />
        </svg>
    );
}
