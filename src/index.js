// Generic Imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

// View Imports
import Home from "./views/Home";
import Dashboards from "./views/Dashboards";
import Detections from "./views/Detections";
import Hunt from "./views/Hunt";
import Intelligence from "./views/Intelligence";
import Reports from "./views/Reports";
import Settings from "./views/Settings";
import CustomerManagement from "./views/CustomerManagement";
import DashboardDCD from "./views/DashboardDCD";
import DashboardAnalyst from "./views/DashboardAnalyst";
import DetectionsDetail from "./views/DetectionsDetail";

// Component Imports
import AppNavDrawer from "./components/NavDrawer";
import AppHeader from "./components/AppHeader";
import theme from "./theme/theme";
import "./styles.scss";

const useStyles = makeStyles({
  appContent: {
    width: "calc(100% - 65px)",
    marginLeft: "65px"
  }
});

export default function App() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppNavDrawer />
        <main className={classes.appContent}>
          <AppHeader title={"Fuck!"} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/dashboards" component={Dashboards} />
            <Route path="/detections" component={Detections} />
            <Route path="/hunt" component={Hunt} />
            <Route path="/intelligence" component={Intelligence} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
            <Route path="/customers" component={CustomerManagement} />
            <Route path="/dcd" component={DashboardDCD} />
            <Route path="/detection-detail" component={DetectionsDetail} />
            <Route path="/springboard" component={DashboardAnalyst} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
