import {BushesData} from "./bushes/bushes.ts";
import {MinesData} from "./mines/mines.ts";
import {TreesData} from "./trees/trees.ts";
import {CropsData} from "./crops/crops.ts";
import {GrassData} from "./grass/grass.ts";
import {FruitTreesData} from "./fruitTree/fruit-trees.ts";
import {BuildingsData} from "./buildings/buildings.ts";
import {HoeDirtData} from "./hoeDirt/hoeDirt.ts";
import {GameObjectUnion} from "../../models/GameObject.ts";
import {StaticTreesData} from "./staticTrees/staticTrees.ts";
import {DebrisData} from "./debris/debris.ts";

export const AllObjects: Array<GameObjectUnion> = [
    ...BushesData,
    ...MinesData,
    ...TreesData,
    ...CropsData,
    ...GrassData,
    ...FruitTreesData,
    ...BuildingsData,
    ...HoeDirtData,
    ...StaticTreesData,
    ...DebrisData
];