import IconWrapper, { type IconProps } from './icon-wrapper';

export default function DownloadRegular(props: IconProps) {
    return (
        <IconWrapper {...props}>
            <rect width='256' height='256' fill='none' />
            <line
                x1='128'
                y1='152'
                x2='128'
                y2='40'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
            <path
                d='M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
            <polyline
                points='168 112 128 152 88 112'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
        </IconWrapper>
    );
}
