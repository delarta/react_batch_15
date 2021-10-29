import "../css/cursor.css";

import React, { Component } from "react";

class Cursor extends Component {

  componentDidMount() {
    // When the component is mounted, add your DOM listener.
    document.addEventListener("mousemove", this.handleCursor);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    document.removeEventListener("mousemove", this.handleCursor);
  }

  handleCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.setAttribute(
      "style",
      `top: ${e.pageY}px; left:${ e.pageX}px; display: block`
    );
  };

  render() {
    return <div className="cursor"></div>;
  }
}

export default Cursor;