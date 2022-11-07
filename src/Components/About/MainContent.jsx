import React from "react";
import classes from "./MainContent.module.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className={classes.mainContent}>
      <h3>Hello!</h3>
      <p style={{ padding: "20px 0" }}>
        I'm{" "}
        <span style={{ fontWeight: "700", fontStyle: "italic" }}>
          {" "}
          Jeroni Faith J{" "}
        </span>
        , an undergraduate and a fresher looking for an opportunity to express
        myself. Began exploring the amazing front-end tech back in 2021. I enjoy
        building things that float around the internet. With an ever burning
        passion for development {`(and out of curiosity)`}, I strive to be better at the things I like.
      </p>
      <p style={{margin: '5vh 0'}}>
        If you require any further information, feel free to contact me{" "}
        <span>
          <Link to="/Contact" className={classes.contact}>
            contact
          </Link>
          <CallMadeIcon style={{ color: "lightblue" }} />
        </span>
      </p>
    </div>
  );
};

export default MainContent;
