interface WithTextProps {
    fill?: string;
    className?: string;
}

export function WithText({
    fill = '#821923',
    className,
}: WithTextProps): JSX.Element {
    return (
        <svg
            className={className}
            fill='none'
            height='66'
            viewBox='0 0 48 66'
            width='48'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M2.93475 42.2495L2.8968 35.1182L17.0729 21.5544L0 0H42.8078L42.8842 9.51772L38.3766 5.1211H10.6403L24.1828 22.0098L2.93475 42.2495Z'
                fill={fill}
            />
            <path
                d='M42.8832 47.2249L2.97986 47.1693L2.97266 46.0663L26.2292 24.5142L29.5781 28.6539L15.4904 42.1205L38.2209 42.1513L42.8832 37.9518V47.2249Z'
                fill={fill}
            />
            <path
                d='M14.9231 65.9348H12.2194V57.4622H5.78449V65.9348H3.08081V54.917H14.9231V65.9348Z'
                fill={fill}
            />
            <path
                d='M41.7856 65.9348H39.0819V57.4622H32.647V65.9348H29.9433V54.917H41.7856V65.9348Z'
                fill={fill}
            />
            <path
                d='M27.7111 66.0001H17.2432V63.4549H25.0074V57.3972H17.2432V54.8521H27.7111V66.0001Z'
                fill={fill}
            />
            <path
                d='M36.7828 60.3252H33.639V63.1037H36.7828V60.3252Z'
                fill={fill}
            />
            <path
                d='M41.8135 51.0232H39.0541V53.8017H41.8135V51.0232Z'
                fill={fill}
            />
            <path d='M48 63.2852H45.0484V65.8828H48V63.2852Z' fill={fill} />
        </svg>
    );
}
