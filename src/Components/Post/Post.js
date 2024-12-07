import React, { Component } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import postimage from "../../images/post.jpg";

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="post_container">
        {/* {Header} */}

        <div className="post_container">
          <Avatar className="post_image" src="" />
          <div className="post_username">Username</div>
        </div>
        <div>
          <img src={postimage} width={"610px"} />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Post;
