import bushSprite from '../../assets/map/objects/environment/bushes.png';
import minesSprite from '../../assets/map/objects/environment/mines.png';
import treesSprite from '../../assets/map/objects/environment/trees.png';
import cropsSprite from '../../assets/map/objects/environment/crops.png';
import grassSprite from '../../assets/map/objects/environment/grass.png';
import fruitTreesSprite from '../../assets/map/objects/environment/fruit-trees.png';
import {useMemo} from "react";
import {GameObjectTexture, GameObjectTextureName} from "../../models/GameObject.ts";

interface ObjectImageProps {
    texture: GameObjectTexture;
    isBorder?: boolean;
}

export const ObjectImage = ({texture, isBorder}: ObjectImageProps) => {
    if (!texture) {
        return <div>sad</div>
    }
    const {x, y, width, height, name: textureName} = texture;

    console.log('textureName: ', textureName)

    const spriteSrc = () => {
        switch (textureName) {
            case GameObjectTextureName.Bushes:
                return bushSprite;
            case GameObjectTextureName.Mines:
                return minesSprite;
            case GameObjectTextureName.Trees:
                return treesSprite;
            case GameObjectTextureName.Crops:
                return cropsSprite;
            case GameObjectTextureName.Grass:
                return grassSprite;
            case GameObjectTextureName.FruitTree:
                return fruitTreesSprite;
            default:
                return '';
        }
    }


    return <div style={{
        backgroundImage: `url(${spriteSrc()})`,
        backgroundPosition: `${x * -1}px ${y * -1}px`,
        width: `${width}px`,
        height: `${height}px`,
        border: isBorder ? '1px solid black' : 'none',
    }}></div>
}