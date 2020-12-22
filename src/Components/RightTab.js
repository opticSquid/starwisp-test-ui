import { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import Notifications from "./Notifications";
const RightTab = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor=""
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Notifications"/>
        <Tab label="Events" disabled/>
      </Tabs>
      <Notifications/>
    </Paper>
  );
};

export default RightTab;
