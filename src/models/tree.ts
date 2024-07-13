import {Vector} from "../types.ts";
import {ObjectActionsUnion} from "../const/app.ts";

export interface ObjectDropModel {
    id: string;
    chance: number[] | number;
    amount: number[] | number;
}

export interface ObjectGroundCollisionModel {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ObjectActionCollisionModel {
    x: number;
    y: number;
    width: number;
    height: number;
    action_type: ObjectActionsUnion;
}

export interface GroundPlaceModel {
    width: number;
    height: number;
    texture_x_offset: number;
    texture_y_offset: number;
}

export interface TreeStageModel {
    width: number;
    height: number;
    x: number;
    y: number;
    next_stage: number;
    drop: Array<ObjectDropModel>;
    ground_collision: ObjectGroundCollisionModel;
    action_collisions: Array<ObjectActionCollisionModel>;
    ground_place: GroundPlaceModel;
    z_index: Vector;
}

export interface ActionVector extends Vector {
    actionType: ObjectActionsUnion;
    color: string;
}

export interface TreeModel {
    id: string;
    name: string;
    type: string;
    specs: {
        trunk: {
            x: number;
            y: number;
            width: number;
            height: number;
            offset_x: number;
            offset_y: number;
        },
        stages: Array<TreeStageModel>;
    }
}