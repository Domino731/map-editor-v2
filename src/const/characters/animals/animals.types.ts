export interface AnimalJsonData {
    id: string;
    name: string;
    texture: {
        name: string;
        width: number;
        height: number;
    },
    presentation_texture_cords: {
        x: number;
        y: number;
    },
    ground_place: {
        x: number;
        y: number;
        width: number;
        height: number;
    },
    ground_collision: {
        x: number;
        y: number;
        width: number;
        height: number;
    },
    z_index: {
        x: number;
        y: number;
        width: number;
        height: number;
    },
    "action_collisions": Array<{
        width: number;
        height: number;
        x: number;
        y: number;
        action_type: string;
    }>,
    drop: Array<{
        id: string;
        chance: number | number[];
        amount: number | number[];
    }>;
    hit_box: {
        width: number;
        height: number;
        x: number;
        y: number;
    },
    animations: {
        runDown: Array<Array<number>>;
        runRight: Array<Array<number>>;
        runUp: Array<Array<number>>;
        runLeft: Array<Array<number>>;
    },
    hp: number
}