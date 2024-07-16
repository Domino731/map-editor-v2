export enum GameActorType {
    Tile = "Tile",
    Object = "Object",
    Entity = "Entity"
}

export type GameActorTypeUnion = keyof typeof GameActorType;