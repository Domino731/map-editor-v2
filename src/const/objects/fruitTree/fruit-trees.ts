import apricot from '../../../assets/objects/fruit-trees/cherry.json';
import cherry from '../../../assets/objects/fruit-trees/apricot.json';
import banana from '../../../assets/objects/fruit-trees/orange.json';
import tree4 from '../../../assets/objects/fruit-trees/peach.json';
import tree5 from '../../../assets/objects/fruit-trees/pomegranateTree.json';
import tree6 from '../../../assets/objects/fruit-trees/apple.json';
import tree7 from '../../../assets/objects/fruit-trees/dry-tree.json';
import tree8 from '../../../assets/objects/fruit-trees/banana.json';
import tree9 from '../../../assets/objects/fruit-trees/mango.json';
import {processFruitTreeData} from "./fruit-tree.process.ts";
import {FruitTreeObjectModel} from "../../../models/GameObject.ts";

export const FruitTreesData: Array<FruitTreeObjectModel> = [
    processFruitTreeData(apricot),
    processFruitTreeData(cherry),
    processFruitTreeData(banana),
    processFruitTreeData(tree4),
    processFruitTreeData(tree5),
    processFruitTreeData(tree6),
    processFruitTreeData(tree7),
    processFruitTreeData(tree8),
    processFruitTreeData(tree9)
]