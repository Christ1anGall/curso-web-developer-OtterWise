import React from "react";
import { DescribeCard } from "../DescribeCard";
import Banner from "../Banner/Banner";
// import todoIMG from "../../assets/images/banner/todoIMG.svg";
import "./styles.css"


// name, tag, img, bg, bgTag, colorTag
export const TemplateBanner = ({data}) => {
  return (
    <div>
        <Banner/>
        {data.map((item) => (
        <DescribeCard name={item.name} tag={item.tag} img={item.image}/>
        ))}
    </div>
  )
}