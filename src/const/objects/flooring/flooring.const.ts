export enum FlooringNames {
    Wood = 'Wood',
    StoneBrick = "StoneBrick",
    BrownStoneSlab = "BrownStoneSlab",
    BlueGem = "BlueGem",
    Barn = "Barn",
    Ice = "Ice",
    DirtPlank = "DirtPlanks",
    ColorStone = "ColorStone",
    Stone = "Stone",
    Rock = "Rock",
    LightStone = "LightStone",
    WoodDesk = "WoodDesks",
    Castle = "Castle"
}

export type FlooringNamesUnion = keyof typeof FlooringNames;