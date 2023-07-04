import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Form } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    login: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawerContent = (anchor) => (
    <Box
      sx={{ width:  300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
    
      
      
      
    
    </Box>
  );

  return (
    <div>
      
      {["login"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img src="./assets/before-login.png" alt="login" onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {drawerContent(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}