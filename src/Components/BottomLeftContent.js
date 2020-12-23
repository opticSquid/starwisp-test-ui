import {Grid} from "@material-ui/core"
import Notepad from "./Notepad";
import BottomInbox from "./BottomInbox";
import Targets from "./Targets";
function BottomLeftContent() {
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={5}>
                <Notepad/>
            </Grid>
            <Grid item xs={4}>
                <BottomInbox/>
            </Grid>
            <Grid item xs>
                <Targets/>
            </Grid>
        </Grid>
    );
}

export default BottomLeftContent;