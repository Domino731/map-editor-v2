import {useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {Modals} from "./ModalManager.types.ts";
import {ObjectDetailsModal} from "./ObjectDetailsModal";

export const ModalsManager = () => {
    const activeModal = useSelector(AppSelectors.activeModal);

    switch (activeModal) {
        case Modals.ObjectDetails:
            return <ObjectDetailsModal isOpen/>
        default:
            return null;
    }
}