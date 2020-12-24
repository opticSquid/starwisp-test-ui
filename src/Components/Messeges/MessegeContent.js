import Post from "./Post";
import Interaction from "./Interaction";
import {Grid} from "@material-ui/core";
function MessegeContent() {
  return (
   <Grid container direction="column">
     <Grid item xs={12}>
       <Post/>
     </Grid>
     <Grid item xs={12}>
        <Interaction/>
     </Grid>
   </Grid>
  );
}

export default MessegeContent;


