import {ObjectDropModel, TreeModel} from "../../models/tree.ts";

export interface ObjectDetailsModalState {
    objectData: TreeModel | null;
    objectStage: number | null;
}
