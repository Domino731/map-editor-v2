import hoeDirt1 from '../../../assets/objects/hoeDirt/hoe_dirt_1.json';
import hoeDirt2 from '../../../assets/objects/hoeDirt/hoe_dirt_2.json';
import hoeDirt3 from '../../../assets/objects/hoeDirt/hoe_dirt_3.json';
import {processHoeDirtData} from "./hoeDirt.process.ts";

export const HoeDirtData = [
    processHoeDirtData(hoeDirt1),
    processHoeDirtData(hoeDirt2),
    processHoeDirtData(hoeDirt3),
];
