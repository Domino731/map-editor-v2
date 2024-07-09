import {BushesData} from "../../../const/bushes.ts";
import {ObjectImage} from "../components/ObjectImage";
import bushImage from '../../../assets/map/objects/environment/bushes.png';
import styles from './BushesList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../../store/AppReducer.ts";
import {useTheme} from "@mui/material";

export const BushesList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const currentObjectId = useSelector(AppSelectors.objectId);

    return <ul className={styles.list}>
        {BushesData.map(el => {
            return <li key={`bushes-list-item-${el.id}`} onClick={() => dispatch(AppSliceActions.setObjectId(el.id))}
                       className={styles.listItem}>
                <ObjectImage
                    src={bushImage}
                    x={el.specs.texture.x}
                    y={el.specs.texture.y}
                    width={el.specs.texture.width}
                    height={el.specs.texture.height}
                />
                <p style={{color: el.id === currentObjectId ? theme.palette.primary.main : 'white'}}>
                    {el.name}
                </p>

            </li>
        })}
    </ul>
}