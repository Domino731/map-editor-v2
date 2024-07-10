import bushSprite from '../../../../assets/map/objects/environment/bushes.png';
import minesSprite from '../../../../assets/map/objects/environment/mines.png';
import treesSprite from '../../../../assets/map/objects/environment/trees.png';
import {useMemo} from "react";

interface ObjectImageProps {
    x: number;
    y: number;
    width: number;
    height: number;
    type: 'bush' | 'mine' | 'tree'
}

export const ObjectImage = ({x, y, width, height, type}: ObjectImageProps) => {

    const spriteSrc = useMemo(() => {
        switch (type) {
            case "bush":
                return bushSprite;
            case "mine":
                return minesSprite;
            case 'tree':
                return treesSprite;
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