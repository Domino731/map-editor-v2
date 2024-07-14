import {Vector} from "../types.ts";

export interface GameObjectTexture {
    name: GameObjectTextureNameUnion;
    width: number;
    height: number;
    x: number;
    y: number;
}

export interface GameObjectDrop {
    id: string;
    chance: number | number[];
    amount: number | number[];
}

export interface GameObjectActionCollision extends Vector {
    actionType: GameObjectActionsUnion;
    uuid: string;
}

export interface GameObjectGroundPlace {
    width: number;
    height: number;
    textureXOffset: number;
    textureYOffset: number;
}


export interface GameObjectBase {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    specs: {
        texture: GameObjectTexture;
        drop: Array<GameObjectDrop>;
        exp: number;
        groundCollision: Vector;
        actionCollisions: Array<GameObjectActionCollision>;
        zIndex: Vector;
        groundPlace: GameObjectGroundPlace;
    }
}

export interface MineObjectModel extends GameObjectBase {
}

export interface TreeStageModel {
    texture: GameObjectTextureNameUnion;
    width: number;
    height: number;
    x: number;
    y: number;
    nextStage: number;
    drop: Array<GameObjectDrop>;
    groundCollision: Vector;
    actionCollisions: Array<GameObjectActionCollision>;
    zIndex: Vector;
    groundPlace: GameObjectGroundPlace;
}

export interface TreeTrunkModel {
    x: number,
    y: number,
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
}

export interface TreeObjectModel {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    specs: {
        treeTrunk: TreeTrunkModel;
        stages: Array<TreeStageModel>;
    }
}


// ENUMS
export enum GameObjectType {
    Mine = 'Mine',
    Tree = 'Tree',
    Crop = 'Crop',
    Bush = "Bush"
}

export type GameObjectTypeUnion = keyof typeof GameObjectType;

export enum GameObjectTextureName {
    Mines = 'Mines',
    Trees = 'Trees',
    Crops = 'Crops',
    Bushes = "Bushes"
}

export type GameObjectTextureNameUnion = keyof typeof GameObjectTextureName;


export enum GameObjectActions {
    Cut = "Cut",
    Harvest = "Harvest",
    Water = "Water"
}

export type GameObjectActionsUnion = keyof typeof GameObjectActions;