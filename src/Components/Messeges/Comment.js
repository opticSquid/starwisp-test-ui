import {
  Grid,
  Avatar,
  TextField,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import IMG from "../../IMG.jpeg";
const Comment = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={classes.comment}
      style={props.Hidden === false ? { display: "flex" } : { display: "none" }}
    >
      <Grid item xs={1}>
        <Avatar alt="Author Image" src={IMG} />
      </Grid>
      <Grid item xs>
        <TextField
          id="filled-multiline-static"
          label="Share Something with Your Class"
          multiline
          rows={1}
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton style={{ marginLeft: "30%" }}>
          <SendIcon style={{ fontSize: 50, color: "#733D47" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Comment;
const useStyles = makeStyles(() => ({
  comment: {
    padding: "1%",
    backgroundColor: "#fafafa",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
}));
