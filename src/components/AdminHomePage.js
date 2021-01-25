import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBar from "./Nav/SideBar";
import Topbar from "./Nav/Topbar";
import { Route, Switch } from "react-router-dom";
import DashboardScreen from "./pages/DashboardScreen";
import VisitorsScreen from "./pages/VisitorsScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ChatScreen from "./pages/ChatScreen";
import CatalogScreen from "./pages/CatalogScreen";
import AppointmentScreen from "./pages/AppointmentScreen";
import VideocallScreen from "./pages/VideocallScreen";
import ProfileEdit from "./pages/ProfileEdit";
import CatalogEdit from "./pages/CatalogEdit";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function FullNavScreen(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Topbar handleDrawerToggle={handleDrawerToggle} />

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <SideBar />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <SideBar />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/dashboard" exact component={DashboardScreen} />
            <Route path="/visitors" exact component={VisitorsScreen} />
            <Route path="/profile" exact component={ProfileScreen} />
            <Route path="/chat" exact component={ChatScreen} />
            <Route path="/catalog" exact component={CatalogScreen} />
            <Route path="/appointment" exact component={AppointmentScreen} />
            <Route path="/videocall" exact component={VideocallScreen} />
            <Route path="/editprofile" exact component={ProfileEdit} />
            <Route path="/editcatalog" exact component={CatalogEdit} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default FullNavScreen;
