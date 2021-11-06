import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageHero from "../components/PageHero";
import { Container, Grid, Typography } from "@material-ui/core";
import appRoutes from "../router/routes";

const useStyles = makeStyles(theme => ({}));

export default function Reports() {
  const classes = useStyles();
  return (
    <div>
      <PageHero
        title={appRoutes[5].name}
        subtitle={appRoutes[5].description}
        icon={appRoutes[5].icon}
      />
      <Container className="heroOffset">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" color="textPrimary">
              Dashboards
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
