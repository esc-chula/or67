import type { SvgIconProps } from './type';

export function BackIcon({ className, fill }: SvgIconProps): JSX.Element {
    return (
        <svg
            className={className}
            fill='none'
            height='24'
            viewBox='0 0 24 24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8 5L0.999938 12.0001L8 19.0001'
                stroke='black'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                fill={fill}
            />
        </svg>
    );
}
