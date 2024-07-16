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
    Building = "Building",
    Flooring = "Flooring",
    HoeDirt = "HoeDirt"
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
    BuildingWell = "BuildingWell",
    HoeDirt = "HoeDirt",
    Flooring = "Flooring",

    BabyBlueChicken = 'BabyBlueChicken',
    BabyBrownChicken = 'BabyBrownChicken',
    BabyBrownCow = 'BabyBrownCow',
    BabyGoat = 'BabyGoat',
    BabyGoldenChicken = 'BabyGoldenChicken',
    BabyOstrich = 'BabyOstrich',
    BabyPig = 'BabyPig',
    BabyRabbit = 'BabyRabbit',
    BabySheep = 'BabySheep',
    BabyVoidChicken = 'BabyVoidChicken',
    BabyWhiteChicken = 'BabyWhiteChicken',
    BabyWhiteCow = 'BabyWhiteCow',
    BlueChicken = 'BlueChicken',
    BrownChicken = 'BrownChicken',
    BrownCow = 'BrownCow',
    Cat = 'Cat',
    Cat1 = 'Cat1',
    Cat2 = 'Cat2',
    Cat3 = 'Cat3',
    Cat4 = 'Cat4',
    Cat5 = 'Cat5',
    Dinosaur = 'Dinosaur',
    Dog = 'Dog',
    Dog1 = 'Dog1',
    Dog2 = 'Dog2',
    Dog3 = 'Dog3',
    Dog4 = 'Dog4',
    Dog5 = 'Dog5',
    Duck = 'Duck',
    Error = 'Error',
    Goat = 'Goat',
    GoldenChicken = 'GoldenChicken',
    Horse = 'Horse',
    Ostrich = 'Ostrich',
    Pig = 'Pig',
    Rabbit = 'Rabbit',
    ShearedSheep = 'ShearedSheep',
    Sheep = 'Sheep',
    Turtle = 'Turtle',
    Turtle1 = 'Turtle1',
    VoidChicken = 'VoidChicken',
    WhiteChicken = 'WhiteChicken',
    WhiteCow = 'WhiteCow',

    Abigail = "Abigail",
    AbigailBeach = "AbigailBeach",
    AbigailWinter = "AbigailWinter",
    Alex = "Alex",
    AlexBeach = "AlexBeach",
    AlexWinter = "AlexWinter",
    AngryRoger = "AngryRoger",
    ArmoredBug = "ArmoredBug",
    ArmoredBugDangerous = "ArmoredBugDangerous",
    AssassinBug = "AssassinBug",
    At = "At",
    Baby = "Baby",
    BabyDark = "BabyDark",
    BatDangerous = "BatDangerous",
    Bear = "Bear",
    BigSlime = "BigSlime",
    Birdie = "Birdie",
    BlueSquid = "BlueSquid",
    Bouncer = "Bouncer",
    Bug = "Bug",
    BugDangerous = "BugDangerous",
    CarbonGhost = "CarbonGhost",
    Caroline = "Caroline",
    CarolineBeach = "CarolineBeach",
    CarolineWinter = "CarolineWinter",
    Clint = "Clint",
    ClintBeach = "ClintBeach",
    ClintWinter = "ClintWinter",
    ClothesTherapyCharacters = "ClothesTherapyCharacters",
    Crow = "Crow",
    Demetrius = "Demetrius",
    DemetriusBeach = "DemetriusBeach",
    DemetriusWinter = "DemetriusWinter",
    DuggDangerous = "DuggDangerous",
    Duggy = "Duggy",
    Dwarf = "Dwarf",
    DwarvishSentry = "DwarvishSentry",
    DustSpirit = "DustSpirit",
    DustSpiritDangerous = "DustSpiritDangerous",
    Elliott = "Elliott",
    ElliottBeach = "ElliottBeach",
    ElliottWinter = "ElliottWinter",
    Emily = "Emily",
    EmilyBeach = "EmilyBeach",
    EmilyWinter = "EmilyWinter",
    Evelyn = "Evelyn",
    EvelynWinter = "EvelynWinter",
    FalseMagmaCap = "FalseMagmaCap",
    Fireball = "Fireball",
    Fizz = "Fizz",
    Fly = "Fly",
    FlyDangerous = "FlyDangerous",
    Frog = "Frog",
    FrostBat = "FrostBat",
    FrostBatDangerous = "FrostBatDangerous",
    George = "George",
    GeorgeWinter = "GeorgeWinter",
    Ghost = "Ghost",
    Gourmand = "Gourmand",
    Governor = "Governor",
    Grandpa = "Grandpa",
    GreenSlime = "GreenSlime",
    GreenSlimeDangerous = "GreenSlimeDangerous",
    Grub = "Grub",
    GrubDangerous = "GrubDangerous",
    Gunther = "Gunther",
    Gus = "Gus",
    GusWinter = "GusWinter",
    Haley = "Haley",
    HaleyBeach = "HaleyBeach",
    HaleyWinter = "HaleyWinter",
    HauntedSkull = "HauntedSkull",
    HauntedSkullDangerous = "HauntedSkullDangerous",
    Harvey = "Harvey",
    HarveyBeach = "HarveyBeach",
    HarveyWinter = "HarveyWinter",
    Henchman = "Henchman",
    HotHead = "HotHead",
    IridiumBat = "IridiumBat",
    IridiumCrab = "IridiumCrab",
    IridiumGolem = "IridiumGolem",
    IslandParrot = "IslandParrot",
    Jas = "Jas",
    JasWinter = "JasWinter",
    Jodi = "Jodi",
    JodiBeach = "JodiBeach",
    JodiWinter = "JodiWinter",
    Junimo = "Junimo",
    Kent = "Kent",
    KentWinter = "KentWinter",
    Krobus = "Krobus",
    KrobusRaven = "KrobusRaven",
    KrobusTrenchcoat = "KrobusTrenchcoat",
    LavaBat = "LavaBat",
    LavaCrab = "LavaCrab",
    LavaCrabDangerous = "LavaCrabDangerous",
    LavaLurk = "LavaLurk",
    Leah = "Leah",
    LeahBeach = "LeahBeach",
    LeahExFemale = "LeahExFemale",
    LeahExMale = "LeahExMale",
    LeahWinter = "LeahWinter",
    Lewis = "Lewis",
    LewisBeach = "LewisBeach",
    LewisWinter = "LewisWinter",
    Linus = "Linus",
    LinusWinter = "LinusWinter",
    MagmaDuggy = "MagmaDuggy",
    MagmaSparker = "MagmaSparker",
    MagmaSprite = "MagmaSprite",
    Marcello = "Marcello",
    Mariner = "Mariner",
    Marlon = "Marlon",
    Marnie = "Marnie",
    MarnieBeach = "MarnieBeach",
    MarnieWinter = "MarnieWinter",
    Maru = "Maru",
    MaruBeach = "MaruBeach",
    MaruHospital = "MaruHospital",
    MaruWinter = "MaruWinter",
    MetalHead = "MetalHead",
    MetalHeadDangerous = "MetalHeadDangerous",
    Morris = "Morris",
    MrQi = "MrQi",
    MrsRaccoon = "MrsRaccoon",
    Mummy = "Mummy",
    MummyDangerous = "MummyDangerous",
    Pam = "Pam",
    PamBeach = "PamBeach",
    PamWinter = "PamWinter",
    ParrotBoy = "ParrotBoy",
    ParrotBoyWinter = "ParrotBoyWinter",
    PepperRex = "PepperRex",
    Penny = "Penny",
    PennyBeach = "PennyBeach",
    PennyWinter = "PennyWinter",
    Pierre = "Pierre",
    PierreBeach = "PierreBeach",
    PierreWinter = "PierreWinter",
    PutridGhost = "PutridGhost",
    Raccoon = "Raccoon",
    Robin = "Robin",
    RobinBeach = "RobinBeach",
    RobinWinter = "RobinWinter",
    Robot = "Robot",
    RockCrab = "RockCrab",
    RockCrabDangerous = "RockCrabDangerous",
    RoyalSerpent = "RoyalSerpent",
    SafariGuy = "SafariGuy",
    Sam = "Sam",
    SamBeach = "SamBeach",
    SamWinter = "SamWinter",
    Sandy = "Sandy",
    SeaMonsterKrobus = "SeaMonsterKrobus",
    Sebastian = "Sebastian",
    SebastianBeach = "SebastianBeach",
    SebastianWinter = "SebastianWinter",
    Serpent = "Serpent",
    Shane = "Shane",
    ShaneBeach = "ShaneBeach",
    ShaneJojaMart = "ShaneJojaMart",
    ShaneWinter = "ShaneWinter",
    ShadowBrute = "ShadowBrute",
    ShadowBruteDangerous = "ShadowBruteDangerous",
    ShadowGirl = "ShadowGirl",
    ShadowShaman = "ShadowShaman",
    ShadowShamanDangerous = "ShadowShamanDangerous",
    ShadowSniper = "ShadowSniper",
    Skeleton = "Skeleton",
    SkeletonDangerous = "SkeletonDangerous",
    SkeletonMage = "SkeletonMage",
    SkeletonMageDangerous = "SkeletonMageDangerous",
    Spider = "Spider",
    Spiker = "Spiker",
    SquidKid = "SquidKid",
    SquidKidDangerous = "SquidKidDangerous",
    StickBug = "StickBug",
    StoneGolem = "StoneGolem",
    StoneGolemDangerous = "StoneGolemDangerous",
    TigerSlime = "TigerSlime",
    Toddler = "Toddler",
    ToddlerDark = "ToddlerDark",
    ToddlerGirl = "ToddlerGirl",
    ToddlerGirlDark = "ToddlerGirlDark",
    TruffleCrab = "TruffleCrab",
    Vincent = "Vincent",
    VincentWinter = "VincentWinter",
    WildernessGolem = "WildernessGolem",
    Willy = "Willy",
    WillyWinter = "WillyWinter",
    Wizard = "Wizard",
    Trashbear = "Trashbear",
    AssortedFishermen = "AssortedFishermen",
    AssortedFishermenWinter = "AssortedFishermenWinter"
}

export type GameObjectTextureNameUnion = keyof typeof GameObjectTextureName;


export enum GameObjectActions {
    Cut = "Cut",
    Harvest = "Harvest",
    Water = "Water"
}

export type GameObjectActionsUnion = keyof typeof GameObjectActions;