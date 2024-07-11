export const CELL_SIZE = 16;

export enum ObjectActions {
    Cut,
    Harvest,
    Water
}

export const OBJECTS_ACTIONS_OPTIONS = [
    {
        label: "Cut",
        value: ObjectActions.Cut
    },
    {
        label: "Harvest",
        value: ObjectActions.Harvest
    },
    {
        label: "Water",
        value: ObjectActions.Water
    }
]