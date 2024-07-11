export interface ObjectDropModel {
    id: string;
    chance: number[];
    amount: number;
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
}

export interface GroundPlaceModel {
    width: number;
    height: number;
}

export interface TreeStageModel {
    width: number;
    height: number;
    x: number;
    y: number;
    next_stage: number;
    drop: Array<ObjectDropModel>;
    ground_collision: ObjectGroundCollisionModel;
    action_collision: ObjectActionCollisionModel;
    ground_place: GroundPlaceModel
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
        },
        stages: Array<TreeStageModel>;
    }
}