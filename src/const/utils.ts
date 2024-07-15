import {
    GameObjectActions,
    GameObjectTextureName,
    GameObjectTextureNameUnion,
    GameObjectType
} from "../models/GameObject.ts";

export const processObjectType = (objectType: string) => {
    switch (objectType) {
        case "mine":
            return GameObjectType.Mine;
        case "crop":
            return GameObjectType.Crop;
        case "tree":
            return GameObjectType.Tree;
        case 'grass':
            return GameObjectType.Grass;
        case 'fruitTree':
            return GameObjectType.FruitTree;
        case 'bush':
            return GameObjectType.Bush;
        case 'building':
            return GameObjectType.Building;
        default:
            console.error(`processObjectType(): no match for ${objectType}`)
            return GameObjectType.Tree;
    }
}

export const processObjectTexture = (objectTexture: string) => {
    const data: Record<string, GameObjectTextureNameUnion> = {
        ['mines']: GameObjectTextureName.Mines,
        ['crops']: GameObjectTextureName.Crops,
        ['trees']: GameObjectTextureName.Trees,
        ['bushes']: GameObjectTextureName.Bushes,
        ['grass']: GameObjectTextureName.Grass,
        ['BuildingBarn']: GameObjectTextureName.BuildingBarn,
        ['BuildingBeachCabin']: GameObjectTextureName.BuildingBeachCabin,
        ['BuildingBigBarn']: GameObjectTextureName.BuildingBigBarn,
        ['BuildingBigCoop']: GameObjectTextureName.BuildingBigCoop,
        ['BuildingBigShed']: GameObjectTextureName.BuildingBigShed,
        ['BuildingCoop']: GameObjectTextureName.BuildingCoop,
        ['BuildingDeluxeBarn']: GameObjectTextureName.BuildingDeluxeBarn,
        ['BuildingDeluxeCoop']: GameObjectTextureName.BuildingDeluxeCoop,
        ['BuildingDesertObelisk']: GameObjectTextureName.BuildingDesertObelisk,
        ['BuildingEarthObelisk']: GameObjectTextureName.BuildingEarthObelisk,
        ['BuildingError']: GameObjectTextureName.BuildingError,
        ['BuildingFishPond']: GameObjectTextureName.BuildingFishPond,
        ['BuildingGoldClock']: GameObjectTextureName.BuildingGoldClock,
        ['BuildingGreenhouse']: GameObjectTextureName.BuildingGreenhouse,
        ['BuildingHeyPetBowl']: GameObjectTextureName.BuildingHeyPetBowl,
        ['BuildingHouses']: GameObjectTextureName.BuildingHouses,
        ['BuildingIslandObelisk']: GameObjectTextureName.BuildingIslandObelisk,
        ['BuildingJunimoHut']: GameObjectTextureName.BuildingJunimoHut,
        ['BuildingLogCabin']: GameObjectTextureName.BuildingLogCabin,
        ['BuildingMailbox']: GameObjectTextureName.BuildingMailbox,
        ['BuildingMill']: GameObjectTextureName.BuildingMill,
        ['BuildingNeightbourCabin']: GameObjectTextureName.BuildingNeightbourCabin,
        ['BuildingPetBowl']: GameObjectTextureName.BuildingPetBowl,
        ['BuildingPlankCabin']: GameObjectTextureName.BuildingPlankCabin,
        ['BuildingRusticCabin']: GameObjectTextureName.BuildingRusticCabin,
        ['BuildingShed']: GameObjectTextureName.BuildingShed,
        ['BuildingShippingBin']: GameObjectTextureName.BuildingShippingBin,
        ['BuildingSilo']: GameObjectTextureName.BuildingSilo,
        ['BuildingSlimeHutch']: GameObjectTextureName.BuildingSlimeHutch,
        ['BuildingStable']: GameObjectTextureName.BuildingStable,
        ['BuildingStoneCabin']: GameObjectTextureName.BuildingStoneCabin,
        ['BuildingStonePetBowl']: GameObjectTextureName.BuildingStonePetBowl,
        ['BuildingTreilerCabin']: GameObjectTextureName.BuildingTreilerCabin,
        ['BuildingWaterObelisk']: GameObjectTextureName.BuildingWaterObelisk,
        ['BuildingWell']: GameObjectTextureName.BuildingWell,
    }
    if (data[objectTexture]) {
        return data[objectTexture];
    }
    console.error(`processObjectTexture(): no match for ${objectTexture}`)
    return GameObjectTextureName.Trees;

}

export const processObjectActionType = (actionType: string) => {
    switch (actionType) {
        case "Cut":
        case "cut":
            return GameObjectActions.Cut;
        case "harvest":
            return GameObjectActions.Harvest;
        case "water":
            return GameObjectActions.Water
        default:
            console.error(`processObjectActionType(): no match for ${actionType}`)
            return GameObjectActions.Water;
    }
}