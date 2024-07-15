import {ActionVector} from "../../models/tree.ts";
import {Vector} from "../../types.ts";
import {contrastColors} from "./ObjectDetailsModel.const.ts";
import {GameObjectType, TreeObjectModel} from "../../models/GameObject.ts";


export const createAreaVectors = (objectData: TreeObjectModel) => {
    const texturesVectors: Vector[] = [];
    const groundCollisionsVectors: Vector[] = [];
    const groundPlaceVectors: Vector[] = [];
    const actionCollisionVectors: ActionVector[][] = [];
    const zIndexLines: Vector[] = [];
    const treeTrunk = {x: 0, y: 0}

    if (objectData.type === GameObjectType.Tree) {
        treeTrunk.x = objectData.specs.treeTrunk.offsetX;
        treeTrunk.y = objectData.specs.treeTrunk.offsetY;
    }


    objectData.specs.stages.forEach(el => {
        texturesVectors.push({
            x: el.texture.x,
            y: el.texture.y,
            width: el.texture.width,
            height: el.texture.height
        });
        groundCollisionsVectors.push({
            x: el.groundCollision.x,
            y: el.groundCollision.y,
            width: el.groundCollision.width,
            height: el.groundCollision.height
        });
        groundPlaceVectors.push({
            x: el.groundPlace.textureXOffset,
            y: el.groundPlace.textureYOffset,
            width: el.groundPlace.width,
            height: el.groundPlace.height,
        });
        actionCollisionVectors.push(el.actionCollisions.map((el, index) => ({
            x: el.x,
            y: el.y,
            width: el.width,
            height: el.height,
            actionType: el.actionType,
            color: contrastColors[index]
        })));
        zIndexLines.push({
            x: el.zIndex.x,
            y: el.zIndex.y,
            width: el.zIndex.width,
            height: el.zIndex.height
        })
    });


    return {
        texturesVectors,
        groundCollisionsVectors,
        groundPlaceVectors,
        actionCollisionVectors,
        zIndexLines,
        treeTrunk
    }
}