import React, { Component } from "react";
import "./StatusBar.css";
import Avatar from "@material-ui/core/Avatar";
import statusimg from "../../images/dp6.png";

export class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="statusbar_container">
          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Kavindi</div>
          </div>

          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Tharushima</div>
          </div>

          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Sarasi</div>
          </div>

          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Senuli</div>
          </div>

          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Methuli</div>
          </div>

          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Kasuni</div>
          </div>

          <div className="statusbar_item">
            <Avatar className="statusbar_status" src={statusimg} />
            <div className="statusbar_text">Kaveesha</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBar;
