import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "./Cart/Cart";
import { data } from "autoprefixer";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActor , setSelectedActors] =useState([])
  const []

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);
    const handleOnclickAllActors =(actor)=>{
      const isExist =selectedActor.find(items => items.id ==actor.id) 
      console.log(isExist)
        // console.log(...allActors,actor)
        setSelectedActors([...selectedActor,actor])
    }
        // console.log(selectedActor)

  // console.log(allActors)
  return (
    <div className="container">
      <div className="card-container flex justify-around ">
        <div className="flex flex-wrap gap-5">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
                <div className="card-img">
                  <img
                    className="photo mx-auto"
                    src={actor.image}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold p-2">{actor.name}</h3>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor, obcaecati?
                </p>
                <div className="flex justify-between p-2 text-lg font-semibold">
                  <p>salary:{actor.salary}$</p>
                  <p className="font-normal">{actor.role}</p>
                </div>
                <button onClick={()=>handleOnclickAllActors(actor)} className="bg-yellow-500 rounded-lg p-2">
                  selected
                </button>
              
            </div>
          ))}
        </div>
      <Cart selectedActor={selectedActor}></Cart>
      </div>
    </div>
  );
};

export default Home;
