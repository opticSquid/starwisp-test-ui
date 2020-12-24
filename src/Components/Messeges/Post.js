import { useState } from "react";
import {
  Paper,
  TextField,
  Grid,
  makeStyles,
  Button,
  IconButton,
  ButtonGroup,
} from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import {useStateValue} from "../../StateProvider";
function Post() {
  const [,dispatch] = useStateValue();
  const classes = useStyles();
  const [Ival, setIval] = useState("");
  const cancel = (e) => {
    e.preventDefault();
    setIval("");
  };
  const submit = (e) =>{
    e.preventDefault();
    dispatch({
      type: "ADD_POST",
      item: {
        data: Ival,
        time: new Date(),
      }
    });
  }
  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ borderRadius: 15 }}>
          <TextField
            id="filled-multiline-static"
            label="Share Something with Your Class"
            multiline
            rows={4}
            variant="filled"
            fullWidth
            value={Ival}
            onChange={(e) => setIval(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={9}>
              <Button
                variant="text"
                style={{ color: "#EF3E36" }}
                type="reset"
                onClick={cancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="row" style={{ textAlign: "right" }}>
                <Grid item xs={6}>
                  <IconButton
                    style={{ color: "#ef3e36", backgroundColor: "#FFC480" }}
                  >
                    <AttachFileIcon />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <ButtonGroup variant="contained" style={{ borderRadius: 11 }}>
                    <Button
                      style={{
                        backgroundColor: "#ef3e36",
                        color: "#ffffff",
                        borderTopLeftRadius: 11,
                        borderBottomLeftRadius: 11,
                      }}
                      type="submit"
                      onClick={submit}
                    >
                      Share
                    </Button>
                    <IconButton
                      style={{
                        color: "#ef3e36",
                        backgroundColor: "#FFC480",
                        borderTopRightRadius: 11,
                        borderBottomRightRadius: 11,
                      }}
                      type="submit"
                      onClick={submit}
                    >
                      <ExpandMoreOutlinedIcon />
                    </IconButton>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Post;
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 15,
    padding: "2%",
  },
}));
