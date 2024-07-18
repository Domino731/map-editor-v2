import {Cords, Vector} from "../types.ts";
import {
    GameObjectActionCollision,
    GameObjectDrop,
    GameObjectGroundPlace
} from "./GameObject.ts";
import {GameActorType} from "./game.ts";
import {GameObjectTextureNameUnion} from "./textures.ts";

export enum EntityType {
    Animal = "Animal",
    Monster = "Monster",
    Npc = "Npc"
}


export interface EntityTextureModel {
    name: GameObjectTextureNameUnion;
    width: number;
    height: number;
}

export interface EntityAnimationsModel {
    runDown: Array<Array<number>>;
    runRight: Array<Array<number>>;
    runUp: Array<Array<number>>;
    runLeft: Array<Array<number>>;
}

export interface EntityModel {
    id: string;
    name: string;
    texture: EntityTextureModel;
    actorType: GameActorType.Entity;
    presentationTextureCords: Cords;
    groundPlace: GameObjectGroundPlace;
    groundCollision: Vector;
    actionCollisions: Array<GameObjectActionCollision>;
    zIndex: Vector;
    drop: Array<GameObjectDrop>;
    hitBox: Vector;
    hp: number;
    exp: number;
    animations: EntityAnimationsModel;

}

export interface AnimalModel extends EntityModel {
}


export type EntityTypeUnion = keyof typeof EntityType;