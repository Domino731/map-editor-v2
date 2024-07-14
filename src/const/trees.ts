import mushroom from '../assets/objects/trees/mushroom.json';
import maple from '../assets/objects/trees/maple.json';
import mahogany from '../assets/objects/trees/mahogany.json';
import oak from '../assets/objects/trees/oak.json';
import palmMedium from '../assets/objects/trees/palm-medium.json';
import palmSmall from '../assets/objects/trees/palm-small.json';
import pine from '../assets/objects/trees/pine.json';
import {generateUUID} from "../utils/string.ts";


export const TreesData = [
    mushroom,
    maple,
    mahogany,
    oak,
    palmMedium,
    palmSmall,
    pine,
].map(el => ({
    ...el,
    specs: {
        ...el.specs,
        stages: el.specs.stages.map(stage => ({
            ...stage,
            drop: stage.drop.map((drop => ({...drop, uuid: generateUUID()})))
        }))
    }
}))