export interface HoeDirtJsonData {
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
