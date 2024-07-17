export interface ObjectTypeOption {
    label: string;
    type: ObjectsTypes
}

export enum ObjectsTypes {
    Bushes,
    Crops,
    Debris,
    Trees,
    FruitTrees,
    StaticTrees,
    Mines,
    Grass,
    Building,
    Flooring,
    HoeDirt
}