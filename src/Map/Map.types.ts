import {GameActorTypeUnion} from "../models/game.ts";
import {GameObjectTexture} from "../models/GameObject.ts";

export interface ActorOnMap {
    x: number;
    y: number;
    id: string;
    actorType: GameActorTypeUnion;
    uuid: string;
    stage: number | null;
    texture: GameObjectTexture;
}