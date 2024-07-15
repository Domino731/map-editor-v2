export enum EntityType {
    Animal = "Animal",
    Monster = "Monster",
    Npc = "Npc"
}

export type EntityTypeUnion = keyof typeof EntityType;