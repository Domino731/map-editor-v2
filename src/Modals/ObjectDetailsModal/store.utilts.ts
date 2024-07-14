import {ActionVector, TreeModel} from "../../models/tree.ts";
import {Vector} from "../../types.ts";
import {contrastColors} from "./ObjectDetailsModel.const.ts";

export const createAreaVectors = (objectData: TreeModel) => {
    const texturesVectors: Vector[] = [];
    const groundCollisionsVectors: Vector[] = [];
    const groundPlaceVectors: Vector[] = [];
    const actionCollisionVectors: ActionVector[][] = [];
    const zIndexLines: Vector[] = [];
    const treeTrunk = {x: 0, y: 0}

    if (objectData.type === 'tree') {
        treeTrunk.x = objectData.specs.trunk.offset_x;
        treeTrunk.y = objectData.specs.trunk.offset_y;
    }


    objectData.specs.stages.forEach(el => {
        texturesVectors.push({
            x: el.x,
            y: el.y,
            width: el.width,
            height: el.height
        });
        groundCollisionsVectors.push({
            x: el.ground_collision.x,
            y: el.ground_collision.y,
            width: el.ground_collision.width,
            height: el.ground_collision.height
        });
        groundPlaceVectors.push({
            x: el.ground_place.texture_x_offset,
            y: el.ground_place.texture_y_offset,
            width: el.ground_place.width,
            height: el.ground_place.height
        });
        actionCollisionVectors.push(el.action_collisions.map((el, index) => ({
            x: el.x,
            y: el.y,
            width: el.width,
            height: el.height,
            actionType: el.action_type,
            color: contrastColors[index]
        })));
        zIndexLines.push({
            x: el.z_index.x,
            y: el.z_index.y,
            width: el.z_index.width,
            height: el.z_index.height
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