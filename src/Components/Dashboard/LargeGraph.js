import { useState } from "react";
import {
  Chart,
  SplineSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";
import { Paper, Grid, Typography } from "@material-ui/core";

function toRadians(angle) {
  return angle * (Math.PI / 180);
}
const data = () => {
  const dataset = [];
  for (let i = 0; i <= 360; i += 10) {
    dataset.push({ x: i, y: Math.sin(toRadians(i)) });
  }
  return dataset;
};
const LargeGraph = () => {
  const graphdata = data();
  const [Target, setTarget] = useState(undefined);
  return (
    <Paper style={{ borderRadius: 15 }}>
      <Grid container direction="row">
        <Grid item xs={8} style={{ paddingLeft: "3%", paddingRight: "3%" }}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ color: "#593636" }}>
                Sales Report
              </Typography>

              <Typography variant="subtitle1" style={{ color: "#bdbdbd" }}>
                September 2020
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Chart data={graphdata}>
                <ArgumentAxis />
                <ValueAxis />
                <SplineSeries
                  argumentField="x"
                  valueField="y"
                  color="#ffe700"
                />
                <EventTracker />
                <Tooltip targetItem={Target} onTargetItemChange={setTarget} />
              </Chart>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "#FF6C40",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{ color: "white", textAlign: "left", marginLeft: "3%" }}
            >
              17 Sep
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginTop: "10%",
              marginLeft: "3%",
              textAlign: "left",
              padding: "6%",
              backgroundColor: "#ffe700",
              marginRight: "3%",
              borderRadius: 15,
            }}
          >
            <Typography variant="h4">$ 1,204.33</Typography>
            <Typography variant="h6">Revenue</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginTop: "10%",
              marginLeft: "3%",
              textAlign: "left",
              padding: "6%",
              backgroundColor: "#1ffd77",
              marginRight: "3%",
              borderRadius: 15,
            }}
          >
            <Typography variant="h4">33</Typography>
            <Typography variant="h6">Quotations</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LargeGraph;
