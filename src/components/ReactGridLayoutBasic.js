import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { Typography } from "@material-ui/core";

const ReactGridLayout = WidthProvider(RGL);

export default class BasicLayout extends React.PureComponent {
  static defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 4,
    rowHeight: 30,
    verticalCompact: false,
    onLayoutChange: function () {},
    cols: 4
  };

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout onLayoutChange={this.onLayoutChange} {...this.props}>
        <div key="1" data-grid={{ x: 0, y: 0, w: 1, h: 30, maxH: 30 }}>
          <Typography variant="button" color="textPrimary" className="text">
            1
          </Typography>
        </div>
        <div key="2" data-grid={{ x: 1, y: 0, w: 1, h: 30, maxH: 30 }}>
          <Typography variant="button" color="textPrimary" className="text">
            2
          </Typography>
        </div>
        <div key="3" data-grid={{ x: 2, y: 0, w: 1, h: 30, maxH: 30 }}>
          <Typography variant="button" color="textPrimary" className="text">
            3
          </Typography>
        </div>
        <div
          key="4"
          data-grid={{
            x: 3,
            y: 0,
            w: 1,
            h: 30,
            maxH: 30,
            draggableHandle: ".react-grid-dragHandleExample"
          }}
        >
          <Typography variant="button" color="textPrimary" className="text">
            4
          </Typography>
        </div>
      </ReactGridLayout>
    );
  }
}
