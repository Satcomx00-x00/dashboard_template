import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "./Breadcrumbs";
import PortalSelect from "./PortalSelect";
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Tooltip,
  Zoom
} from "@material-ui/core";
import { ExpandMore, HelpOutline } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  appHeader: {
    background: "transparent",
    left: "65px",
    width: "calc(100% - 65px)",
    transition: "all .3s ease",
    "&.scrolled": {
      background: theme.palette.background.paper
    }
  },
  orgTag: {
    cursor: "pointer",
    background: theme.palette.divider,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    borderRadius: theme.spacing(0.65),
    marginRight: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function AppHeader(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [navBackground, setNavBackground] = React.useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setNavBackground(false);
      } else {
        setNavBackground(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      className={`${classes.appHeader} ${navBackground ? "scrolled" : ""}`}
      elevation={navBackground ? 4 : 0}
    >
      <Toolbar>
        <span
          className={classes.orgTag}
          onClick={handleMenu}
          id="menu-org"
          elevation={2}
        >
          <span className="dot background-success" />
          <Typography variant="caption">Organization</Typography>
          <ExpandMore fontSize="small" />
        </span>
        <Menu
          id="menu-org"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <PortalSelect />
        </Menu>
        <Typography variant="h6" className={classes.title}>
          <Breadcrumbs />
        </Typography>
        <Tooltip
          title="Help Center"
          placement="bottom"
          TransitionComponent={Zoom}
        >
          <IconButton
            aria-label="Help center"
            aria-controls="menu-help"
            aria-haspopup="true"
            color="inherit"
          >
            <HelpOutline />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Your Account"
          placement="bottom"
          TransitionComponent={Zoom}
        >
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            size="small"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
