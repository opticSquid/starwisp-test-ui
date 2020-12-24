import { Grid,makeStyles,InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import LargeGraph from "./LargeGraph";
import RightTab from "./RightTab";
import BottomLeftContent from "./BottomLeftContent";
const DashContent = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{color: "#9d9d9d"}} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              fullWidth
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Grid>
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

const useStyles = makeStyles((theme)=>({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#e2e2e2",
    '&:hover': {
      backgroundColor: "#fafafa",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))