import {BushesData} from "./bushes/bushes.ts";
import {MinesData} from "./mines/mines.ts";
import {TreesData} from "./trees/trees.ts";
import {CropsData} from "./crops/crops.ts";
import {GrassData} from "./grass/grass.ts";
import {FruitTreesData} from "./fruitTree/fruit-trees.ts";
import {BuildingsData} from "./buildings/buildings.ts";

export const AllObjects = [
    ...BushesData,
    ...MinesData,
    ...TreesData,
    ...CropsData,
    ...GrassData,
    ...FruitTreesData,
    ...BuildingsData
];