import { Grid } from "@material-ui/core";
import LargeGraph from "./LargeGraph";
import RightTab from "./RightTab";
const DashContent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LargeGraph />
      </Grid>
      <Grid item xs>
        <RightTab />
      </Grid>
    </Grid>
  );
};

export default DashContent;
