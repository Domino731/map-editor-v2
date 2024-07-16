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
        width: number;
        height: number;
        texture_x_offset: number;
        texture_y_offset: number;
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
    action_collisions: Array<{
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
        run_down: Array<Array<number>>;
        run_right: Array<Array<number>>;
        run_up: Array<Array<number>>;
        run_left: Array<Array<number>>;
    },
    hp: number;
    exp: number;
}