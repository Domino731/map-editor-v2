import {objectAreasColors} from "../../Tabs/ObjectAreas/ObjectAreas.const.ts";
import {useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {ObjectImage} from "../../../../components/ObjectImage";
import {GameObjectTextureName} from "../../../../models/textures.ts";

const gridSize = 16;
const gridMapSize = 20;
const objectX = (gridMapSize * gridSize) / 2;
const objectY = (gridMapSize * gridSize) / 2;

export const GroundArea = () => {

    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;
    const objectAreasVectors = useSelector(objectDetailsModalSelectors.objectAreasVectors);
    const groundArea = objectAreasVectors.groundVectors[objectStage];
    const {isGroundAreaHighlighted} = useSelector(objectDetailsModalSelectors.areasSettings);

    if (!isGroundAreaHighlighted || !groundArea) return null;

    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${groundArea.width * gridSize}px`,
        height: `${groundArea.height * gridSize}px`,
        border: `1px solid ${objectAreasColors.groundArea}`,
        transform: `translate(${objectX}px, ${objectY}px)`,
    }}/>
}

export const ZIndexLine = () => {
    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;
    const objectAreasVectors = useSelector(objectDetailsModalSelectors.objectAreasVectors);
    const zIndexLine = objectAreasVectors.zIndexLines[objectStage];
    const {isZIndexLineHighlighted} = useSelector(objectDetailsModalSelectors.areasSettings)

    if (!zIndexLine || !isZIndexLineHighlighted) return null;
    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${zIndexLine.width}px`,
        height: `${zIndexLine.height}px`,
        border: `1px solid ${objectAreasColors.zIndexLine}`,
        transform: `translate(${objectX + zIndexLine.x}px, ${objectY + zIndexLine.y}px)`,
    }}/>
}

export const GroundCollision = () => {
    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;
    const objectAreasVectors = useSelector(objectDetailsModalSelectors.objectAreasVectors);
    const groundCollision = objectAreasVectors.groundCollision[objectStage];
    const {isGroundCollisionHighlighted} = useSelector(objectDetailsModalSelectors.areasSettings)

    if (!groundCollision || !isGroundCollisionHighlighted) return null;
    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${groundCollision.width}px`,
        height: `${groundCollision.height}px`,
        border: `1px solid ${objectAreasColors.groundCollision}`,
        transform: `translate(${objectX + groundCollision.x}px, ${objectY + groundCollision.y}px)`,
    }}/>
}

export const MapObjectImage = () => {
    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;
    const objectData = useSelector(objectDetailsModalSelectors.objectData);
    const {isTextureHighlighted} = useSelector(objectDetailsModalSelectors.areasSettings)
    const objectTreeTrunk = useSelector(objectDetailsModalSelectors.objectTreeTrunk);
    const objectAreasVectors = useSelector(objectDetailsModalSelectors.objectAreasVectors);
    const groundArea = objectAreasVectors.groundVectors[objectStage];
    const texture = objectAreasVectors.texture[objectStage];
    if (!objectData) return null;

    return <>
        {(objectData.type === 'tree' && objectStage === objectData.specs.stages.length - 1) && <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${objectX + objectTreeTrunk.x}px, ${objectY + objectTreeTrunk.y}px)`,
        }}>
            <ObjectImage
                texture={{
                    x: objectData.specs.trunk.x,
                    y: objectData.specs.trunk.y,
                    width: objectData.specs.trunk.width,
                    height: objectData.specs.trunk.height,
                    name: GameObjectTextureName.Trees
                }}
                isBorder={isTextureHighlighted}
            />
        </div>}

        {/*Object image*/}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${objectX + groundArea.x ?? 0}px, ${objectY + groundArea.y ?? 0}px)`,
        }}>
            {texture && <ObjectImage
                texture={{
                    x: texture.x,
                    y: texture.y,
                    width: texture.width,
                    height: texture.height,
                    name: objectData.specs.stages[objectStage].texture.name
                }}
                isBorder={isTextureHighlighted}
            />}
        </div>
    </>
}

export const ObjectActionCollisions = () => {
    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;
    const objectAreasVectors = useSelector(objectDetailsModalSelectors.objectAreasVectors);
    const actionCollisionVectors = objectAreasVectors.actionCollisionsVectors[objectStage];
    const {isActionsCollisionsHighlighted} = useSelector(objectDetailsModalSelectors.areasSettings)
    if (!actionCollisionVectors || !isActionsCollisionsHighlighted) return null;

    return <>
        {actionCollisionVectors.map(({x, y, width, height, color}, index) => <div
            // TODO: use uuid instead of index
            key={`object-action-collision-${index}`}
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