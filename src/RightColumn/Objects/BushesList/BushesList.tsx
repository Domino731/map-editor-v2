import {ObjectImage} from "../../../components/ObjectImage";
import styles from './BushesList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../../store/AppReducer.ts";
import {IconButton, Tooltip, useTheme} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {Modals} from "../../../Modals/ModalManager.types.ts";
import {GameObjectTexture} from "../../../models/GameObject.ts";
import {GameActorTypeUnion} from "../../../models/game.ts";

interface BushesListProps {
    objects: Array<{
        id: string;
        texture: GameObjectTexture;
        name: string;
        actorType: GameActorTypeUnion;
    }>
}

export const BushesList = ({objects}: BushesListProps) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const currentObjectId = useSelector(AppSelectors.objectId);
    return <ul className={styles.list}>
        {objects.map(el => {
            return <li key={`bushes-list-item-${el.id}`} onClick={() => dispatch(AppSliceActions.setObjectId({
                objectId: el.id,
                actorType: el.actorType
            }))}
                       className={styles.listItem}>
                <div>
                    <ObjectImage
                        texture={el.texture}
                    />
                    <p style={{color: el.id === currentObjectId ? theme.palette.primary.main : 'white'}}>
                        {el.name}
                    </p>
                </div>
                <Tooltip title="Details">
                    <IconButton
                        onClick={() => dispatch(AppSliceActions.setActiveModel({
                            modalName: Modals.ObjectDetails, modalProps: {
                                objectId: el.id
                            }
                        }))}>
                        <InfoIcon/>
                    </IconButton>
                </Tooltip>


            </li>
        })}
    </ul>
}