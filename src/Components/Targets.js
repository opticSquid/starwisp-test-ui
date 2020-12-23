import { Chart, SplineSeries } from "@devexpress/dx-react-chart-material-ui";
import { Paper, Divider, Typography, Grid, makeStyles } from "@material-ui/core";
function toRadians(angle) {
  return angle * (Math.PI / 180);
}
const data = () => {
  let dataset = [];
  for (let i = 0; i <= 90; i += 5) {
    dataset.push({
      x: i,
      y: (Math.exp(-i) * Math.cos(toRadians(2*Math.PI*i))).toFixed(5),
    });
  }
  console.log(dataset);
  return dataset;
};
function Targets(props) {
  const graphdata = data();
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" style={{textAlign: "center"}}>{props.title}</Typography>
          <Divider  />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={2}>
            <Typography variant="h6" style={{color: props.textColor}}>{props.percent}</Typography>
          </Grid>
          <Grid item xs>
            <Chart data={graphdata} style={{ maxHeight: 50, maxWidth: 250 }}>
              <SplineSeries argumentField="x" valueField="y" color={props.graphColor} />
            </Chart>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Targets;
const useStyles = makeStyles(()=>({
    root:{
        borderRadius: 15,
        padding: "3%",
        boxShadow: "0px 4px 7px #ad98fb",
    },
}));