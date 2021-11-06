import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardDetection from "../components/CardDetection";
import {
  AppBar,
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Paper,
  Slider,
  Tabs,
  Tab,
  Tooltip,
  Toolbar,
  Typography,
  Zoom
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import {
  ClearAll,
  ExpandMore,
  Visibility,
  VisibilityOff,
  MenuOpen
} from "@material-ui/icons";
import PropTypes from "prop-types";
import DemoTable from "../components/DemoTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && { children }}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  toggleButtonText: {
    height: theme.spacing(4),
    display: "flex",
    width: "100%"
  },
  toggleButton: {
    flex: 1
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

export default function DetectionsDetail() {
  const classes = useStyles();
  const [vetted, setVetted] = React.useState(true);

  const handleVetted = (event, newVetted) => {
    if (newVetted !== null) {
      setVetted(newVetted);
    }
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="pageExtendedHeader" />
      <Container
        maxWidth="false"
        className="contentWrapper pageExtendedHeaderOffset"
      >
        <Grid container spacing={3}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={12}>
            <Paper>
              <Toolbar position="fixed" elevation="2">
                <Typography variant="subtitle2" className="toolbarHeader">
                  Summary
                </Typography>
                <IconButton edge="end">
                  <MenuOpen />
                </IconButton>
              </Toolbar>
              <div className="detectionDetailSection">
                <ToggleButtonGroup
                  value={vetted}
                  onChange={handleVetted}
                  exclusive
                  className={classes.toggleButtonText}
                >
                  <ToggleButton className={classes.toggleButton} value={true}>
                    Overview
                  </ToggleButton>
                  <ToggleButton className={classes.toggleButton} value={false}>
                    Breakdown
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Indicator of Compromise
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {dumbDetections[0].title}
                </Typography>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Severity Breakdown
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {dumbDetections[0].title}
                </Typography>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Alerts
                </Typography>
                <div className="ironTooltip">
                  <Typography variant="body2" gutterBottom component="h5">
                    {dumbDetections[0].alertsUnrated +
                      dumbDetections[0].alertsMalicious +
                      dumbDetections[0].alertsSuspicious +
                      dumbDetections[0].alertsBenign}{" "}
                    Alerts
                  </Typography>
                  <div className={classes.barChart}>
                    <span
                      className="background-unrated"
                      style={{
                        flex: `${dumbDetections[0].alertsUnrated}`,
                        display:
                          dumbDetections[0].alertsUnrated > 0 ? "block" : "none"
                      }}
                    />
                    <span
                      className="background-malicious"
                      style={{
                        flex: `${dumbDetections[0].alertsMalicious}`,
                        display:
                          dumbDetections[0].alertsMalicious > 0
                            ? "block"
                            : "none"
                      }}
                    />
                    <span
                      className="background-suspicious"
                      style={{
                        flex: `${dumbDetections[0].alertsSuspicious}`,
                        display:
                          dumbDetections[0].alertsSuspicious > 0
                            ? "block"
                            : "none"
                      }}
                    />
                    <span
                      className="background-benign"
                      style={{
                        flex: `${dumbDetections[0].alertsBenign}`,
                        display:
                          dumbDetections[0].alertsBenign > 0 ? "block" : "none"
                      }}
                    />
                  </div>
                  <div className="tooltip">
                    <Typography variant="caption" component="h6">
                      <span className="dot background-unrated" />
                      {dumbDetections[0].alertsUnrated} Unrated
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-malicious" />
                      {dumbDetections[0].alertsMalicious} Malicious
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-suspicious" />
                      {dumbDetections[0].alertsSuspicious} Suspicious
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-benign" />
                      {dumbDetections[0].alertsBenign} Benign
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Kill Chain Categories
                </Typography>
                <div className="ironTooltip">
                  <Typography variant="body2" gutterBottom component="h5">
                    {dumbDetections[0].killChainRecon +
                      dumbDetections[0].killChainAccess +
                      dumbDetections[0].killChainOther +
                      dumbDetections[0].killChainC2 +
                      dumbDetections[0].killChainAction}{" "}
                    Categories
                  </Typography>
                  <div className={classes.barChart}>
                    <span
                      className="background-recon"
                      style={{
                        flex: `${dumbDetections[0].killChainRecon}`,
                        display:
                          dumbDetections[0].killChainRecon > 0
                            ? "block"
                            : "none"
                      }}
                    />
                    <span
                      className="background-access"
                      style={{
                        flex: `${dumbDetections[0].killChainAccess}`,
                        display:
                          dumbDetections[0].killChainAccess > 0
                            ? "block"
                            : "none"
                      }}
                    />
                    <span
                      className="background-other"
                      style={{
                        flex: `${dumbDetections[0].killChainOther}`,
                        display:
                          dumbDetections[0].killChainOther > 0
                            ? "block"
                            : "none"
                      }}
                    />
                    <span
                      className="background-c2"
                      style={{
                        flex: `${dumbDetections[0].killChainC2}`,
                        display:
                          dumbDetections[0].killChainC2 > 0 ? "block" : "none"
                      }}
                    />
                    <span
                      className="background-action"
                      style={{
                        flex: `${dumbDetections[0].killChainAction}`,
                        display:
                          dumbDetections[0].killChainAction > 0
                            ? "block"
                            : "none"
                      }}
                    />
                  </div>
                  <div className="tooltip">
                    <Typography variant="caption" component="h6">
                      <span className="dot background-recon" />
                      {dumbDetections[0].killChainRecon} Recon
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-access" />
                      {dumbDetections[0].killChainAccess} Access
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-other" />
                      {dumbDetections[0].killChainOther} Other
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-c2" />
                      {dumbDetections[0].killChainC2} Command & Control
                    </Typography>
                    <Typography variant="caption" component="h6">
                      <span className="dot background-action" />
                      {dumbDetections[0].killChainAction} Action
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Participants
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {dumbDetections[0].title}
                </Typography>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Details
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {dumbDetections[0].title}
                </Typography>
              </div>
              <div className="detectionDetailSection">
                <Typography
                  variant="overline"
                  gutterBottom
                  color="textSecondary"
                >
                  Time Range
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {dumbDetections[0].title}
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <Paper>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Alerts" {...a11yProps(0)} />
                <Tab label="Threat Intelligence" {...a11yProps(1)} />
                <Tab label="Correlation Map" {...a11yProps(2)} />
              </Tabs>

              <DemoTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const dumbDetections = [
  {
    title: "vzw.com",
    maxSeverity: 1000,
    alertsUnrated: 40,
    alertsMalicious: 30,
    alertsSuspicious: 20,
    alertsBenign: 10,
    killChainRecon: 1,
    killChainAccess: 2,
    killChainOther: 4,
    killChainC2: 5,
    killChainAction: 3,
    customers: 12,
    hasIntelligence: true,
    isWhitelisted: true,
    firstDetectedDate: "Fri Feb 22, 2019",
    firstDetectedTime: "9:42:00PM",
    lastDetectedDate: "Wed Apr 29, 2019",
    lastDetectedTime: "9:42:00PM"
  }
];
