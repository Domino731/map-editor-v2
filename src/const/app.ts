import {MapTileData} from "../store/AppReducer.types.ts";
import {TilesData} from "./tiles/tiles.ts";

export const CELL_SIZE = 16;

export enum ObjectActions {
    Cut = "Cut",
    Harvest = "Harvest",
    Water = "Water"
}

export type ObjectActionsUnion = keyof typeof ObjectActions;

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

export const defaultCellData: MapTileData = {
    ...TilesData[33],
    x: 0,
    y: 7 * 16
}