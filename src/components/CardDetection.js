import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Chip,
  IconButton,
  Grid,
  Paper,
  Tooltip,
  Typography
} from "@material-ui/core";
import { ChevronRight, Check, Fingerprint } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  detectionCard: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    marginBottom: theme.spacing(2),
    borderLeft: `${theme.spacing(0.5)}px solid ${theme.palette.divider}`,
    "&.malicious": {
      borderColor: "#ED3E3B"
    },
    "&.suspicious": {
      borderColor: "#FF9250"
    },
    "&.benign": {
      borderColor: "#45D14C"
    }
  },
  cardActions: {
    marginLeft: "auto"
  },
  barChart: {
    width: "100%",
    display: "flex",
    "& span": {
      height: theme.spacing(0.75),
      borderRadius: theme.spacing(1),
      marginRight: theme.spacing(0.75),
      display: "block"
    }
  }
}));

export default function CardDetection(props) {
  const classes = useStyles();

  return (
    <Paper
      className={`${classes.detectionCard} ${
        props.maxSeverity > 900
          ? "malicious"
          : props.maxSeverity > 500
          ? "suspicious"
          : "benign"
      }`}
    >
      <Grid container spacing={3} alignItems="center" justify="space-between">
        <Grid item md={1} sm={10}>
          <Typography variant="subtitle1">{props.title}</Typography>
        </Grid>
        <Grid item lg={1} sm={2}>
          <Chip variant="outlined" label={props.maxSeverity} size="small" />
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
          <div className="ironTooltip">
            <Typography variant="body2" gutterBottom component="h5">
              {props.alertsUnrated +
                props.alertsMalicious +
                props.alertsSuspicious +
                props.alertsBenign}{" "}
              Alerts
            </Typography>
            <div className={classes.barChart}>
              <span
                className="background-unrated"
                style={{
                  flex: `${props.alertsUnrated}`,
                  display: props.alertsUnrated > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-malicious"
                style={{
                  flex: `${props.alertsMalicious}`,
                  display: props.alertsMalicious > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-suspicious"
                style={{
                  flex: `${props.alertsSuspicious}`,
                  display: props.alertsSuspicious > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-benign"
                style={{
                  flex: `${props.alertsBenign}`,
                  display: props.alertsBenign > 0 ? "block" : "none"
                }}
              />
            </div>
            <div className="tooltip">
              <Typography variant="caption" component="h6">
                <span className="dot background-unrated" />
                {props.alertsUnrated} Unrated
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-malicious" />
                {props.alertsMalicious} Malicious
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-suspicious" />
                {props.alertsSuspicious} Suspicious
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-benign" />
                {props.alertsBenign} Benign
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item lg={2} sm={6} xs={12}>
          <div className="ironTooltip">
            <Typography variant="body2" gutterBottom component="h5">
              {props.killChainRecon +
                props.killChainAccess +
                props.killChainOther +
                props.killChainC2 +
                props.killChainAction}{" "}
              Categories
            </Typography>
            <div className={classes.barChart}>
              <span
                className="background-recon"
                style={{
                  flex: `${props.killChainRecon}`,
                  display: props.killChainRecon > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-access"
                style={{
                  flex: `${props.killChainAccess}`,
                  display: props.killChainAccess > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-other"
                style={{
                  flex: `${props.killChainOther}`,
                  display: props.killChainOther > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-c2"
                style={{
                  flex: `${props.killChainC2}`,
                  display: props.killChainC2 > 0 ? "block" : "none"
                }}
              />
              <span
                className="background-action"
                style={{
                  flex: `${props.killChainAction}`,
                  display: props.killChainAction > 0 ? "block" : "none"
                }}
              />
            </div>
            <div className="tooltip">
              <Typography variant="caption" component="h6">
                <span className="dot background-recon" />
                {props.killChainRecon} Recon
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-access" />
                {props.killChainAccess} Access
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-other" />
                {props.killChainOther} Other
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-c2" />
                {props.killChainC2} Command & Control
              </Typography>
              <Typography variant="caption" component="h6">
                <span className="dot background-action" />
                {props.killChainAction} Action
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={1}>
          <Typography variant="body2" gutterBottom component="h5">
            {props.customers} Customers
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Grid container spacing={1}>
            {props.hasIntelligence && (
              <Grid item>
                <Chip
                  label="Intelligence"
                  size="small"
                  icon={<Fingerprint />}
                />
              </Grid>
            )}
            {props.isWhitelisted && (
              <Grid item>
                <Chip label="Whitelist" size="small" icon={<Check />} />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div className="ironTimelineSmall">
                <span className="dot outlined" />
                <Typography variant="caption" color="textSecondary">
                  <i>2 months</i>
                </Typography>
                <span className="dot outlined" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" display="block">
                {props.firstDetectedDate}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {props.firstDetectedTime}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" display="block">
                {props.lastDetectedDate}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {props.lastDetectedTime}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Link to={props.path}>
            <Tooltip placement="bottom" title="View Summary">
              <IconButton variant="outlined" className="iconButtonOutlined">
                <ChevronRight />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
