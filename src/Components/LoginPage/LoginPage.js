import React, { Component } from "react";
import "./LoginPage.css";
import { Grid } from "@material-ui/core";
import inst_image from "../../images/insta_image.svg";
import inst_logo from "../../images/logoinsta.png";

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            Hello
          </Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={inst_image} width="450" />
              </div>

              <div className="loginpage_rightcomponent">
                <img className="loginpage_logo" src={inst_logo} />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            Simplilearn
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
