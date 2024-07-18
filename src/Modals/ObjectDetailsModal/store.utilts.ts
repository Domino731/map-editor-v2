import {ActionVector} from "../../models/game.ts";
import {Vector} from "../../types.ts";
import {contrastColors} from "./ObjectDetailsModel.const.ts";
import {
    GameObjectType,
    GameObjectUnion,
    GameMultiStageObjectUnion,
    TreeObjectModel,
    GameSingleStageObjectUnion
} from "../../models/GameObject.ts";
import {ObjectActionsUnion} from "../../const/app.ts";


export const createAreaVectors = (objectData: GameObjectUnion) => {
    if ((objectData as TreeObjectModel)?.specs.stages) {
        return createAreaVectorsForMultiStageObject(objectData as GameMultiStageObjectUnion);
    }
    return createAreaVectorsForSingleStageObject(objectData as GameSingleStageObjectUnion);
}

type Specs = {
    texture: { x: number, y: number, width: number, height: number },
    groundCollision: { x: number, y: number, width: number, height: number },
    groundPlace: { textureXOffset: number, textureYOffset: number, width: number, height: number },
    actionCollisions: { x: number, y: number, width: number, height: number, actionType: ObjectActionsUnion }[],
    zIndex: { x: number, y: number, width: number, height: number }
};

const processSpecs = (specs: Specs) => {
    const texturesVectors: Vector[] = [];
    const groundCollisionsVectors: Vector[] = [];
    const groundPlaceVectors: Vector[] = [];
    const actionCollisionVectors: ActionVector[][] = [];
    const zIndexLines: Vector[] = [];

    texturesVectors.push({
        x: specs.texture.x,
        y: specs.texture.y,
        width: specs.texture.width,
        height: specs.texture.height
    });
    groundCollisionsVectors.push({
        x: specs.groundCollision.x,
        y: specs.groundCollision.y,
        width: specs.groundCollision.width,
        height: specs.groundCollision.height
    });
    groundPlaceVectors.push({
        x: specs.groundPlace.textureXOffset,
        y: specs.groundPlace.textureYOffset,
        width: specs.groundPlace.width,
        height: specs.groundPlace.height,
    });
    actionCollisionVectors.push(specs.actionCollisions.map((el, index) => ({
        x: el.x,
        y: el.y,
        width: el.width,
        height: el.height,
        actionType: el.actionType,
        color: contrastColors[index]
    })));
    zIndexLines.push({
        x: specs.zIndex.x,
        y: specs.zIndex.y,
        width: specs.zIndex.width,
        height: specs.zIndex.height
    });

    return {
        texturesVectors,
        groundCollisionsVectors,
        groundPlaceVectors,
        actionCollisionVectors,
        zIndexLines
    };
};

export const createAreaVectorsForMultiStageObject = (objectData: GameMultiStageObjectUnion) => {
    const treeTrunk = {x: 0, y: 0};

    if (objectData.type === GameObjectType.Tree) {
        const treeSpecs = (objectData as TreeObjectModel).specs.treeTrunk;
        treeTrunk.x = treeSpecs.offsetX;
        treeTrunk.y = treeSpecs.offsetY;
    }

    const texturesVectors: Vector[] = [];
    const groundCollisionsVectors: Vector[] = [];
    const groundPlaceVectors: Vector[] = [];
    const actionCollisionVectors: ActionVector[][] = [];
    const zIndexLines: Vector[] = [];

    objectData.specs.stages.forEach(stage => {
        const vectors = processSpecs(stage);
        texturesVectors.push(...vectors.texturesVectors);
        groundCollisionsVectors.push(...vectors.groundCollisionsVectors);
        groundPlaceVectors.push(...vectors.groundPlaceVectors);
        actionCollisionVectors.push(...vectors.actionCollisionVectors);
        zIndexLines.push(...vectors.zIndexLines);
    });

    return {
        texturesVectors,
        groundCollisionsVectors,
        groundPlaceVectors,
        actionCollisionVectors,
        zIndexLines,
        treeTrunk
    };
};

export const createAreaVectorsForSingleStageObject = (objectData: GameSingleStageObjectUnion) => {
    const specs = objectData.specs;
    const vectors = processSpecs(specs);

    return {
        texturesVectors: vectors.texturesVectors,
        groundCollisionsVectors: vectors.groundCollisionsVectors,
        groundPlaceVectors: vectors.groundPlaceVectors,
        actionCollisionVectors: vectors.actionCollisionVectors,
        zIndexLines: vectors.zIndexLines,
        treeTrunk: null
    };
};