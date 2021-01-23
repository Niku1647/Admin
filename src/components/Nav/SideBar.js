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
  Visibility,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <ListItem
              button
              component={Link}
              to="/profile"
              className={classes.nested}
            >
              <ListItemIcon>
                <Visibility color="primary" />
              </ListItemIcon>
              <ListItemText primary="View" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/editprofile"
              className={classes.nested}
            >
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
            <Textsms color="primary" />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem
          button
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
            <ListItem
              button
              component={Link}
              to="/catalog"
              className={classes.nested}
            >
              <ListItemIcon>
                <Visibility color="primary" />
              </ListItemIcon>
              <ListItemText primary="View" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/editcatalog"
              className={classes.nested}
            >
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
            <VideoCall color="primary" />
          </ListItemIcon>
          <ListItemText primary="VideoCall" />
        </ListItem>
        <Divider />
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
