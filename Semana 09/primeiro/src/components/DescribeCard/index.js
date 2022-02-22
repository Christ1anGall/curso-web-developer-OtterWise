import React from "react";
import "./styles.css"

export const DescribeCard = ({
  name, 
  tag, 
  img, 
  bg, 
  colorTitle,
  bgColorTag, 
  colorTag}) => {
  return (
    <li className="describeCard" style={{backgroundColor: `${bg}`}}>
        <h2 className="title" style={{color: `${colorTitle}`}}>{name}</h2>
        <div className="abourCard">
          <img className="personImage" src={img} alt="Person"/>
          <p className="tagCard" style={{backgroundColor: `${bgColorTag}`, color: `${colorTag}`}}>
            {tag}
          </p>
        </div>
    </li>
  )
}