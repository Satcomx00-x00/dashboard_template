import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Chip,
  IconButton,
  Grid,
  Paper,
  Tooltip,
  Typography
} from "@material-ui/core";
import { Visibility, DeleteForever, Edit } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  customerCard: {
    boxSizing: "border-box",
    position: "relative",
    marginBottom: theme.spacing(3)
  },
  customerCardActions: {
    boxSizing: "border-box",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    position: "relative",
    zIndex: 1,
    "&::after": {
      content: `''`,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      background: theme.palette.background.default,
      opacity: 0.25,
      zIndex: -1
    }
  },
  customerCardAvatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    margin: "auto",
    background: theme.palette.divider,
    "& .MuiAvatar-img": {
      height: theme.spacing(3),
      width: theme.spacing(3),
      objectFit: "contain"
    }
  },
  customerCardInfo: {
    textAlign: "center",
    padding: `${theme.spacing(3)}px`,
    minHeight: 300,
    justifyContent: "center"
  },
  customerCardStatus: {
    position: "absolute",
    right: theme.spacing(3),
    top: theme.spacing(3),
    background: theme.palette.divider,
    "& .dot": {
      height: theme.spacing(1),
      width: theme.spacing(1),
      margin: `auto ${theme.spacing(0.25)}px auto ${theme.spacing(1)}px`
    }
  }
}));

export default function CardCustomer(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.customerCard}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        direction="column"
        justify="space-around"
        className={classes.customerCardInfo}
      >
        <Chip
          label={props.status}
          size="small"
          className={classes.customerCardStatus}
          icon={
            <span
              className={`dot ${
                props.status === "Active"
                  ? "background-success"
                  : "background-suspicious"
              }`}
            />
          }
        />
        <Grid item xs={12}>
          <Avatar className={classes.customerCardAvatar} src={props.logo} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" display="block">
            {props.name}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            codename: {props.codename} | License #: {props.licenseNumber}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        alignItems="center"
        wrap="nowrap"
        justify="space-around"
        className={classes.customerCardActions}
      >
        <Grid item>
          <Tooltip title="View Customer" placement="bottom">
            <IconButton className="iconButtonOutlined">
              <Visibility />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Edit Customer" placement="bottom">
            <IconButton className="iconButtonOutlined">
              <Edit />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Delete Customer" placement="bottom">
            <IconButton className="iconButtonOutlined">
              <DeleteForever />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
}
