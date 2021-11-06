import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton, Divider, Tooltip, Zoom } from "@material-ui/core";
import { ChangeHistory } from "@material-ui/icons";
import appRoutes from "../router/routes";

const useStyles = makeStyles(theme => ({
  appDrawer: {
    width: theme.spacing(8) + 1,
    display: "flex"
  },
  appDrawerNav: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    flex: "auto"
  },
  appDrawerNavActive: {
    "& .MuiIconButton-root": {
      color: theme.palette.primary.main,
      position: "relative",
      "&::after": {
        content: "''",
        position: "absolute",
        height: "100%",
        width: "100%",
        background: theme.palette.primary.main,
        opacity: 0.1,
        borderRadius: theme.spacing(0.5)
      }
    }
  },
  appDrawerNavIcon: {
    width: theme.spacing(6),
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  },
  appDrawerNavItem: {
    // "&:last-child": {
    //   marginTop: "auto"
    // },
    "&:nth-child(7)": {
      marginTop: "auto"
    }
  },
  logo: {
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${
      theme.palette.primary.main
    })`
  }
}));

export default function NavDrawer() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" className={classes.appDrawer}>
      <div className={classes.logo}>
        <ChangeHistory fontSize="large" />
      </div>
      <Divider />
      <nav className={classes.appDrawerNav}>
        {appRoutes.map(appRoute => (
          <Tooltip
            title={appRoute.name}
            placement="right"
            TransitionComponent={Zoom}
          >
            <NavLink
              activeClassName={classes.appDrawerNavActive}
              to={appRoute.path}
              key={appRoute.index}
              className={classes.appDrawerNavItem}
            >
              <IconButton className={classes.appDrawerNavIcon}>
                {appRoute.icon}
              </IconButton>
            </NavLink>
          </Tooltip>
        ))}
      </nav>
    </Drawer>
  );
}
