import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import classes from "./Contact.module.css";
import { Link } from "react-router-dom";
import { GitHub } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div>
        <p>
          Whether you have a question or just want to say hi, my inbox is always
          open. Reach out to me through any of the following. Though I'll be
          quick to reply on LinkedIn.
        </p>
      </div>
      <div className={classes.links}>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/jeroni-faith-j/" }}
          target="_blank"
        >
          <LinkedInIcon className={classes.icons} sx={{ fontSize: "50px", color: "#DCD8EE" }} />
        </Link>
        <Link to={{ pathname: "mailto:jeronij10@gmail.com" }} target="_black">
          <EmailIcon className={classes.icons} sx={{ fontSize: "50px", color: "#DCD8EE" }} />
        </Link>
        <a href="tel:+91 6382078248">
          <PhoneIcon className={classes.icons} sx={{ fontSize: "50px", color: "#DCD8EE" }} />
        </a>
        <Link
          to={{ pathname: "https://www.instagram.com/jeronifaith/" }}
          target="_blank"
        >
          <InstagramIcon className={classes.icons} sx={{ fontSize: "50px", color: "#DCD8EE" }} />
        </Link>
        <Link
          to={{ pathname: "https://github.com/JERONIFAITHJ" }}
          target="_blank"
        >
          <GitHubIcon className={classes.icons} sx={{ fontSize: "50px", color: "#DCD8EE" }} />
        </Link>
      </div>
      {/* <table>
        <tbody>
          <tr>
            <td>
              
            </td>
            <td>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/jeroni-faith-j/" }}
                target="_blank"
              >
                <LinkedInIcon sx={{ fontSize: "50px" }} />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <EmailIcon sx={{ fontSize: "50px" }} />
            </td>
            <td>
              <Link
                to={{ pathname: "mailto:jeronij10@gmail.com" }}
                target="_black"
              >
                <EmailIcon sx={{ fontSize: "50px" }} />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <PhoneIcon sx={{ fontSize: "50px" }} />
            </td>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
            <td>
              <Link
                to={{ pathname: "https://www.instagram.com/jeronifaith/" }}
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: "50px" }} />
              </Link>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Contact;
