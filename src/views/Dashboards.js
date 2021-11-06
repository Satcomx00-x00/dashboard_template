import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageHero from "../components/PageHero";
import { Container, Grid } from "@material-ui/core";
import CardDashboard from "../components/CardDashboard";
import appRoutes from "../router/routes";

const useStyles = makeStyles((theme) => ({}));

export default function Dashboards() {
  const classes = useStyles();
  return (
    <div>
      <PageHero
        title={appRoutes[1].name}
        subtitle={appRoutes[1].description}
        icon={appRoutes[1].icon}
      />
      <Container className="heroOffset" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} sm={12}>
            <CardDashboard
              image="https://cdn.dribbble.com/users/629128/screenshots/5734222/full_screen_chart_calibrated_2x_2x.png"
              title="Collective Defense Dashboard"
              description="Get a real time look into collective defense and how your network is being affected by greater threats"
              path="#"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <CardDashboard
              image="https://sites.google.com/site/networkanalysisacourse/_/rsrc/1280393716347/schedule/an-introduction-to-centrality-measures/my%20friendship%20network.jpg"
              title="Detection Correlation Dashboard"
              description="Use the power of our correlations based on our industry leading behavioral analytics and learn about what is affecting your network"
              path="/dcd"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <CardDashboard
              image="https://sites.google.com/site/networkanalysisacourse/_/rsrc/1280393716347/schedule/an-introduction-to-centrality-measures/my%20friendship%20network.jpg"
              title="Detection Correlation Dashboard"
              description="Use the power of our correlations based on our industry leading behavioral analytics and learn about what is affecting your network"
              path="/dcd"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <CardDashboard
              image="https://imgix.bustle.com/uploads/shutterstock/2020/7/8/dc6d2fda-7ca5-427e-ac3b-69ca5d2c8047-shutterstock-1479954467.jpg"
              title="Analyst Landing Page"
              description="Jump straight into your workflow with customizable widgets that allow you to focus on what you need to in order to protect the man"
              path="/springboard"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
