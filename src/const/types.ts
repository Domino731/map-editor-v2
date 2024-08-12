///////////////////////// JSON Models //////////////////////


export interface SingleStageObjectModel {
    id: string;
    name: string;
    type: string;
    specs: {
        texture: {
            name: string;
            width: number;
            height: number;
            x: number;
            y: number;
        },
        drop: Array<{
            id: string;
            chance: number | number[];
            amount: number | number[];
        }>;
        exp: number;
        ground_collision: {
            width: number;
            height: number;
            x: number;
            y: number;
        };
        action_collisions: Array<{
            width: number;
            height: number;
            x: number;
            y: number;
            action_type: string;
        }>;
        z_index: {
            width: number;
            height: number;
            x: number;
            y: number;
        };
        ground_place: {
            width: number;
            height: number;
            texture_x_offset: number;
            texture_y_offset: number;
        };
    }
}

export interface MineJsonModel extends SingleStageObjectModel {
}


export interface BushJsonModel extends SingleStageObjectModel {
}

export interface GrassJsonModel extends SingleStageObjectModel {

}

export interface MultiStageJsonObjectStageModel {
    width: number;
    height: number;
    x: number;
    y: number;
    next_stage: number;
    drop: Array<{
        id: string;
        chance: number | number[];
        amount: number | number[];
    }>;
    ground_collision: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    action_collisions: Array<{
        width: number;
        height: number;
        x: number;
        y: number;
        action_type: string;
    }>;
    z_index: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    ground_place: {
        width: number;
        height: number;
        texture_x_offset: number;
        texture_y_offset: number;
    };
}

export interface MultiStageJsonObjectModel {
    id: string;
    name: string;
    type: string;
    specs: {
        stages: Array<MultiStageJsonObjectStageModel>
    }
}

export interface TreeJsonModel {
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
        stages: Array<MultiStageJsonObjectStageModel>
    }
}

export interface CropJsonModel extends MultiStageJsonObjectModel {
}

export interface FruitTreeJsonModel extends MultiStageJsonObjectModel {
}