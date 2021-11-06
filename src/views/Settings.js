import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageHero from "../components/PageHero";
import CardSettings from "../components/CardSettings";
import { Container, Grid } from "@material-ui/core";
import {
  PersonOutlineOutlined,
  AppsOutlined,
  PeopleAltOutlined,
  GroupWorkOutlined,
  FavoriteBorderOutlined
} from "@material-ui/icons";
import appRoutes from "../router/routes";

const useStyles = makeStyles(theme => ({
  iconFilled: {
    fontSize: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: "50%"
  },
  iconPrimary: {
    background: theme.palette.primary.main
  },
  iconOrange: {
    background: "orange"
  },
  iconPurple: {
    background: "purple"
  },
  iconTeal: {
    background: "teal"
  },
  iconRed: {
    background: theme.palette.error.main
  }
}));

export default function Settings() {
  const classes = useStyles();
  return (
    <div>
      <PageHero
        title={appRoutes[6].name}
        subtitle={appRoutes[6].description}
        icon={appRoutes[6].icon}
      />
      <Container className="heroOffset contentWrapper" maxWidth="sm">
        <Grid container spacing={2}>
          <CardSettings
            icon={
              <PersonOutlineOutlined
                className={[classes.iconFilled, classes.iconPrimary].join(" ")}
              />
            }
            title="User Account"
            subtitle="A user is a person who utilizes a computer or network service. "
            path="/customers"
          />
          <CardSettings
            icon={
              <AppsOutlined
                className={[classes.iconFilled, classes.iconOrange].join(" ")}
              />
            }
            title="Organization Settings"
            subtitle="Update information regarding your organization."
            path="/customers"
          />
          <CardSettings
            icon={
              <PeopleAltOutlined
                className={[classes.iconFilled, classes.iconPurple].join(" ")}
              />
            }
            title="User Management"
            subtitle="Add, edit and manage users within your system to control RBAC."
            path="/customers"
          />
          <CardSettings
            icon={
              <GroupWorkOutlined
                className={[classes.iconFilled, classes.iconTeal].join(" ")}
              />
            }
            title="Customer Management"
            subtitle="Add, manage, and configure new customers as well as instances and sensors."
            path="/customers"
          />
          <CardSettings
            icon={
              <FavoriteBorderOutlined
                className={[classes.iconFilled, classes.iconRed].join(" ")}
              />
            }
            title="System Status"
            subtitle="Check the health metrics of the system and preform admin actions."
            path="/customers"
          />
        </Grid>
      </Container>
    </div>
  );
}
