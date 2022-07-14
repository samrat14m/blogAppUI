import React, { useEffect, useState } from "react";

import Card from "../Component/Card";
const advImage = './mi-adv.jpg';
const Bollywood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://blog-backend-samrat.herokuapp.com/api/bolly";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Bollywood<hr/></h1>
      <div className="main__container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Bollywood";
            })
            .map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="advertisement">
            <img
              id="adv"
              src={advImage}
              alt=""
            />
          </div>
      </div>
    </div>
  );
};
export default Bollywood;