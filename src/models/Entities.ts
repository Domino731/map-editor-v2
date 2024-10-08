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

export type EntityAnimationsModel = Record<EntityAnimationTypeUnion, Array<Array<number>>>;

export enum EntityAnimationType {
    runDown = "runDown",
    runRight = "runRight",
    runUp = "runUp",
    runLeft = "runLeft"
}

export type EntityAnimationTypeUnion = keyof typeof EntityAnimationType;


export interface EntityModel {
    id: string;
    name: string;
    texture: EntityTextureModel;
    entityType: EntityTypeUnion;
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
    damage: number;
    animations: EntityAnimationsModel;

}

export interface AnimalModel extends EntityModel {
}


export type EntityTypeUnion = keyof typeof EntityType;