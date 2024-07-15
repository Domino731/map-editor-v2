import mushroom from '../../../assets/objects/trees/mushroom.json';
import maple from '../../../assets/objects/trees/maple.json';
import mahogany from '../../../assets/objects/trees/mahogany.json';
import oak from '../../../assets/objects/trees/oak.json';
import palmMedium from '../../../assets/objects/trees/palm-medium.json';
import palmSmall from '../../../assets/objects/trees/palm-small.json';
import pine from '../../../assets/objects/trees/pine.json';
import {processTreeData} from "./trees.process.ts";

export const TreesData = [
    processTreeData(mushroom),
    processTreeData(maple),
    processTreeData(mahogany),
    processTreeData(oak),
    processTreeData(palmMedium),
    processTreeData(palmSmall),
    processTreeData(pine),
];