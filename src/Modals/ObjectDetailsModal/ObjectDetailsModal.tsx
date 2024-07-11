import {Box, Modal, Tab, Tabs, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppSliceActions} from "../../store/AppReducer.ts";
import styles from './ObjectDetailsModal.module.scss';
import {TreesData} from "../../const/trees.ts";
import {useCallback, useMemo, useState} from "react";
import {AllObjects} from "../../const/allObjects.ts";
import {TreeModel} from "../../models/tree.ts";
import {ObjectDetailsModelTabs} from "./ObjectDetailsModel.const.ts";
import {ObjectGeneralInfo} from "./Tabs/ObjectGeneralInfo";
import {ObjectAreas} from "./Tabs/ObjectAreas";

interface ObjectDetailsModalProps {
    isOpen: boolean;
}

export const ObjectDetailsModal = ({isOpen}: ObjectDetailsModalProps) => {
    const dispatch = useDispatch();
    const id = TreesData[1].id;

    const [tab, setTab] = useState<ObjectDetailsModelTabs>(ObjectDetailsModelTabs.Areas);

    const objectData = useMemo((): TreeModel => {
        return AllObjects.find(el => el.id === id);
    }, [id])

    const TabComponent = useCallback(() => {
        switch (tab) {
            case ObjectDetailsModelTabs.General:
                return <ObjectGeneralInfo/>
            case ObjectDetailsModelTabs.Areas:
                return <ObjectAreas/>
            default:
                return null;
        }
    }, [tab])

    return <Modal
        open={isOpen}
        onClose={() => dispatch(AppSliceActions.closeModel())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
    >
        <Box className={styles.box}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
                Object details: {objectData.name}
            </Typography>
            <Tabs value={tab} aria-label="right-column-tabs" className={styles.tabs} variant="fullWidth">
                <Tab label="General" value={ObjectDetailsModelTabs.General}
                     onClick={() => setTab(ObjectDetailsModelTabs.General)}/>
                <Tab label="Areas" value={ObjectDetailsModelTabs.Areas}
                     onClick={() => setTab(ObjectDetailsModelTabs.Areas)}/>
            </Tabs>
            <TabComponent/>
        </Box>
    </Modal>
}