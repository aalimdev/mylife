import React, { useState } from "react";
import "./learning.css";
// import LearningItem from "./LearningItem/LearningItem";

function Learning() {
  const ik = new Date("01/29/2022");
  const fs = new Date("01/20/2022")
  const today = new Date();
  const ikdiff = (today.getTime() - ik.getTime()) / (1000 * 3600 * 24);
  const fsdiff = (today.getTime() - fs.getTime()) / (1000 * 3600 * 24);

  // const [learningItems, setLearningItems] = useState({
  //   link: "https://www.youtube.com/watch?v=cHVhpNrjcPs",
  //   name: "BACK-END - ПУТЬ САМУРАЯ",
  //   startDay: "01/29/2022",
  // });

  return (
    <div className="learning">
      <h3>УЧУ</h3>

      {/* {learningItems.map( (learningItem, index) => (
          <li key={index}>
            <LearningItem link={learningItem.link} name={learningItem.name}/>
          </li>
        ))} */}
      <ul>
        <li>
          <a href="https://www.udemy.com/course/react-redux/learn/lecture/12531158#overview">
            UDEMY - REACT JS & REDUX
          </a>
          <br />
          <span>
            Started on <b> {ik.toDateString()} </b>| Days studying:{" "}
            <b>{Math.round(ikdiff.toString())}</b>
          </span>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=cHVhpNrjcPs">
            {" "}
            BACK-END - ПУТЬ САМУРАЯ
          </a>
          <br />
          <span>
            Started on <b> {ik.toDateString()} </b>| Days studying:{" "}
            <b>{Math.round(ikdiff.toString())}</b>
          </span>
        </li>
        <li>
          <a href="https://fullstackopen.com/en/part0/fundamentals_of_web_apps">
            FULL STACK HELSINKI COURSE
          </a>
          <br />
          <span>
            Started on <b> {ik.toDateString()} </b>| Days studying:{" "}
            <b>{Math.round(fsdiff.toString())}</b>
          </span>
        </li>
        <li>
          <a href="">youtube-amazon clone</a>
        </li>
        <li>
          <a href="">udemy - web development </a>
        </li>
      </ul>
    </div>
  );
}

export default Learning;
