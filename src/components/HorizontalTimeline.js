import React from "react";
import { makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const useStyles = makeStyles({
  timeline: {
    transform: "rotate(90deg)"
  },
  timelineContentContainer: {
    textAlign: "left"
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50
  },
  timelineIcon: {
    transform: "rotate(-90deg)"
  }
});

export default function BasicTimeline() {
  const classes = useStyles();

  return (
    <Timeline className={classes.timeline}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <span className={classes.timelineContent}>Eat</span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <span className={classes.timelineContent}>Code</span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <span className={classes.timelineContent}>Sleep</span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
