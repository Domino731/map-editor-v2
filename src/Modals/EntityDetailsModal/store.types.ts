import {EntityAnimationTypeUnion, EntityModel} from "../../models/Entities.ts";
import {ObjectAreasSettings} from "../ObjectDetailsModal/store.types.ts";

export interface EntityDetailsModalStore {
    entityData: EntityModel | null;
    animationsScale: number;
    entityAreas: {
        settings: ObjectAreasSettings;
    }
}

// ACTIONS
export interface SetEntityAnimationActionPayload {
    animationType: EntityAnimationTypeUnion;
    animationIndex: number;
    animationData: number[];
}