import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import PageHero from "../components/PageHero";
import CardSettings from "../components/CardSettings";
import appRoutes from "../router/routes";

const useStyles = makeStyles(theme => ({
  ".settingsCardIcon .MuiSvgIcon-root": {
    fontSize: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: "50%",
    fill: theme.palette.primary.main
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <PageHero
        title={appRoutes[0].name}
        subtitle={appRoutes[0].description}
        icon={appRoutes[0].icon}
      />
      <Container className="heroOffset" maxWidth="sm">
        <Grid container spacing={2}>
          {appRoutes.slice(1, 7).map(appRoute => (
            <CardSettings
              icon={appRoute.icon}
              title={appRoute.name}
              subtitle={appRoute.description}
              path={appRoute.path}
              className={classes.settingsCard}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
