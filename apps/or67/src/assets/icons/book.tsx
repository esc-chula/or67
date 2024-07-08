import type { SvgIconProps } from './type';

export function BookIcon({ className, fill }: SvgIconProps): JSX.Element {
    return (
        <svg
            className={className}
            fill='none'
            height='30'
            viewBox='0 0 26 30'
            width='26'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M25.322 23.4406H4.22034C3.84724 23.4406 3.48942 23.5888 3.2256 23.8526C2.96177 24.1165 2.81356 24.4743 2.81356 24.8474C2.81356 25.2205 2.96177 25.5783 3.2256 25.8421C3.48942 26.1059 3.84724 26.2542 4.22034 26.2542H25.322V29.0677H4.22034C3.10104 29.0677 2.02758 28.6231 1.23611 27.8316C0.444642 27.0401 0 25.9667 0 24.8474V3.74569C0 2.99949 0.296428 2.28385 0.824072 1.7562C1.35172 1.22856 2.06736 0.932129 2.81356 0.932129H25.322V23.4406ZM18.2881 10.7796V7.96603H7.0339V10.7796H18.2881Z'
                fill={fill}
            />
        </svg>
    );
}