import { Paper, makeStyles, Grid, Box } from "@material-ui/core";
import { Chart, AreaSeries } from "@devexpress/dx-react-chart-material-ui";
const toRadians = (angle) => {
  return angle * (Math.PI / 180);
};
const Data = () => {
  let dataset = [];
  for (let i = 0; i <= 360; i += 10) {
    dataset.push({ x: i, y: Math.cos(toRadians(i)) });
  }
  return dataset;
};
function BottomInbox() {
  const classes = useStyles();
  const chartData = Data();
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <Paper elevation={5} className={classes.root} square>
          <Chart data={chartData} style={{ maxHeight: 200, maxWidth: 200 }}>
            <AreaSeries valueField="y" argumentField="x" color="#00ff11" />
          </Chart>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.inbox}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h2>Inbox</h2>
            </Grid>
            <Grid item xs={6}>
              <h2>23</h2>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default BottomInbox;

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 15,
  },
  inbox: {
    borderRadius: 15,
    padding: "0%",
  },
}));
