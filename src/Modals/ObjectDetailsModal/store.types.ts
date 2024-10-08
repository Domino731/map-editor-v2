import {ActionVector} from "../../models/game.ts";
import {Cords, Vector} from "../../types.ts";
import {GameObjectUnion} from "../../models/GameObject.ts";

export interface ObjectDetailsModalState {
    objectData: GameObjectUnion | null;
    objectStage: number | null;
    objectAreas: {
        settings: ObjectAreasSettings,
        vectors: ObjectDetailsObjectAreasVectors,
        treeTrunk: Cords | null;
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
    isHitBoxHighlighted?: boolean;
}