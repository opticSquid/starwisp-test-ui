import { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import Notifications from "./Notifications";
const RightTab = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper square style={{ borderRadius: 15}}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        style={{backgroundColor: "#f5f5f5", borderTopRightRadius: 15, borderTopLeftRadius: 15}}
      >
        <Tab label="Notifications" style={{backgroundColor: "#ffffff"}} />
        <Tab label="Events" disabled  />
      </Tabs>
      <div style={{padding: "5%"}}>
        <Notifications />
      </div>
    </Paper>
  );
};

export default RightTab;
