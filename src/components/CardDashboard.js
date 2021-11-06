import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronRightOutlined } from "@material-ui/icons";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  settingsCard: {
    padding: theme.spacing(3)
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default function CardDashboard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={props.path}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={props.image}
            title={props.title}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link to={props.path}>
          <Button
            size="medium"
            color="primary"
            endIcon={<ChevronRightOutlined />}
          >
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
