import {FlooringNamesUnion} from "./flooring.const.ts";


const createFloorObject = () => {

}

export const createFlooringObjects = (flooringName: FlooringNamesUnion, xOffset: number, yOffset: number) => {
    const payload = [];
    const size = 16;

    const cords = [
        // First row
        {x: xOffset, y: yOffset, name: "full curb"},
        {x: xOffset + 1, y: yOffset, name: "left top curb"},
        {x: xOffset + 2, y: yOffset, name: "top curb"},
        {x: xOffset + 3, y: yOffset, name: "top right curb"},
        // Second row
        {x: xOffset, y: yOffset + 1, name: "left top right curb"},
        {x: xOffset + 1, y: yOffset + 1, name: "left curb"},
        {x: xOffset + 2, y: yOffset + 1, name: "no curb"},
        {x: xOffset + 3, y: yOffset + 1, name: "right curb"},
        // Third row
        {x: xOffset, y: yOffset + 2, name: "left right curb"},
        {x: xOffset + 1, y: yOffset + 2, name: "left bottom curb"},
        {x: xOffset + 2, y: yOffset + 2, name: "bottom curb"},
        {x: xOffset + 3, y: yOffset + 2, name: "right bottom curb"},
        // Fourth row
        {x: xOffset, y: yOffset + 3, name: "left right curb"},
        {x: xOffset + 1, y: yOffset + 3, name: "left bottom curb"},
        {x: xOffset + 2, y: yOffset + 3, name: "bottom curb"},
        {x: xOffset + 3, y: yOffset + 3, name: "right bottom curb"}
    ];
}