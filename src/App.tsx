import {createTheme, ThemeProvider} from "@mui/material";
import {LeftColumn} from "./LeftColumn";
import {MapContent} from "./RightColumn";
import {Map} from "./Map";
import styles from './App.module.scss';
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {ModalsManager} from "./Modals";

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className={styles.container}>
                    <div className={styles.leftColumn}>
                        <LeftColumn/>
                    </div>
                    <div className={styles.map}>
                        <Map/>
                    </div>
                    <div className={styles.rightColumn}>
                        <MapContent/>
                    </div>
                </div>
                <ModalsManager/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
