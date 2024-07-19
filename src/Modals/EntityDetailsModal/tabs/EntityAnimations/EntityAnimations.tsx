import {useState} from "react";
import {EntityAnimationType, EntityAnimationTypeUnion} from "../../../../models/Entities.ts";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {entityAnimationsOptions} from "./EntityAnimations.const.ts";

export const EntityAnimations = () => {
    const [animationType, setAnimationType] = useState<EntityAnimationTypeUnion>(EntityAnimationType.runDown)

    return <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Animation type</InputLabel>
            <Select
                value={animationType}
                label="Animation type"
                onChange={e => setAnimationType(e.target.value as EntityAnimationTypeUnion)}
            >
                {entityAnimationsOptions.map(({label, animation}) => <MenuItem value={animation}>{label}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
}