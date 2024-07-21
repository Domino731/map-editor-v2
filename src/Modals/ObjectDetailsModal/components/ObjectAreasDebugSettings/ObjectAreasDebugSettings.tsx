import {Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import {ChangeEvent, useCallback} from "react";
import {ObjectAreasSettings} from "../../store.types.ts";


interface ObjectAreasDebugSettingsProps {
    areasSettings: ObjectAreasSettings;
    onChange: (name: string, value: boolean) => void;
    isHitBoxVisible?: boolean;
}

export const ObjectAreasDebugSettings = ({areasSettings, onChange, isHitBoxVisible}: ObjectAreasDebugSettingsProps) => {
    const handleChangeAreasSettings = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {target: {name, checked}} = e;
        onChange(name, checked)
    }, [onChange])

    return <div>
        <Typography variant="h6" gutterBottom>Debug Settings</Typography>
        <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={areasSettings.isTextureHighlighted} name="isTextureHighlighted"
                                   onChange={handleChangeAreasSettings}
                />}
                label="Highlight texture"/>
            {isHitBoxVisible && <FormControlLabel
                control={<Checkbox checked={areasSettings.isHitBoxHighlighted} name="isHitBoxHighlighted"
                                   onChange={handleChangeAreasSettings}/>}
                label="Hightlight hit box"/>}
            <FormControlLabel
                control={<Checkbox checked={areasSettings.isBlackBackground} name="isBlackBackground"
                                   onChange={handleChangeAreasSettings}/>}
                label="Show black background"/>
            <FormControlLabel control={<Checkbox checked={areasSettings.isGrid} name="isGrid"
                                                 onChange={handleChangeAreasSettings}/>}
                              label="Show grid"/>
            <FormControlLabel
                control={<Checkbox checked={areasSettings.isGroundAreaHighlighted} name="isGroundAreaHighlighted"
                                   onChange={handleChangeAreasSettings}/>}
                label="Highlight ground area"/>
            <FormControlLabel
                control={<Checkbox checked={areasSettings.isGroundCollisionHighlighted}
                                   name="isGroundCollisionHighlighted"
                                   onChange={handleChangeAreasSettings}/>}
                label="Highlight ground collision"/>
            <FormControlLabel
                control={<Checkbox checked={areasSettings.isActionsCollisionsHighlighted}
                                   name="isActionsCollisionsHighlighted"
                                   onChange={handleChangeAreasSettings}/>}
                label="Highlight actions collisions"/>
            <FormControlLabel
                control={<Checkbox checked={areasSettings.isZIndexLineHighlighted} name="isZIndexLineHighlighted"
                                   onChange={handleChangeAreasSettings}/>}
                label="Highlight z index line"/>
        </FormGroup>
    </div>
}