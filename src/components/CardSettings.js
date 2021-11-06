import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  settingsCard: {
    padding: theme.spacing(3)
  },
  settingsCardActions: {
    marginLeft: "auto"
  }
}));

export default function CardSettings(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.settingsCard}>
        <Grid container spacing={3} alignItems="center" wrap="nowrap">
          <Grid item className="settingsCardIcon">
            {props.icon}
          </Grid>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.subtitle}
            </Typography>
          </Grid>
          <Grid item className={classes.settingsCardActions}>
            <Link to={props.path}>
              <Button variant="outlined">View</Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
