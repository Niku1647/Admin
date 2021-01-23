import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  AccountCircle,
  Dashboard,
  DirectionsWalkOutlined,
  Edit,
  EventNote,
  ExpandLess,
  ExpandMore,
  LibraryBooks,
  SettingsPower,
  Textsms,
  VideoCall,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Sidebar() {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);
  return (
    <div>
      <List>
        <div className={classes.toolbar} />
        <Divider />
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Dashboard color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/profile"
          onClick={() => {
            setOpenProfile(!openProfile);
            setOpenCatalog(false);
          }}
        >
          <ListItemIcon>
            <AccountCircle color="primary" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          {openProfile ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Edit color="action" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/visitors">
          <ListItemIcon>
            <DirectionsWalkOutlined color="primary" />
          </ListItemIcon>
          <ListItemText primary="Visitors" />
        </ListItem>
        <ListItem button component={Link} to="/chat">
          <ListItemIcon>
            <Textsms style={{ color: "green" }} />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/catalog"
          onClick={() => {
            setOpenCatalog(!openCatalog);
            setOpenProfile(false);
          }}
        >
          <ListItemIcon>
            <LibraryBooks color="primary" />
          </ListItemIcon>
          <ListItemText primary="Catalog" />
          {openCatalog ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCatalog} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Edit color="action" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/appointment">
          <ListItemIcon>
            <EventNote color="primary" />
          </ListItemIcon>
          <ListItemText primary="Appointment" />
        </ListItem>
        <ListItem button component={Link} to="/videocall">
          <ListItemIcon>
            <VideoCall style={{ color: "green" }} />
          </ListItemIcon>
          <ListItemText primary="VideoCall" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <ListItemIcon>
            <SettingsPower color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
