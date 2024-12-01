import React, { Component } from "react";
import "./NavBar.css";
import { Grid } from "@material-ui/core/Grid";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar_barCntent"></div>
      </div>
    );
  }
}

export default NavBar;
