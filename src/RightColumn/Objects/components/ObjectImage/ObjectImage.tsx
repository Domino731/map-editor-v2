interface ObjectImageProps {
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

export const ObjectImage = ({src, x, y, width, height}: ObjectImageProps) => {
    return <div style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${x * -1}px ${y * -1}px`,
        width: `${width}px`,
        height: `${height}px`,
    }}></div>
}