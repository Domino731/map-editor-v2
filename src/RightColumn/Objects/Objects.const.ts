import {ObjectsTypes, ObjectTypeOption} from "./Objects.types.ts";

export const objectTypeOptions: Array<ObjectTypeOption> = [
    {
        label: 'Bushes',
        type: ObjectsTypes.Bushes
    },
    {
        label: 'Crops',
        type: ObjectsTypes.Crops
    },
    {
        label: 'Debris',
        type: ObjectsTypes.Debris
    },
    {
        label: 'Trees',
        type: ObjectsTypes.Trees
    },
    {
        label: 'Fruit Trees',
        type: ObjectsTypes.FruitTrees
    },
    {
        label: 'Static Trees',
        type: ObjectsTypes.StaticTrees
    },
    {
        label: 'Mines',
        type: ObjectsTypes.Mines
    },
    {
        label: 'Grass',
        type: ObjectsTypes.Grass
    },
    {
        label: "Buildings",
        type: ObjectsTypes.Building
    },
    {
        label: "Flooring",
        type: ObjectsTypes.Flooring
    },
    {
        label: "Hoe Dirt",
        type: ObjectsTypes.HoeDirt
    }
]