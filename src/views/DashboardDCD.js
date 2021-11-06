import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import GridImage from "../assets/images/Grid.png";
import Graph from "../assets/images/future-dcd-idea.png";
import {
  Add,
  Remove,
  Help,
  FilterList,
  Settings,
  PanTool,
  PlayArrow,
  FastRewind,
  FastForward,
  ZoomIn,
  ZoomOut,
  Loop,
  Search
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  dcdWrapper: {
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    "&:hover $dcdTimeline": {
      opacity: 1,
      bottom: theme.spacing(3)
    }
  },
  dcdBackground: {
    zIndex: 0,
    background: `${
      theme.palette.background.default
    } url(${GridImage}) no-repeat center / cover`,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "2000px",
    width: "100%",
    opacity: 0.7
  },
  dcdMovement: {
    position: "absolute",
    left: theme.spacing(3),
    top: theme.spacing(11),
    display: "flex",
    zIndex: 5
  },
  iconGroup: {
    display: "flex",
    background: theme.palette.grey[900],
    borderRadius: theme.spacing(0.5),
    boxShadow: theme.shadows[5],
    "&:not(:first-child)": {
      marginLeft: theme.spacing(1)
    }
  },
  iconGroupButton: {
    borderRadius: theme.spacing(0.5)
  },
  dcdConfig: {
    position: "absolute",
    right: theme.spacing(3),
    top: theme.spacing(11),
    display: "flex",
    zIndex: 5
  },
  dcdGraph: {
    background: `url(${Graph}) no-repeat center 40% / contain`,
    height: "100%",
    width: "calc(100% - 48px)",
    maxWidth: "1800px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 0
    // display: "none"
  },
  dcdTimeline: {
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    position: "absolute",
    bottom: theme.spacing(2),
    left: "50%",
    transform: "translateX(-50%)",
    width: `calc(100% - ${theme.spacing(6)}px)`,
    // maxWidth: theme.breakpoints.values.xl,
    background: theme.palette.background.paper,
    padding: `0 ${theme.spacing(2)}px`,
    borderRadius: theme.spacing(0.5),
    boxShadow: theme.shadows[5],
    zIndex: 5,
    transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    "& $iconGroup": {
      background: theme.palette.grey[900],
      boxShadow: theme.shadows[2]
    }
  },
  dcdTimelineBar: {
    flex: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    height: theme.spacing(12),
    borderRadius: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function Dashboards() {
  const classes = useStyles();
  return (
    <div className={classes.dcdWrapper}>
      <div className={classes.dcdBackground} />
      <div className={classes.dcdMovement}>
        <div className={classes.iconGroup}>
          <Tooltip title="Zoom In" placement="bottom">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Zoom in"
            >
              <Add />
            </IconButton>
          </Tooltip>
          <Tooltip title="Zoom Out" placement="bottom">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Zoom out"
            >
              <Remove />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.iconGroup}>
          <Tooltip title="Move" placement="bottom">
            <IconButton className={classes.iconGroupButton} aria-label="Move">
              <PanTool />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.dcdConfig}>
        <div className={classes.iconGroup}>
          <Tooltip title="Filter" placement="bottom">
            <IconButton className={classes.iconGroupButton} aria-label="Filter">
              <FilterList />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings" placement="bottom">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Settings"
            >
              <Settings />
            </IconButton>
          </Tooltip>
          <Tooltip title="Help" placement="bottom">
            <IconButton className={classes.iconGroupButton} aria-label="Help">
              <Help />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.dcdGraph} />
      <div className={classes.dcdTimeline}>
        <div className={classes.iconGroup}>
          <Tooltip title="Rewind" placement="top">
            <IconButton className={classes.iconGroupButton} aria-label="Rewind">
              <FastRewind />
            </IconButton>
          </Tooltip>
          <Tooltip title="Play" placement="top">
            <IconButton className={classes.iconGroupButton} aria-label="Play">
              <PlayArrow />
            </IconButton>
          </Tooltip>
          <Tooltip title="Fast Forward" placement="top">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Fast Forward"
            >
              <FastForward />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.iconGroup}>
          <Tooltip title="Loop" placement="top">
            <IconButton className={classes.iconGroupButton} aria-label="Loop">
              <Loop />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.dcdTimelineBar}>
          <Typography variant="overline" color="textSecondary">
            Timebar
          </Typography>
        </div>
        <div className={classes.iconGroup}>
          <Tooltip title="Zoom In" placement="top">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Zoom In"
            >
              <ZoomIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset Zoom" placement="top">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Reset Zoom"
            >
              <Search />
            </IconButton>
          </Tooltip>
          <Tooltip title="Zoom Out" placement="top">
            <IconButton
              className={classes.iconGroupButton}
              aria-label="Zoom Out"
            >
              <ZoomOut />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
