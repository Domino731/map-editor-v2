import babyBlueChicken from '../../../assets/characters/animals/baby_blue_chicken.json'
import {processAnimalData} from "./animals.process.ts";
import {AnimalModel} from "../../../models/Entities.ts";
import {AnimalJsonData} from "./animals.types.ts";


const rawData: AnimalJsonData[] = [babyBlueChicken];
export const AnimalsData: AnimalModel[] = rawData.map(processAnimalData)