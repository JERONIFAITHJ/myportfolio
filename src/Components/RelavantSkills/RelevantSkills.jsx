import React from "react";
import classes from "./RelevantSkills.module.css";
const RelevantSkills = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.skills}>
        <div className={classes.tableContainers}>
          <table>
            <thead>
              <tr>
                <th>Core Technical Skills</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Javascript</td>
                <td>Advanced Understanding</td>
              </tr>
              <tr>
                <td>ReactJS</td>
                <td>Advanced Understanding</td>
              </tr>
              <tr>
                <td>HTML5 & CSS3</td>
                <td>Advanced Understanding</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>SQL</td>
                <td>Intermediate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.tableContainers}>
          <table>
            <thead>
              <tr>
                <th>Libraries Known</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bootstrap</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>Material UI</td>
                <td>
                  Intermediate{" "}
                  {`(Can comfortably work around and modify the components)`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default RelevantSkills;
