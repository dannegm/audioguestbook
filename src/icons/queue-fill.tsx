import IconWrapper, { type IconProps } from './icon-wrapper';

export default function QueueFill(props: IconProps) {
    return (
        <IconWrapper {...props}>
            <rect width='256' height='256' fill='none' />
            <path d='M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm108.24-30.78-64-40A8,8,0,0,0,168,120v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56Z' />
        </IconWrapper>
    );
}
