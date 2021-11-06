import React from "react";
import { Typography } from "@material-ui/core";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <Typography
        variant="h6"
        // to={match.url || ""}
        color="textPrimary"
        className="breadcrumb"
      >
        {breadcrumb}
      </Typography>
    ))}
  </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);
