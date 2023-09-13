/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  console.log(allActors);

  return (
    <>
      <div>
        <div className="container">
          <div className="home-container">
            <div className="cart-container">
              {allActors.map((actor) => (
                <div className="card">
                  <img src={actor.image} alt="" />
                  <h3>{actor.name}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="salary-writer-div"></div>
                  <button>Select</button>
                </div>
              ))}
            </div>
            <div className="select-card">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
