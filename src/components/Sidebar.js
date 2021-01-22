import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MoveToInbox, Mail, Dashboard } from "@material-ui/icons";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (open) => {
    setIsOpen(open);
  };

  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>Left</Button>
      <Drawer anchor={"left"} open={isOpen} onClose={() => toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List></List>
          <Divider />
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
