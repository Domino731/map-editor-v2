import {EntityAnimationTypeUnion, EntityModel} from "../../models/Entities.ts";

export interface EntityDetailsModalStore {
    entityData: EntityModel | null;
}

// ACTIONS
export interface SetEntityAnimationActionPayload {
    animationType: EntityAnimationTypeUnion;
    animationIndex: number;
    animationData: number[];
}