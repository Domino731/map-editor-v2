///////////////////////// JSON Models //////////////////////


interface SingleStageObjectModel {
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

interface MultiStageObjectModel {
    id: string;
    name: string;
    type: string;
    specs: {
        stages: Array<{
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
        }>
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
        stages: Array<{
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
        }>
    }
}

export interface CropJsonModel extends MultiStageObjectModel {
}

export interface FruitTreeJsonModel {
    id: string;
    name: string;
    type: string;
    specs: {
        stages: Array<{
            texture: {
                width: number;
                height: number;
                x: number;
                y: number;
            }
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
        }>
    }
}