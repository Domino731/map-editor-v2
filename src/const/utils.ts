import {GameObjectActions, GameObjectTextureName, GameObjectType} from "../models/GameObject.ts";

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
        default:
            console.error(`processObjectType(): no match for ${objectType}`)
            return GameObjectType.Tree;
    }
}

export const processObjectTexture = (objectTexture: string) => {
    switch (objectTexture) {
        case "mines":
            return GameObjectTextureName.Mines;
        case "crops":
            return GameObjectTextureName.Crops;
        case "trees":
            return GameObjectTextureName.Trees;
        case "bushes":
            return GameObjectTextureName.Bushes;
        case "grass":
            return GameObjectTextureName.Grass;
        default:
            console.error(`processObjectTexture(): no match for ${objectTexture}`)
            return GameObjectTextureName.Trees;
    }
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