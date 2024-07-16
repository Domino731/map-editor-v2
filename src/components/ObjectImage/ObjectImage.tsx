import {GameObjectTexture} from "../../models/GameObject.ts";
import {getTexture} from "../../utils/textures.ts";

interface ObjectImageProps {
    texture: GameObjectTexture;
    isBorder?: boolean;
}

export const ObjectImage = ({texture, isBorder}: ObjectImageProps) => {
    if (!texture) {
        return <div>sad</div>
    }
    const {x, y, width, height, name: textureName} = texture;

    const spriteSrc = () => {
        return getTexture(textureName);
    }


    return <div style={{
        backgroundImage: `url(${spriteSrc()})`,
        backgroundPosition: `${x * -1}px ${y * -1}px`,
        width: `${width}px`,
        height: `${height}px`,
        border: isBorder ? '1px solid black' : 'none',
    }}></div>
}