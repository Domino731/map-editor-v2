import {useSelector} from "react-redux";
import {objectAreasColors} from "../../../ObjectDetailsModal/Tabs/ObjectAreas/ObjectAreas.const.ts";
import {ObjectImage} from "../../../../components/ObjectImage";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";

const gridSize = 16;
const gridMapSize = 20;
const objectX = (gridMapSize * gridSize) / 2;
const objectY = (gridMapSize * gridSize) / 2;

const GroundArea = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const settings = useSelector(entityDetailsModalSelectors.areasSettings)

    if (!entityData) return null;

    if (!settings.isGroundAreaHighlighted) return null;

    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${entityData.groundPlace.width * gridSize}px`,
        height: `${entityData.groundPlace.height * gridSize}px`,
        border: `1px solid ${objectAreasColors.groundArea}`,
        transform: `translate(${objectX}px, ${objectY}px)`,
    }}/>
}

const ZIndexLine = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const settings = useSelector(entityDetailsModalSelectors.areasSettings)

    if (!entityData) return null;
    if (!settings.isZIndexLineHighlighted) return null;
    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${entityData.zIndex.width}px`,
        height: `${entityData.zIndex.height}px`,
        border: `1px solid ${objectAreasColors.zIndexLine}`,
        transform: `translate(${objectX + entityData.zIndex.x}px, ${objectY + entityData.zIndex.y}px)`,
    }}/>
}

const GroundCollision = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const settings = useSelector(entityDetailsModalSelectors.areasSettings)

    if (!entityData) return null;

    if (!settings.isGroundCollisionHighlighted) return null;
    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${entityData.groundCollision.width}px`,
        height: `${entityData.groundCollision.height}px`,
        border: `1px solid ${objectAreasColors.groundCollision}`,
        transform: `translate(${objectX + entityData.groundCollision.x}px, ${objectY + entityData.groundCollision.y}px)`,
    }}/>
}

const HitBox = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const settings = useSelector(entityDetailsModalSelectors.areasSettings)

    if (!entityData) return null;

    if (!settings.isHitBoxHighlighted) return null;
    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${entityData.hitBox.width}px`,
        height: `${entityData.hitBox.height}px`,
        border: `1px solid ${objectAreasColors.hitBox}`,
        transform: `translate(${objectX + entityData.hitBox.x}px, ${objectY + entityData.hitBox.y}px)`,
    }}/>
}

const MapObjectImage = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const settings = useSelector(entityDetailsModalSelectors.areasSettings)

    if (!entityData) return;

    return <>
        {/*Object image*/}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${objectX}px, ${objectY}px)`,
        }}>
            <ObjectImage
                texture={{
                    x: entityData.presentationTextureCords.x,
                    y: entityData.presentationTextureCords.y,
                    width: entityData.texture.width,
                    height: entityData.texture.height,
                    name: entityData.texture.name
                }}
                isBorder={settings.isTextureHighlighted}
            />
        </div>
    </>
}

export const ObjectActionCollisions = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const settings = useSelector(entityDetailsModalSelectors.areasSettings)

    if (!entityData) return;

    if (!settings.isActionsCollisionsHighlighted) return null;

    return <>
        {entityData.actionCollisions.map(({x, y, width, height, color, uuid}) => <div
            key={`object-action-collision-${uuid}`}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${width}px`,
                height: `${height}px`,
                border: `1px dotted ${color}`,
                transform: `translate(${objectX + x}px, ${objectY + y}px)`,
            }}/>)}
    </>
}

export const EntityPreview = () => {
    return <>
        <MapObjectImage/>
        <HitBox/>
        <GroundArea/>
        <ZIndexLine/>
        <GroundCollision/>
        <ObjectActionCollisions/>
    </>
}