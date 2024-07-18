import {Vector} from "../types.ts";
import {ObjectActionsUnion} from "../const/app.ts";

export enum GameActorType {
    Tile = "Tile",
    Object = "Object",
    Entity = "Entity"
}


export interface ObjectDropModel {
    id: string;
    chance: number[] | number;
    amount: number[] | number;
    uuid: string;
}


export interface ActionVector extends Vector {
    actionType: ObjectActionsUnion;
    color: string;
    uuid: string;
}

export type GameActorTypeUnion = keyof typeof GameActorType;