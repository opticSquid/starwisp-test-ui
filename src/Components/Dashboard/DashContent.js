import { Grid } from "@material-ui/core";
import LargeGraph from "./LargeGraph";
import RightTab from "./RightTab";
import BottomLeftContent from "./BottomLeftContent";
const DashContent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <LargeGraph />
          </Grid>
          <Grid item xs={12}>
            <BottomLeftContent />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <RightTab />
      </Grid>
    </Grid>
  );
};

export default DashContent;
