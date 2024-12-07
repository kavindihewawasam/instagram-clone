import React, { Component } from "react";
import "./MainContent.css";
import { Grid } from "@material-ui/core";
// import MainPage from "./Components/MainPage/MainPage";
// import StatusBar from "./Components/StatusBar/StatusBar";
import StatusBar from "../StatusBar/StatusBar";

export class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item={2}></Grid>
          <Grid item={6}>
            <div>
              <StatusBar />
              {/* <MainPage /> */}
            </div>
          </Grid>
          <Grid>
            <Grid item={2}></Grid>
          </Grid>
          <Grid>
            <Grid item={2}></Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainContent;
