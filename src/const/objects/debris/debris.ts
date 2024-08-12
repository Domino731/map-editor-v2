import {DebrisJsonData} from "./debris.types.ts";
import stone1 from '../../../assets/objects/debris/stone1.json';
import stone2 from '../../../assets/objects/debris/stone2.json';
import wood1 from '../../../assets/objects/debris/wood1.json';
import wood2 from '../../../assets/objects/debris/wood2.json';
import {DebrisObjectModel} from "../../../models/GameObject.ts";
import {processDebrisData} from "./debris.process.ts";

const jsonData: Array<DebrisJsonData> = [
    stone1,
    stone2,
    wood1,
    wood2
]

export const DebrisData: Array<DebrisObjectModel> = jsonData.map(processDebrisData)