import type { SvgIconProps } from './type';

export function CalendarIcon({ className }: SvgIconProps): JSX.Element {
    return (
        <svg
            className={className}
            fill='none'
            height='29'
            viewBox='0 0 28 29'
            width='28'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M3.46296 8.08523H2.81481V8.73337V25.5334V26.1815H3.46296H24.2037H24.8519V25.5334V8.73337V8.08523H24.2037H3.46296ZM1.813 27.0422L1.37281 27.508L1.813 27.0422C1.38258 26.6354 1.14815 26.0919 1.14815 25.5334V5.93337C1.14815 4.78539 2.15626 3.78152 3.46296 3.78152H5.77778H6.42593H9.38889H10.037H17.6296H18.2778H21.2407H21.8889H24.2037C24.8291 3.78152 25.422 4.01663 25.8537 4.42456C26.2841 4.8313 26.5185 5.37488 26.5185 5.93337V25.5334C26.5185 26.0919 26.2841 26.6354 25.8537 27.0422C25.422 27.4501 24.8291 27.6852 24.2037 27.6852H3.46296C2.83758 27.6852 2.24467 27.4501 1.813 27.0422ZM20.5926 2.48523H18.9259V0.981522H20.5926V2.48523ZM7.07407 2.48523V0.981522H8.74074V2.48523H7.07407ZM7.07407 13.5815H8.74074V15.0852H7.07407V13.5815ZM7.07407 19.1815H8.74074V20.6852H7.07407V19.1815ZM13 13.5815H14.6667V15.0852H13V13.5815ZM13 19.1815H14.6667V20.6852H13V19.1815ZM18.9259 13.5815H20.5926V15.0852H18.9259V13.5815ZM18.9259 19.1815H20.5926V20.6852H18.9259V19.1815Z'
                strokeWidth='1.4963'
            />
        </svg>
    );
}
