import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { IconButton, Tooltip, Typography } from "@material-ui/core";
import GridImage from "../assets/images/Grid.png";
import ReactGridLayoutBasic from "../components/ReactGridLayoutBasic";
// import GridLayout from "react-grid-layout";
// import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const useStyles = makeStyles((theme) => ({
  dcdWrapper: {
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    overflow: "hidden"
  },
  dcdBackground: {
    zIndex: 0,
    background: `${theme.palette.background.default} url(${GridImage}) no-repeat center / cover`,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "2000px",
    width: "100%",
    opacity: 0.9
  },
  layout: {
    marginTop: `${theme.spacing(8)}px`,
    "& div": {
      background: "rgba(255,255,255,.05)",
      border: "1px dashed rgba(255,255,255,.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: theme.spacing(2),
      boxSizing: "border-box"
    }
  }
}));

export default function DashboardAnalyst() {
  const classes = useStyles();
  return (
    <div className={classes.dcdWrapper}>
      <div className={classes.dcdBackground} />
      <ReactGridLayoutBasic className={classes.layout} />
    </div>
  );
}
