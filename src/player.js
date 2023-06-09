import React from "react";
import Footer from "./footer";
import "./player.css";
import Sidebar from "./sidebar";
import Body from "./body";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;