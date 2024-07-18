import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import {useCallback} from "react";
import {AppSliceActions} from "../../store/AppReducer.ts";
import {MapSettings} from "../../store/AppReducer.types.ts";

export const useMapSettingsOptions = () => {
    const dispatch = useDispatch();

    const mapSettings = useSelector(AppSelectors.mapSettings);

    const handleToggleSettings = useCallback((value: boolean, settingName: keyof MapSettings) => {
        dispatch(AppSliceActions.setMapSettings({...mapSettings, [settingName]: !value}))
    }, [dispatch, mapSettings])

    return [
        {
            label: "Hide tiles",
            onClick: () => handleToggleSettings(mapSettings.isTilesHidden, 'isTilesHidden'),
            isChecked: mapSettings.isTilesHidden
        },
        {
            label: "Hide objects",
            onClick: () => handleToggleSettings(mapSettings.isObjectHidden, 'isObjectHidden'),
            isChecked: mapSettings.isObjectHidden
        },
        {
            label: "Hide entities",
            onClick: () => handleToggleSettings(mapSettings.isEntitiesHidden, 'isEntitiesHidden'),
            isChecked: mapSettings.isEntitiesHidden
        },
        {
            label: "Hide map grid border",
            onClick: () => handleToggleSettings(mapSettings.isGridBorderHidden, 'isGridBorderHidden'),
            isChecked: mapSettings.isGridBorderHidden
        }
    ]
}