import { Fragment } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
const arr = [
  {
    color: "#ffd9d9",
    title: "Admin",
    subtitle: "Your faculty uploaded the syllabus.",
  },
  {
    color: "#D9FFE1",
    title: "Student",
    subtitle: "Your faculty uploaded the syllabus.",
  },
  {
    color: "#BA99FF",
    title: "Teacher",
    subtitle: "Your faculty uploaded the syllabus.",
  },
  {
    color: "#F5E764",
    title: "Admin",
    subtitle: "Your faculty uploaded the syllabus.",
  },
  {
    color: "#F5E764",
    title: "Admin",
    subtitle: "Your faculty uploaded the syllabus.",
  },
  {
    color: "#F5E764",
    title: "Admin",
    subtitle: "Your faculty uploaded the syllabus.",
  },
];
const Notifications = () => {
  return (
    <Box component="div" style={{boxShadow:"inset 0px 0px 20px rgba(0, 0, 0, 0.05)"}}>
      <List>
        {arr.map((item) => {
          return (
            <Fragment>
              <ListItem>
                  <div style={{backgroundColor: item.color, height: 100, width: 93, borderWidth:5, borderColor: "#ffffff"}}/>
                <ListItemText style={{marginLeft: 10}}>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="h6">{item.subtitle}</Typography>
                </ListItemText>
              </ListItem>
              <Divider/>
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default Notifications;
