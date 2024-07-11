import {BushesData} from "./bushes.ts";
import {MinesData} from "./mines.ts";
import {TreesData} from "./trees.ts";
import {CropsData} from "./crops.ts";
import {GrassData} from "./grass.ts";
import {FruitTreesData} from "./fruit-trees.ts";
import {StaticTreesData} from "./staticTrees.ts";

export const AllObjects = [
    ...BushesData,
    ...MinesData,
    ...TreesData,
    ...CropsData,
    ...GrassData,
    ...FruitTreesData,
    ...StaticTreesData
];