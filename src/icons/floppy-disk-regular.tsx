import IconWrapper, { type IconProps } from './icon-wrapper';

export default function FloppyDiskRegular(props: IconProps) {
    return (
        <IconWrapper {...props}>
            <rect width='256' height='256' fill='none' />
            <path
                d='M216,91.31V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.69a8,8,0,0,1,5.65,2.34l43.32,43.32A8,8,0,0,1,216,91.31Z'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
            <path
                d='M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
            <line
                x1='152'
                y1='72'
                x2='96'
                y2='72'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
        </IconWrapper>
    );
}
