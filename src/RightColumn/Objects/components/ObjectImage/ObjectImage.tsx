import bushSprite from '../../../../assets/map/objects/environment/bushes.png';
import minesSprite from '../../../../assets/map/objects/environment/mines.png';
import treesSprite from '../../../../assets/map/objects/environment/trees.png';
import cropsSprite from '../../../../assets/map/objects/environment/crops.png';
import grassSprite from '../../../../assets/map/objects/environment/grass.png';
import fruitTreesSprite from '../../../../assets/map/objects/environment/fruit-trees.png';
import {useMemo} from "react";

interface ObjectImageProps {
    sprite?: string | null;
    x: number;
    y: number;
    width: number;
    height: number;
    type: 'bush' | 'mine' | 'tree' | 'crop' | 'grass' | 'fruitTree' | 'staticTree';
    isBorder?: boolean;
}

export const ObjectImage = ({x, y, width, height, type, sprite, isBorder}: ObjectImageProps) => {

    const spriteSrc = useMemo(() => {
        if (sprite) return sprite;
        switch (type) {
            case "bush":
                return bushSprite;
            case "mine":
                return minesSprite;
            case 'tree':
                return treesSprite;
            case 'crop':
                return cropsSprite;
            case 'grass':
                return grassSprite;
            case 'fruitTree':
                return fruitTreesSprite;
            case 'staticTree':
                return treesSprite;
            default:
                return '';
        }
    }, [sprite, type])


    return <div style={{
        backgroundImage: `url(${spriteSrc})`,
        backgroundPosition: `${x * -1}px ${y * -1}px`,
        width: `${width}px`,
        height: `${height}px`,
        border: isBorder ? '1px solid black' : 'none',
    }}></div>
}