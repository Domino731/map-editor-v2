import amaranth from '../../../assets/objects/crops/amaranth.json';
import ancientFruit from '../../../assets/objects/crops/ancient_fruit.json';
import artichoke from '../../../assets/objects/crops/artichoke.json';
import beet from '../../../assets/objects/crops/beet.json';
import blueJazz from '../../../assets/objects/crops/blue_jazz.json';
import blueberry from '../../../assets/objects/crops/blueberry.json';
import bokChok from '../../../assets/objects/crops/bok_chok.json';
import cactus from '../../../assets/objects/crops/cactus.json';
import coffeeBean from '../../../assets/objects/crops/coffee_bean.json';
import corn from '../../../assets/objects/crops/corn.json';
import cranberries from '../../../assets/objects/crops/cranberries.json';
import eggplant from '../../../assets/objects/crops/eggplant.json';
import fiber from '../../../assets/objects/crops/fiber.json';
import garlic from '../../../assets/objects/crops/garlic.json';
import grape from '../../../assets/objects/crops/grape.json';
import hops from '../../../assets/objects/crops/hops.json';
import hotPepper from '../../../assets/objects/crops/hot_pepper.json';
import kale from '../../../assets/objects/crops/kale.json';
import melon from '../../../assets/objects/crops/melon.json';
import parsnip from '../../../assets/objects/crops/parsnip.json';
import pineapple from '../../../assets/objects/crops/pineapple.json';
import potato from '../../../assets/objects/crops/potato.json';
import pumpkin from '../../../assets/objects/crops/pumpkin.json';
import radish from '../../../assets/objects/crops/radish.json';
import redCabbage from '../../../assets/objects/crops/red_cabbage.json';
import rhubarb from '../../../assets/objects/crops/rhubarb.json';
import starfruit from '../../../assets/objects/crops/starfruit.json';
import strawberry from '../../../assets/objects/crops/strawberry.json';
import sunflower from '../../../assets/objects/crops/sunflower.json';
import sweetGemBerry from '../../../assets/objects/crops/sweet_gem_berry.json';
import taroRoot from '../../../assets/objects/crops/taro_root.json';
import tomato from '../../../assets/objects/crops/tomato.json';
import tulip from '../../../assets/objects/crops/tulip.json';
import unmilledRice from '../../../assets/objects/crops/unmilled_rice.json';
import wheat from '../../../assets/objects/crops/wheat.json';
import yam from '../../../assets/objects/crops/yam.json';
import {processCropData} from "./crops.process.ts";
import {CropObjectModel} from "../../../models/GameObject.ts";

export const CropsData: Array<CropObjectModel> = [
    processCropData(amaranth),
    processCropData(ancientFruit),
    processCropData(artichoke),
    processCropData(beet),
    processCropData(blueJazz),
    processCropData(blueberry),
    processCropData(bokChok),
    processCropData(cactus),
    processCropData(coffeeBean),
    processCropData(corn),
    processCropData(cranberries),
    processCropData(eggplant),
    processCropData(fiber),
    processCropData(garlic),
    processCropData(grape),
    processCropData(hops),
    processCropData(hotPepper),
    processCropData(kale),
    processCropData(melon),
    processCropData(parsnip),
    processCropData(pineapple),
    processCropData(potato),
    processCropData(pumpkin),
    processCropData(radish),
    processCropData(redCabbage),
    processCropData(rhubarb),
    processCropData(starfruit),
    processCropData(strawberry),
    processCropData(sunflower),
    processCropData(sweetGemBerry),
    processCropData(taroRoot),
    processCropData(tomato),
    processCropData(tulip),
    processCropData(unmilledRice),
    processCropData(wheat),
    processCropData(yam)
];