import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  Grid,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Add, Done, Launch, Link } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  indicatorActions: {
    marginLeft: "auto",
    "& .iconButtonOutlined": {
      marginRight: theme.spacing(1)
    },
    "& .iconButtonOutlined:last-child": {
      marginRight: 0
    }
  },
  indicatorCard: {
    boxSizing: "border-box",
    position: "relative",
    borderLeft: `4px solid ${theme.palette.primary.main}`
  },
  indicatorChips: {
    marginRight: theme.spacing(1)
  },
  indicatorContent: {
    display: "flex"
  },
  indicatorSection: {
    flex: 1,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    borderRight: `1px solid ${theme.palette.divider}`,
    "&:last-child": {
      borderRight: "none"
    }
  },
  indicatorTitle: {
    margin: 0,
    padding: 0
  },
  toggleButtonText: {
    height: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },
  pulseDivider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default function CardIndicator(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [vetted, setVetted] = React.useState(true);

  const handleCheck = event => {
    setChecked(event.target.checked);
  };

  const handleVetted = (event, newVetted) => {
    if (newVetted !== null) {
      setVetted(newVetted);
    }
  };

  const addLabel = event => {
    console.info("Added label!");
  };

  return (
    <Paper className={classes.indicatorCard}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Checkbox checked={checked} onChange={handleCheck} edge="start" />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              display="inline"
              className={classes.indicatorTitle}
            >
              {props.indicator}
            </Typography>
          </Grid>
          <Grid item>
            <Chip label="IP" size="small" className={classes.indicatorChips} />
            <Chip
              label="Releasable"
              size="small"
              icon={<Done />}
              className={classes.indicatorChips}
            />
          </Grid>
          <Grid item className={classes.indicatorActions}>
            <Typography variant="overline" color="textSecondary">
              Vetted
            </Typography>
            <ToggleButtonGroup
              value={vetted}
              onChange={handleVetted}
              exclusive
              className={classes.toggleButtonText}
            >
              <ToggleButton value={true}>Yes</ToggleButton>
              <ToggleButton value={false}>No</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider />
      <div className={classes.indicatorContent}>
        <div className={classes.indicatorSection}>
          <Typography
            variant="overline"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            Pulses
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar src="https://i1.wp.com/infosecnirvana.com/wp-content/uploads/2015/02/AlienVault-Logo.jpeg" />
            </Grid>
            <Grid item>
              <Typography variant="body1" gutterBottom>
                VCRuntime140.dll Extended via Virus Total
              </Typography>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Chip
                    color="primary"
                    label={
                      <React.Fragment>
                        <Typography variant="overline">Created</Typography>
                      </React.Fragment>
                    }
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption" color="textSecondary">
                    1 hour ago by
                  </Typography>{" "}
                  <Typography variant="caption" color="textPrimary">
                    bartblaze{" | "}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Source:
                  </Typography>{" "}
                  <Typography variant="caption" color="textPrimary">
                    AlienVaultOtx{" | "}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    TLP:
                  </Typography>{" "}
                  <Typography variant="caption" color="textPrimary">
                    White
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.indicatorActions}>
              <IconButton className="iconButtonOutlined">
                <Launch />
              </IconButton>
              <IconButton className="iconButtonOutlined">
                <Link />
              </IconButton>
            </Grid>
          </Grid>
          <Divider className={classes.pulseDivider} />
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar src="https://i1.wp.com/infosecnirvana.com/wp-content/uploads/2015/02/AlienVault-Logo.jpeg" />
            </Grid>
            <Grid item>
              <Typography variant="body1" gutterBottom>
                A Different Pulse
              </Typography>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Chip
                    color="primary"
                    label={
                      <React.Fragment>
                        <Typography variant="overline">Created</Typography>
                      </React.Fragment>
                    }
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption" color="textSecondary">
                    1 hour ago by
                  </Typography>{" "}
                  <Typography variant="caption" color="textPrimary">
                    bartblaze{" | "}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Source:
                  </Typography>{" "}
                  <Typography variant="caption" color="textPrimary">
                    AlienVaultOtx{" | "}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    TLP:
                  </Typography>{" "}
                  <Typography variant="caption" color="textPrimary">
                    White
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.indicatorActions}>
              <IconButton className="iconButtonOutlined">
                <Launch />
              </IconButton>
              <IconButton className="iconButtonOutlined">
                <Link />
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.indicatorSection}>
          <Typography
            variant="overline"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            Labels
          </Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Chip size="small" label="label_item" />
            </Grid>
            <Grid item>
              <Chip size="small" label="label_item" />
            </Grid>
            <Grid item>
              <Chip
                size="small"
                label="Add Label"
                icon={<Add />}
                color="primary"
                onClick={addLabel}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Paper>
  );
}
