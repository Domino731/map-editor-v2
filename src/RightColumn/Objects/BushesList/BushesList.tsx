import {ObjectImage} from "../components/ObjectImage";
import styles from './BushesList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../../store/AppReducer.ts";
import {IconButton, Tooltip, useTheme} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {Modals} from "../../../Modals/ModalManager.types.ts";

interface BushesListProps {
    objects: any[];
}

export const BushesList = ({objects}: BushesListProps) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const currentObjectId = useSelector(AppSelectors.objectId);

    return <ul className={styles.list}>
        {objects.map(el => {
            return <li key={`bushes-list-item-${el.id}`} onClick={() => dispatch(AppSliceActions.setObjectId(el.id))}
                       className={styles.listItem}>
                <div>
                    <ObjectImage
                        type={el.type}
                        x={el.specs.texture.x}
                        y={el.specs.texture.y}
                        width={el.specs.texture.width}
                        height={el.specs.texture.height}
                    />
                    <p style={{color: el.id === currentObjectId ? theme.palette.primary.main : 'white'}}>
                        {el.name}
                    </p>
                </div>
                <Tooltip title="Details">
                    <IconButton
                        onClick={() => dispatch(AppSliceActions.setActiveModel({modalName: Modals.ObjectDetails}))}>
                        <InfoIcon/>
                    </IconButton>
                </Tooltip>


            </li>
        })}
    </ul>
}