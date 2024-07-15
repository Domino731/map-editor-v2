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

export interface BushObjectModel extends GameObjectBase {
}

export interface GrassObjectModel extends GameObjectBase {
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

export interface FruitTreeObjectModel {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    specs: {
        stages: Array<TreeStageModel>;
    }
}

export interface CropObjectModel {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    specs: {
        stages: Array<TreeStageModel>;
    }
}

// ENUMS
export enum GameObjectType {
    Mine = 'Mine',
    Tree = 'Tree',
    Crop = 'Crop',
    Bush = "Bush",
    Grass = "Grass",
    FruitTree = 'FruitTree',
}

export type GameObjectTypeUnion = keyof typeof GameObjectType;

export enum GameObjectTextureName {
    Mines = 'Mines',
    Trees = 'Trees',
    Crops = 'Crops',
    Bushes = "Bushes",
    FruitTree = "FruitTree",
    Grass = "Grass",

    BuildingBarn = 'BuildingBarn',
    BuildingBeachCabin = "BuildingBeachCabin",
    BuildingBigBarn = 'BuildingBigBarn',
    BuildingBigCoop = "BuildingBigCoop",
    BuildingBigShed = 'BuildingBigShed',
    BuildingCoop = "BuildingCoop",
    BuildingDeluxeBarn = "BuildingDeluxeBarn",
    BuildingDeluxeCoop = "BuildingDeluxeCoop",
    BuildingDesertObelisk = "BuildingDesertObelisk",
    BuildingEarthObelisk = "BuildingEarthObelisk",
    BuildingError = "BuildingError",
    BuildingFishPond = "BuildingFishPond",
    BuildingGoldClock = "BuildingGoldClock",
    BuildingGreenhouse = "BuildingGreenhouse",
    BuildingHeyPetBowl = 'BuildingHeyPetBowl',
    BuildingHouses = "BuildingHouses",
    BuildingIslandObelisk = "BuildingIslandObelisk",
    BuildingJunimoHut = "BuildingJunimoHut",
    BuildingLogCabin = "BuildingLogCabin",
    BuildingMailbox = "BuildingMailbox",
    BuildingMill = "BuildingMill",
    BuildingNeightbourCabin = "BuildingNeightbourCabin",
    BuildingPetBowl = "BuildingPetBowl",
    BuildingPlankCabin = "BuildingPlankCabin",
    BuildingRusticCabin = "BuildingRusticCabin",
    BuildingShed = "BuildingShed",
    BuildingShippingBin = "BuildingShippingBin",
    BuildingSilo = "BuildingSilo",
    BuildingSlimeHutch = "BuildingSlimeHutch",
    BuildingStable = "BuildingStable",
    BuildingStoneCabin = "BuildingStoneCabin",
    BuildingStonePetBowl = "BuildingStonePetBowl",
    BuildingTreilerCabin = "BuildingTreilerCabin",
    BuildingWaterObelisk = "BuildingWaterObelisk",
    BuildingWell = "BuildingWell"
}

export type GameObjectTextureNameUnion = keyof typeof GameObjectTextureName;


export enum GameObjectActions {
    Cut = "Cut",
    Harvest = "Harvest",
    Water = "Water"
}

export type GameObjectActionsUnion = keyof typeof GameObjectActions;