import {EntityModel} from "../../models/Entities.ts";

export interface EntityDetailsModalStore {
    entityData: EntityModel | null;
}