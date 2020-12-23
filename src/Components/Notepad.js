import { useState } from "react";
import {
  Paper,
  makeStyles,
  Fab,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { green } from "@material-ui/core/colors";
const notes = [
  {
    data: "Lorem ipsum dolor sit am...",
  },
  {
    data: "Lorem ipsum dolor sit am...",
  },
  {
    data: "Lorem ipsum dolor sit am...",
  },
  {
    data: "Lorem ipsum dolor sit am...",
  },
  {
    data: "Lorem ipsum dolor sit am...",
  },
];
const Notepad = () => {
  const classes = useStyles();
  const [viewIn, setViewIn] = useState(false);
  const [Note, setNote] = useState("");
  const [NotePad, setAddNote] = useState(notes);
  const [counter,setCounter] = useState(1);
  const addtoNotes = (e) => {
    e.preventDefault();
    setAddNote((n) => [...n, {data:Note}]);
  };
  const click = () => {
    setCounter((c)=>c+=1)
    if (counter % 2 === 0) {
      setViewIn(false);
    } else {
      setViewIn(true);
    }
  };
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            Notepad
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={viewIn ? { display: "block" } : { display: "none" }}
          className={classes.form}
        >
          <form>
            <FormControl>
              <InputLabel htmlFor="note">Enter Note</InputLabel>
              <Input
                id="note"
                value={Note}
                aria-describedby="input for Notepad"
                onChange={(e) => setNote(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              size="medium"
              style={{ color: "white", backgroundColor: green[500] }}
              onClick={addtoNotes}
              className={classes.button}
            >
              Add
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <List>
            {NotePad.map((note) => (
              <ListItem key={NotePad.indexOf(note)}>
                <ListItemText>
                  <Typography variant="subtitle1">
                    <strong>Title</strong>:&nbsp;{note.data}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Fab
            aria-label="add"
            className={classes.floatingButton}
            onClick={click}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Notepad;

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 15,
    padding: "3%",
    height: "fitContent",
  },
  title: {
    color: "#593636",
  },
  floatingButton: {
    backgroundColor: "#ff6c40",
    color: "#ffffff",
    left: "75%",
    bottom: "5%",
  },
  form:{
      marginLeft:"3%",
      maxHeight: 300,
      overflowY: "auto",
  },
  button:{
      textAlign: "center",
      marginLeft: "2%",
  },
}));
