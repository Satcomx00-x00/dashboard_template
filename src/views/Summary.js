import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputQuickSearch from "../components/InputQuickSearch";
import CardDetection from "../components/CardDetection";
import {
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControl,
  Grid,
  TextField,
  Paper,
  Slider,
  Tabs,
  Tab,
  Tooltip,
  Typography,
  Zoom
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import {
  ClearAll,
  ExpandMore,
  Visibility,
  VisibilityOff
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  ironTabs: {
    textTransform: "none",
    minWidth: 72,
    marginRight: theme.spacing(2)
  },
  tabHeader: {
    padding: `${theme.spacing(8)}px ${theme.spacing(3)}px 0px`,
    position: "relative",
    zIndex: 1,
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: theme.palette.grey.A400,
      opacity: 0.5,
      zIndex: -1
    }
  },
  pageActions: {
    padding: theme.spacing(3),
    background: "rgba(255,255,255,.025)"
  },
  searchField: {
    flex: "auto"
  }
}));

export default function Detections() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [filters, setFilters] = React.useState(true);
  const [severity, setSeverity] = React.useState(900);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleFilters = (event, toggle) => {
    setFilters(toggle);
  };

  const updateSeverity = (event, newSeverity) => {
    setSeverity(newSeverity);
  };

  return (
    <div>
      <div className={classes.tabHeader}>
        <Tabs
          aria-label="Detections Tabs"
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={handleChange}
        >
          <Tab className={classes.ironTabs} label="Summaries" />
          <Tab className={classes.ironTabs} label="Entities" />
        </Tabs>
      </div>
      <Paper elevation={0} className={classes.pageActions}>
        <Grid container spacing={3} justify="space-between">
          <Grid item>
            <ToggleButtonGroup
              value={filters}
              onChange={toggleFilters}
              exclusive
            >
              <ToggleButton size="large" value={true}>
                <Tooltip
                  title="Show Filters"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <Visibility />
                </Tooltip>
              </ToggleButton>
              <ToggleButton size="large" value={false}>
                <Tooltip
                  title="Hide Filters"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <VisibilityOff />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item>
            <ToggleButtonGroup>
              <Tooltip
                placement="bottom"
                title="Clear Filters"
                TransitionComponent={Zoom}
              >
                <ToggleButton size="large">
                  <ClearAll />
                </ToggleButton>
              </Tooltip>
            </ToggleButtonGroup>
          </Grid>
          <Grid item className={classes.searchField}>
            <FormControl fullWidth>
              <InputQuickSearch />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="false" className="contentWrapper">
        <Grid container spacing={3}>
          {filters && (
            <Grid item xl={2} lg={3} md={4} xs={12}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Filters
              </Typography>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="overline">Severity</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Slider
                    value={severity}
                    onChange={updateSeverity}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={1000}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="overline">Detection Date</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl>
                        <TextField label="From" size="small" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl>
                        <TextField label="To" size="small" />
                      </FormControl>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          )}
          <Grid
            item
            xl={filters ? 10 : 12}
            lg={filters ? 9 : 12}
            md={filters ? 8 : 12}
            xs={12}
          >
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              component="h3"
            >
              Results
            </Typography>
            {dumbDetections.map(detection => (
              <CardDetection
                title={detection.title}
                maxSeverity={detection.maxSeverity}
                alertsUnrated={detection.alertsUnrated}
                alertsMalicious={detection.alertsMalicious}
                alertsSuspicious={detection.alertsSuspicious}
                alertsBenign={detection.alertsBenign}
                killChainRecon={detection.killChainRecon}
                killChainAccess={detection.killChainAccess}
                killChainOther={detection.killChainOther}
                killChainC2={detection.killChainC2}
                killChainAction={detection.killChainAction}
                customers={detection.customers}
                hasIntelligence={detection.hasIntelligence}
                isWhitelisted={detection.isWhitelisted}
                firstDetectedDate={detection.firstDetectedDate}
                firstDetectedTime={detection.firstDetectedTime}
                lastDetectedDate={detection.lastDetectedDate}
                lastDetectedTime={detection.lastDetectedTime}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
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
