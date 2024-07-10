import bushSprite from '../../../../assets/map/objects/environment/bushes.png';
import minesSprite from '../../../../assets/map/objects/environment/mines.png';
import {useMemo} from "react";

interface ObjectImageProps {
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
    type: 'bush' | 'mine'
}

export const ObjectImage = ({x, y, width, height, type}: ObjectImageProps) => {

    const spriteSrc = useMemo(() => {
        switch (type) {
            case "bush":
                return bushSprite;
            case "mine":
                return minesSprite;
            default:
                return '';
        }
    }, [type])


    return <div style={{
        backgroundImage: `url(${spriteSrc})`,
        backgroundPosition: `${x * -1}px ${y * -1}px`,
        width: `${width}px`,
        height: `${height}px`,
    }}></div>
}