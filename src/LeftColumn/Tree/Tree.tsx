import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import {List, ListItem} from "@mui/material";

export const Tree = () => {
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                Trees
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem sx={{height: '30px !important'}}>123</ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    </div>
}