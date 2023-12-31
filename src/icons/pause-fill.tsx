import IconWrapper, { type IconProps } from './icon-wrapper';

export default function PauseFill(props: IconProps) {
    return (
        <IconWrapper {...props}>
            <rect width='256' height='256' fill='none' />
            <path d='M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z' />
        </IconWrapper>
    );
}
