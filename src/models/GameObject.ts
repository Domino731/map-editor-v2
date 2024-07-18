import {Vector} from "../types.ts";
import {GameActorType} from "./game.ts";
import {GameObjectTextureNameUnion} from "./textures.ts";

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


export interface TreeTrunkModel {
    x: number,
    y: number,
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
}


export enum GameObjectType {
    Mine = 'Mine',
    Tree = 'Tree',
    Crop = 'Crop',
    Bush = "Bush",
    Grass = "Grass",
    FruitTree = 'FruitTree',
    Building = "Building",
    Flooring = "Flooring",
    HoeDirt = "HoeDirt"
}

export type GameObjectTypeUnion = keyof typeof GameObjectType;

export enum GameObjectActions {
    Cut = "Cut",
    Harvest = "Harvest",
    Water = "Water"
}

export type GameObjectActionsUnion = keyof typeof GameObjectActions;


// OBJECT MODELS //

export interface GameObjectBase {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    actorType: GameActorType.Object;
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

export interface BushObjectModel extends GameObjectBase {
}

export interface GrassObjectModel extends GameObjectBase {
}

export interface BuildingObjectModel extends GameObjectBase {
}


export interface TreeStageModel {
    texture: GameObjectTexture;
    nextStage: number;
    drop: Array<GameObjectDrop>;
    groundCollision: Vector;
    actionCollisions: Array<GameObjectActionCollision>;
    zIndex: Vector;
    groundPlace: GameObjectGroundPlace;
}

export interface TreeObjectModel {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    actorType: GameActorType.Object;
    specs: {
        treeTrunk: TreeTrunkModel;
        stages: Array<TreeStageModel>;
    }
}

export interface FruitTreeObjectModel {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    actorType: GameActorType.Object;
    specs: {
        stages: Array<TreeStageModel>;
    }
}

export interface CropObjectModel {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    actorType: GameActorType.Object;
    specs: {
        stages: Array<TreeStageModel>;
    }
}