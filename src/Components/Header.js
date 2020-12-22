import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import SchoolIcon from "@material-ui/icons/School";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Header = (props) => {
  const classes = useStyles();
  const location = useLocation().pathname;
  return (
    <div className={classes.root}>
      {/* <AppBar position="fixed" className={classes.appBar}>
        
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
        <List>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem
              button
              key={1}
              style={
                location === "/"
                  ? { backgroundColor: "#ffc480" }
                  : { backgroundColor: "transparent" }
              }
            >
              <ListItemIcon>
                <DashboardIcon className={classes.ListColor} />
              </ListItemIcon>
              <ListItemText className={classes.ListColor}>
                Dashboard
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/messeges" style={{ textDecoration: "none" }} >
            <ListItem
              button
              key={2}
              style={
                location === "/messeges"
                  ? { backgroundColor: "#ffc480" }
                  : { backgroundColor: "transparent" }
              }
            >
              <ListItemIcon>
                <SchoolIcon className={classes.ListColor} />
              </ListItemIcon>
              <ListItemText className={classes.ListColor}>Lorem</ListItemText>
            </ListItem>
          </Link>
          <ListItem button key={3}>
            <ListItemIcon>
              <SettingsIcon className={classes.ListColor} />
            </ListItemIcon>
            <ListItemText className={classes.ListColor}>Ipsum</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {props.children}
      </main>
    </div>
  );
};
export default Header;

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FF6C40",
  },
  ListColor: {
    color: "#ffffff",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
