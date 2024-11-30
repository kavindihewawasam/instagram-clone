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
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={inst_image} width="450" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage_logo" src={inst_logo} />

                  <div className="loginPage_signin">
                    <input
                      className="loginpage_text"
                      type="text"
                      placeholder="Phone number, username or email"
                    />
                    <input
                      className="loginpage_text"
                      type="password"
                      placeholder="Password"
                    />
                    <button className="login_button">Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
