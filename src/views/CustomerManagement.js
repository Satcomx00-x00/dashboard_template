import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputQuickSearch from "../components/InputQuickSearch";
import CardCustomer from "../components/CardCustomer";
import {
  Button,
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControl,
  Grid,
  TextField,
  Paper,
  Slider,
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
  },
  pageActionsButton: {
    height: 55
  }
}));

export default function CustomerManagement() {
  const classes = useStyles();
  const [filters, setFilters] = React.useState(false);
  const [severity, setSeverity] = React.useState(900);

  const toggleFilters = (event, toggle) => {
    setFilters(toggle);
  };

  const updateSeverity = (event, newSeverity) => {
    setSeverity(newSeverity);
  };

  return (
    <div>
      <div className={classes.tabHeader} />
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
              Add Customer
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                  display="block"
                >
                  Customers
                </Typography>
              </Grid>
              {customers.map(customer => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <CardCustomer
                    name={customer.name}
                    status={customer.status}
                    codename={customer.codename}
                    licenseNumber={customer.licenseNumber}
                    logo={customer.logo}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const customers = [
  {
    name: "Google",
    status: "Active",
    codename: "goog",
    licenseNumber: "1234abcd",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name: "Amazon",
    status: "POV",
    codename: "amzn",
    licenseNumber: "2345dvfg",
    logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png"
  },
  {
    name: "Facebook",
    status: "Inactive",
    codename: "fb",
    licenseNumber: "nowucme",
    logo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEU7WZj///88WpdAXZpBX5tFY51FYZ3t7/V6jbgoS48vUJLS2OdSa6M3VZZuhLK2wNf3+fvd4u2Imr9NaKHEzeDv8ffh5uxje6ns7/E4V5oxUpjW3eR7j7Rddank6PHByt6dq8uQoMMjR42VpMCLnbvDzNmsuM20v9FVb6KntdFieqy0v9i8xtyYqMl+kbsdQYosT5qClrY1QXhgAAAE+ElEQVR4nO3dbXuiOBSA4QACBhoE8aVa8XWcqqjd/v8/t6LtzuzsKgdiICfXeb7ONZG7QaMGWmbdGr1/Zqnnei7+PM9Lxz+2/peM3Xyb3WTCDOqiGf98/SXcjs3yXZuI7tu3cOFO2z4cBdlsmr3dhFvPvAm8Nc1GhXA0NnEGiy6zOIsvwo2pM1jkvFtstDNZOIli9m4ykDFvy2ZmC50Z27V9DIrbMa/tQ1CcxzptH4LabIeE2CMh/kiIPxLij4T4IyH+SIg/EuKPhPgjYduJouCa+KdKI+grvMGE7bnpy7U0dV3Psb//5QtdOo6ewsIgvKy72h/DMJn7vj8vSpIkDAeLXr5frvrn6JClrl06lobCYoacQ7+XxLH1oPiSP8+9slnUTih4kHb380e235unQcmAegltwdlhH0J5lxIXl5CLKAdPH0JhwLPcL0fhFXK2rOpDJRTrqMrzD58wCE7VJxCTMHD2dXx4hLzTqwfEIuTpoCYQiTBwawNRCO3ArnuK4hDaQizrAzEIGe8//AiBX8gPiQQQgVCwowwQgVDuHEUgFI7UOaq/UAQnOaD2wuCl2uddhELZKdRdKFzJZ6HuQlv2hVR7IRP133HjEAaHWh/rEQnXJ+mTVG+hCORPUr2F8ouh7kJ+HsoLtd634FW+Xhsm4eLYy/+st9R470nA14rhYHnOUufyzBV/FOi8QxpA39DE+YFxHvxHB9zxbk/IgathEgW82s79v2tReAathmEGOBMf1aJwBQHOM6kJZK0+D0EvpX1ZYHtCIXIAcOCULXeltSdkC4DwxKUfqDVh0AEsh/MDZiFkO2bgSZ+kLQpTwKZ2T3KlKNJbuJQ/SVsUvpQL45XpwmF/Lf9AegvPvPzaw7K0FvpdEgIiobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKst4oQ0UPuGRVAoFv99HByCMPh6MUAT40l+lUKTR/Q7n8m384fLwYITrKO3u4wfnoX+/IWCT+9H/v47RW5cSVQp5v9wg2b78S3HcwnhlvBDwYotbOMzKX0xxC/203ddS9cKEmS4ctLziqxfmgHd1qIUxZJ8ft7BvvDAyXQhZDnEL54DlELcwdEwXHgELPm7hHnLZG2ZhvIJcuYhaeDZeGJku9HemC5PSu7qwCweQ5RC1MIcsh6iFJ9BvMsUs7IMu5McsBC0WmIUx5LMTauH8BXQzBmJhWHoLMHbhArRYYBbuYb/2WqlwpVS4hN31pXSHNOrdLz+W3+gcD/L7Axwj2F1faq9U+P8bzK+tAXd2+d2PByMAb2trTchBwrU0UPurTfBeT2P+FUMkJCE8EiqLhCQER0JlkZCE4EioLBKSEBwJlUVCEoIjobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKouEJARHQmWRkITgSKgsEpIQHAmVRUISgiOhskhIQnAkVBYJSQiOhMoiIQnBkVBZJCQhOBIqi4TPFDpPON7qNSl0n3C81WtO6LLxE463eo0JL77Pifwo1WtM2PnBtkYLRfrGXseTJ5wLVWtKOJnFzPr5jCOuWkNC4W0tZr12p6zxWWxION3EF6H1lk2fctRVakb41+zVKoRtEJsQikkBvAqt0cxp+BVV/V+0EhN3UwBvQiveRp7T5Ps3kPBcX+g46Wx7+4NL7Gu4ePuZpa7XVCwLrfhxF6GoO3w63rx9/6D+BncElkevYj5cAAAAAElFTkSuQmCC"
  },
  {
    name: "Netflix",
    status: "Active",
    codename: "nf&chill",
    licenseNumber: "rustillwatching",
    logo:
      "https://www.vhv.rs/dpng/d/7-79068_netflix-n-logo-transparent-hd-png-download.png"
  },
  {
    name: "IronNet",
    status: "Active",
    codename: "ironnet",
    licenseNumber: "werwatching247",
    logo:
      "https://media.glassdoor.com/sqll/1421071/ironnet-cybersecurity-squarelogo-1496666549788.png"
  }
];
