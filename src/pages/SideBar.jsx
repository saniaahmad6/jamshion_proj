import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./Sidebar.css"
import Login from "./Login";


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
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
    <Login anchor={anchor} toggleDrawer={toggleDrawer} />
    </Box>
  );

  return (
    <div>
      
      {["login"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="Login-person-btn" style={{padding:"0", border:"none", background:"none"}}><img src="./assets/before-login.png" alt="login" onClick={toggleDrawer(anchor, true)}/></button>
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