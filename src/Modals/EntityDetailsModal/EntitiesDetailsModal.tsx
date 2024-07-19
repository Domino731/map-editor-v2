import styles from './EntitiesDetailsModal.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {AppSliceActions} from "../../store/AppReducer.ts";
import {Modal, Tab, Tabs, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {EntityDetailsModalTabs, EntityDetailsModalTabsUnion} from "./EntityDetailsModal.const.ts";
import {entityDetailsModalSliceActions} from "./store.ts";
import {entityDetailsModalSelectors} from "./store.selectors.ts";
import {EntityAnimations} from "./tabs/EntityAnimations";
import {EntityAreas} from "./tabs/EntityAreas";
import {EntityGeneralInfo} from "./tabs/EntityGeneralInfo";

export interface EntityDetailsModalProps {
    entityId: string;
    isOpen: boolean;
}

export const EntitiesDetailsModal = ({entityId, isOpen}: EntityDetailsModalProps) => {
    const dispatch = useDispatch();

    const entityData = useSelector(entityDetailsModalSelectors.entityData);

    const [tab, setTab] = useState<EntityDetailsModalTabsUnion>(EntityDetailsModalTabs.Animations);

    useEffect(() => {
        dispatch(entityDetailsModalSliceActions.setEntityDataById(entityId));
    }, [dispatch, entityId]);

    const TabComponent = useCallback(() => {
        switch (tab) {
            case EntityDetailsModalTabs.Areas:
                return <EntityAreas/>
            case EntityDetailsModalTabs.Animations:
                return <EntityAnimations/>
            case EntityDetailsModalTabs.General:
                return <EntityGeneralInfo/>
            default:
                return null;
        }
    }, [tab])

    const handleDownloadJsonFile = useCallback(() => {
        alert("TODO: add download functionality")
    }, [])

    const handleCloseModal = useCallback(() => {
        dispatch(AppSliceActions.closeModal());
        dispatch(entityDetailsModalSliceActions.resetState());
    }, [dispatch])

    if (!entityData) return <>Loading...</>

    return <Modal
        open={isOpen}
        onClose={handleCloseModal}
        className={styles.modal}
    >
        <div className={styles.box}>
            <div className={styles.titleBar}>
                <Typography variant="h5" component="h2">
                    Entity details: {entityData.name}
                </Typography>
                <Button variant="outlined" color="success" onClick={handleDownloadJsonFile}>Download .json</Button>
            </div>
            <Tabs value={tab} className={styles.tabs} variant="fullWidth">
                <Tab label="General" value={EntityDetailsModalTabs.General}
                     onClick={() => setTab(EntityDetailsModalTabs.General)}/>
                <Tab label="Areas" value={EntityDetailsModalTabs.Areas}
                     onClick={() => setTab(EntityDetailsModalTabs.Areas)}/>
                <Tab label="Animations" value={EntityDetailsModalTabs.Animations}
                     onClick={() => setTab(EntityDetailsModalTabs.Animations)}/>
            </Tabs>
            <TabComponent/>
        </div>
    </Modal>
}