import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControl,
  Divider,
  FormGroup,
  FormControlLabel,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  portal: {
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));

export default function AppHeader(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    all: true,
    ensign: false,
    itc: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { all, ensign, itc } = state;

  return (
    <div className={classes.portal}>
      <Typography variant="overline" component="h4">
        Portals
      </Typography>
      <Typography
        variant="caption"
        component="h5"
        gutterBottom
        color="textSecondary"
      >
        Select an organization to view their data
      </Typography>
      <Divider className={classes.divider} />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={all}
                onChange={handleChange}
                name="all"
                size="small"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ensign}
                onChange={handleChange}
                name="ensign"
                size="small"
              />
            }
            label="Ensign"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={itc}
                onChange={handleChange}
                name="itc"
                size="small"
              />
            }
            label="ITC Secure"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
