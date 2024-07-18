import {ActionVector} from "../../models/game.ts";
import {Vector} from "../../types.ts";
import {TreeObjectModel} from "../../models/GameObject.ts";

export interface ObjectDetailsModalState {
    objectData: TreeObjectModel | null;
    objectStage: number | null;
    objectAreas: {
        settings: ObjectAreasSettings,
        vectors: ObjectDetailsObjectAreasVectors,
        treeTrunk: { x: number, y: number }
    }
}

export interface ObjectDetailsObjectAreasVectors {
    texture: Vector[];
    groundCollision: Vector[];
    actionCollisionsVectors: ActionVector[][];
    groundVectors: Vector[];
    zIndexLines: Vector[];
}

export interface ObjectAreasSettings {
    isTextureHighlighted: boolean;
    isBlackBackground: boolean;
    isGrid: boolean;
    isGroundAreaHighlighted: boolean;
    isGroundCollisionHighlighted: boolean;
    isActionsCollisionsHighlighted: boolean;
    isZIndexLineHighlighted: boolean;
    gridScale: number;
}