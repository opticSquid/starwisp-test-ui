import { useState } from "react";
import { useStateValue } from "../../StateProvider";
import Comment from "./Comment";
import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import IMG from "../../IMG.jpeg";
function Interaction() {
  const [{ posts }] = useStateValue();
  const classes = useStyles();
  const [Counter, setCounter] = useState(0);
  const [Hidden, setHidden] = useState(true);
  const time = (post) => {
    let hour = post.time.getHours();
    let time;
    if (hour >= 12) {
      hour = hour - 12;
      time = hour.toString() + ":" + post.time.getMinutes() + "pm";
      return time;
    } else {
      time = hour.toString() + ":" + post.time.getMinutes() + "am";
      return time;
    }
  };
  const comment = () => {
    console.log("came");
    setCounter((c) => (c += 1));
    if (Counter % 2 === 0) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <Grid container direction="column">
      <List>
        {posts.map((post) => (
          <ListItem key={posts.indexOf(post)}>
            <Paper elevation={0} className={classes.paper} onClick={comment}>
              <Grid container direction="row" className={classes.content}>
                <Grid item xs={1}>
                  <Avatar alt="Author Image" src={IMG} />
                </Grid>
                <Grid item xs>
                  <Grid container justify="space-between">
                    <Grid item xs={6}>
                      <Typography component="subtitle1">
                        <strong>Teacher</strong>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ fontSize: 13, textAlign: "right" }}
                    >
                      {time(post)}
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText>{post.data}</ListItemText>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Comment Hidden={Hidden} key={posts.indexOf(post)} />
            </Paper>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default Interaction;
const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",
    borderRadius: 15,
  },
  content: {
    padding: "3%",
  },
}));
