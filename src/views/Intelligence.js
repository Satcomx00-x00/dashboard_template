import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputQuickSearch from "../components/InputQuickSearch";
import CardIndicator from "../components/CardIndicator";
import {
  Button,
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControl,
  Grid,
  Paper,
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
  pageActionsButton: {
    height: 55
  },
  searchField: {
    flex: "auto"
  }
}));

export default function Intelligence() {
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
          aria-label="Intelligence Tabs"
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={handleChange}
        >
          <Tab className={classes.ironTabs} label="Indicators" />
          <Tab className={classes.ironTabs} label="Rules" />
          <Tab className={classes.ironTabs} label="Authors" />
          <Tab className={classes.ironTabs} label="Updates" />
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
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.pageActionsButton}
            >
              Add Indicator
            </Button>
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
                  <Typography variant="overline">Indicator Type</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>blah</ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="overline">Source</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>blah</ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="overline">Vetted Status</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>blah</ExpansionPanelDetails>
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
            <CardIndicator indicator="176.119.147.225" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
