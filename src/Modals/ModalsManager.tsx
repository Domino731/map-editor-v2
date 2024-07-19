import {useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {Modals} from "./ModalManager.types.ts";
import {ObjectDetailsModal} from "./ObjectDetailsModal";
import {EntitiesDetailsModal} from "./EntityDetailsModal";
import {EntityDetailsModalProps} from "./EntityDetailsModal/EntitiesDetailsModal.tsx";
import {ObjectDetailsModalProps} from "./ObjectDetailsModal/ObjectDetailsModal.tsx";

export const ModalsManager = () => {
    const activeModal = useSelector(AppSelectors.activeModal);
    const modalProps = useSelector(AppSelectors.modalProps);

    switch (activeModal) {
        case Modals.ObjectDetails:
            return <ObjectDetailsModal isOpen objectId={(modalProps as ObjectDetailsModalProps).objectId}/>
        case Modals.EntityDetails:
            return <EntitiesDetailsModal isOpen entityId={(modalProps as EntityDetailsModalProps).entityId}/>
        default:
            return null;
    }
}