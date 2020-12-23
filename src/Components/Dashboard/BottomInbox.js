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
    <Grid container direction="column" spacing={6}>
      <Grid item xs={12}>
        <Box component="div" style={{boxShadow: "0px 4px 7px #ad98fb", borderRadius:15}}>
          <Paper className={classes.root} square>
            <Chart data={chartData} style={{ maxHeight: 230, maxWidth: 300 }}>
              <AreaSeries valueField="y" argumentField="x" color="#00ff11" />
            </Chart>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.inbox}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h4 style={{ verticalAlign: "baseline", marginTop: "25%" }}>
                Inbox
              </h4>
            </Grid>
            <Grid item xs={6}>
              <h1 style={{ verticalAlign: "baseline", textAlign: "right" }}>
                23
              </h1>
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
    padding: "5%",
  },
}));
