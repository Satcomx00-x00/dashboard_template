import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageHero from "../components/PageHero";
import { Grid, Typography } from "@material-ui/core";
import appRoutes from "../router/routes";

const useStyles = makeStyles(theme => ({}));

export default function Hunt() {
  const classes = useStyles();
  return (
    <div>
      <PageHero
        title={appRoutes[3].name}
        subtitle={appRoutes[3].description}
        icon={appRoutes[3].icon}
      />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
            Dashboards
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
