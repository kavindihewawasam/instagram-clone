import React, { Component } from "react";
import "./LoginPage.css";
import { Grid } from "@material-ui/core";
import inst_image from "../../images/insta_image.svg";
import inst_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";

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

                  <div className="login_ordiv">
                    <div className="login_dividor"></div>
                    <div className="login_or">OR</div>
                    <div className="login_dividor"></div>
                  </div>
                  <div className="login_fb">
                    <img src={fb} width="15px" style={{ marginRight: "5px" }} />
                    Log in with Facebook
                  </div>
                  <div className="login_forgot">Forgot Password</div>
                </div>

                <div className="loginpage_signupoption">
                  <div className="loginpagesignin">
                    Don't have an account? Sign up
                  </div>
                </div>
                <div className="loginPage_signup">Get the app</div>
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
