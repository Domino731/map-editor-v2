import staticTree1summer from '../../../assets/objects/staticTree/staticTree1summer.json';
import staticTree1spring from '../../../assets/objects/staticTree/staticTree1spring.json';
import staticTree1autumn from '../../../assets/objects/staticTree/staticTree1autumn.json';
import staticTree1winter from '../../../assets/objects/staticTree/staticTree1winter.json';
import staticTree2summer from '../../../assets/objects/staticTree/staticTree2summer.json';
import staticTree2spring from '../../../assets/objects/staticTree/staticTree2spring.json';
import staticTree2autumn from '../../../assets/objects/staticTree/staticTree2autumn.json';
import staticTree2winter from '../../../assets/objects/staticTree/staticTree2winter.json';
import staticTree3summer from '../../../assets/objects/staticTree/staticTree3summer.json';
import staticTree3spring from '../../../assets/objects/staticTree/staticTree3spring.json';
import staticTree3autumn from '../../../assets/objects/staticTree/staticTree3autumn.json';
import staticTree3winter from '../../../assets/objects/staticTree/staticTree3winter.json';
import {StaticTreeJsonData} from "./staticTrees.types.ts";
import {processStaticTreeData} from "./staticTrees.process.ts";
import {StaticTreeObjectModel} from "../../../models/GameObject.ts";

const jsonData: Array<StaticTreeJsonData> = [
    staticTree1summer,
    staticTree1spring,
    staticTree1autumn,
    staticTree1winter,

    staticTree2summer,
    staticTree2spring,
    staticTree2autumn,
    staticTree2winter,

    staticTree3summer,
    staticTree3spring,
    staticTree3autumn,
    staticTree3winter


]
export const StaticTreesData: Array<StaticTreeObjectModel> = jsonData.map(processStaticTreeData);