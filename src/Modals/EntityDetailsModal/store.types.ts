import {EntityAnimationTypeUnion, EntityModel} from "../../models/Entities.ts";

export interface EntityDetailsModalStore {
    entityData: EntityModel | null;
    animationsScale: number;
}

// ACTIONS
export interface SetEntityAnimationActionPayload {
    animationType: EntityAnimationTypeUnion;
    animationIndex: number;
    animationData: number[];
}