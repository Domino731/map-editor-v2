//     runDown = "runDown",
//     runRight = "runRight",
//     runUp = "runUp",
//     runLeft = "runLeft"

import {EntityAnimationType} from "../../../../models/Entities.ts";

export const entityAnimationsOptions = [
    {
        animation: EntityAnimationType.runDown, label: "Run down",
    },
    {
        animation: EntityAnimationType.runRight, label: "Run right",
    },
    {
        animation: EntityAnimationType.runUp, label: "Run up",
    },
    {
        animation: EntityAnimationType.runLeft, label: "Run left",
    }
]