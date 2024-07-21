import {GameMultiStageObjectUnion, GameSingleStageObjectUnion, TreeObjectModel} from "../../../../models/GameObject.ts";
import {useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {
    MultiStageJsonObjectModel,
    MultiStageJsonObjectStageModel,
    SingleStageObjectModel, TreeJsonModel
} from "../../../../const/types.ts";

export const useProcessCommonSingleStageObject = () => {
    const objectData = useSelector(objectDetailsModalSelectors.objectData) as unknown as GameSingleStageObjectUnion;
    const objectAreas = useSelector(objectDetailsModalSelectors.objectAreasVectors);

    return (): SingleStageObjectModel | null => {
        if (!objectData) return null;
        return {
            id: objectData.id,
            name: objectData.name,
            type: objectData.type,
            actorType: objectData.actorType,
            specs: {
                texture: {
                    name: objectData.specs.texture.name,
                    ...objectAreas.texture[0]
                },
                drop: objectData.specs.drop.map(el => ({
                    id: el.id,
                    chance: el.chance,
                    amount: el.amount
                })),
                exp: objectData.specs.exp,
                ground_collision: {
                    x: objectAreas.groundCollision[0].x,
                    y: objectAreas.groundCollision[0].y,
                    width: objectAreas.groundCollision[0].width,
                    height: objectAreas.groundCollision[0].height,
                },
                action_collisions: objectAreas.actionCollisionsVectors[0].map(el => ({
                    width: el.width,
                    height: el.height,
                    x: el.x,
                    y: el.y,
                    action_type: el.actionType
                })),
                z_index: {
                    x: objectAreas.zIndexLines[0].x,
                    y: objectAreas.zIndexLines[0].y,
                    width: objectAreas.zIndexLines[0].width,
                    height: objectAreas.zIndexLines[0].height,
                },
                ground_place: {
                    texture_x_offset: objectAreas.groundVectors[0].x,
                    texture_y_offset: objectAreas.groundVectors[0].y,
                    width: objectAreas.groundVectors[0].width,
                    height: objectAreas.groundVectors[0].height,
                }
            }
        }
    }
}

export const useProcessCommonMultiStageObject = () => {
    const objectData = useSelector(objectDetailsModalSelectors.objectData) as unknown as GameMultiStageObjectUnion;
    const objectAreas = useSelector(objectDetailsModalSelectors.objectAreasVectors);

    return (): MultiStageJsonObjectModel | null => {
        if (!objectData) return null;
        return {
            id: objectData.id,
            name: objectData.name,
            type: objectData.type,
            specs: {
                stages: objectData.specs.stages.map((stage, stageIndex): MultiStageJsonObjectStageModel => ({
                    width: objectAreas.texture[stageIndex].width,
                    height: objectAreas.texture[stageIndex].height,
                    x: objectAreas.texture[stageIndex].x,
                    y: objectAreas.texture[stageIndex].y,
                    next_stage: stage.nextStage,
                    drop: stage.drop.map(el => ({
                        id: el.id,
                        chance: el.amount,
                        amount: el.amount
                    })),
                    ground_collision: {
                        x: objectAreas.groundCollision[stageIndex].x,
                        y: objectAreas.groundCollision[stageIndex].y,
                        width: objectAreas.groundCollision[stageIndex].width,
                        height: objectAreas.groundCollision[stageIndex].height,
                    },
                    action_collisions: objectAreas.actionCollisionsVectors[stageIndex].map(el => ({
                        width: el.width,
                        height: el.height,
                        x: el.x,
                        y: el.y,
                        action_type: el.actionType
                    })),
                    z_index: {
                        x: objectAreas.zIndexLines[stageIndex].x,
                        y: objectAreas.zIndexLines[stageIndex].y,
                        width: objectAreas.zIndexLines[stageIndex].width,
                        height: objectAreas.zIndexLines[stageIndex].height,
                    },
                    ground_place: {
                        texture_x_offset: objectAreas.groundVectors[stageIndex].x,
                        texture_y_offset: objectAreas.groundVectors[stageIndex].y,
                        width: objectAreas.groundVectors[stageIndex].width,
                        height: objectAreas.groundVectors[stageIndex].height,
                    }
                }))
            }
        }
    }
}


export const useProcessCommonTreeObject = () => {
    const objectData = useSelector(objectDetailsModalSelectors.objectData) as unknown as TreeObjectModel;
    const objectAreas = useSelector(objectDetailsModalSelectors.objectAreasVectors);

    return (): TreeJsonModel | null => {
        if (!objectData) return null;
        return {
            id: objectData.id,
            name: objectData.name,
            type: objectData.type,
            specs: {
                trunk: {
                    x: objectData.specs.treeTrunk.x,
                    y: objectData.specs.treeTrunk.y,
                    width: objectData.specs.treeTrunk.width,
                    height: objectData.specs.treeTrunk.height,
                    offset_x: objectData.specs.treeTrunk.offsetX,
                    offset_y: objectData.specs.treeTrunk.offsetY
                },
                stages: objectData.specs.stages.map((stage, stageIndex): MultiStageJsonObjectStageModel => ({
                    width: objectAreas.texture[stageIndex].width,
                    height: objectAreas.texture[stageIndex].height,
                    x: objectAreas.texture[stageIndex].x,
                    y: objectAreas.texture[stageIndex].y,
                    next_stage: stage.nextStage,
                    drop: stage.drop.map(el => ({
                        id: el.id,
                        chance: el.amount,
                        amount: el.amount
                    })),
                    ground_collision: {
                        x: objectAreas.groundCollision[stageIndex].x,
                        y: objectAreas.groundCollision[stageIndex].y,
                        width: objectAreas.groundCollision[stageIndex].width,
                        height: objectAreas.groundCollision[stageIndex].height,
                    },
                    action_collisions: objectAreas.actionCollisionsVectors[stageIndex].map(el => ({
                        width: el.width,
                        height: el.height,
                        x: el.x,
                        y: el.y,
                        action_type: el.actionType
                    })),
                    z_index: {
                        x: objectAreas.zIndexLines[stageIndex].x,
                        y: objectAreas.zIndexLines[stageIndex].y,
                        width: objectAreas.zIndexLines[stageIndex].width,
                        height: objectAreas.zIndexLines[stageIndex].height,
                    },
                    ground_place: {
                        texture_x_offset: objectAreas.groundVectors[stageIndex].x,
                        texture_y_offset: objectAreas.groundVectors[stageIndex].y,
                        width: objectAreas.groundVectors[stageIndex].width,
                        height: objectAreas.groundVectors[stageIndex].height,
                    }
                }))
            }
        }
    }
}