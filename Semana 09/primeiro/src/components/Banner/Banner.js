import React from "react";
import './Banner.css'

import { DescribeCard } from "../DescribeCard";

const Banner = ({data}) => {
  return (
    <div className="containerBanner">
      {data === undefined ? 
        <div className='withoutCard'>
          <h1 className="withoutProject">Sem Projetos</h1>
        </div>
        :  data?.map((item) => (
          <div 
          className="banner-bg" 
          style={{backgroundColor: `${item.bgColorCard}`}}
          >
            <div className="headerBanner">
              <img src={item.icon} alt="" />
              <p 
              className="titleBanner"  
              style={{color: `${item.colorTitle}`}}>
                {item.title}
              </p>
            </div>
            <ul className="describeCards"> 
              {item?.data?.map((item) => (
                  <DescribeCard 
                  name={item.name} 
                  tag={item.tag} 
                  img={item.image}
                  bgColorTag={item.bgColorTag}
                  colorTag={item.colorTag}
                  />
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Banner;
