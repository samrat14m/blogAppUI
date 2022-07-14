import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";
const advImage = './mi-adv.jpg';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://blog-backend-samrat.herokuapp.com/api/home";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <div className="home__first">
            <h1>The Taj: The Wonder</h1>
          </div>
          <div className="home__sec">
            <Link to="/food">
              <img
                src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=400"
                alt="not foun"
              />
            </Link>
          </div>
        </div>
        <br/><br/>
                <div className="advertisement">
            <img
              id="adv"
              src={advImage}
              alt=""
            />
          </div>
        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <br/>
        
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>

          Latest Articles
        </h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
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
          <br/>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
