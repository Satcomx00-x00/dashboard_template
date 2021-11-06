import React from "react";
import {
  HomeOutlined,
  DashboardOutlined,
  Search,
  ShowChart,
  TrackChanges,
  SettingsOutlined,
  BugReportOutlined
} from "@material-ui/icons";

const routes = [
  {
    name: "Home",
    path: "/home",
    icon: <HomeOutlined />,
    description: "Welcome to CDP 2.0"
  },
  {
    name: "Dashboards",
    path: "/dashboards",
    icon: <DashboardOutlined />,
    description: "Visualize your data in a meaningful way"
  },
  {
    name: "Detections",
    path: "/detections",
    icon: <TrackChanges />,
    description: "View detections that are potentially compromising"
  },
  {
    name: "Hunt",
    path: "/hunt",
    icon: <Search />,
    description: "Dig through data to identify potential threats"
  },
  {
    name: "Intelligence",
    path: "/intelligence",
    icon: <BugReportOutlined />,
    description: "Catch up on the latest threat intelligence "
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <ShowChart />,
    description: "Create reports to visualize data the way you want to"
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <SettingsOutlined />,
    description: "Tailor CDP to your liking"
  }
];

export default routes;
