import { Grid } from "@material-ui/core";
import Notepad from "./Notepad";
import BottomInbox from "./BottomInbox";
import Targets from "./Targets";
function BottomLeftContent() {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={5}>
        <Notepad />
      </Grid>
      <Grid item xs={4}>
        <BottomInbox />
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <Targets
              title="This Month"
              percent="+7.8%"
              textColor="#0F26F2"
              graphColor="#0F26F2"
            />
          </Grid>
          <Grid item xs={12}>
            <Targets
              title="Last Month"
              percent="+67.4%"
              textColor="#0F26F2"
              graphColor="#02C88E"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BottomLeftContent;
