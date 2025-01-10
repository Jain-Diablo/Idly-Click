import React from "react";
import Hero from "./images/click_munk.png"; 
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="text-center">
        <img
          src={Hero}
          alt="Chipmunk Character"
          className="rounded-circle"
          style={{ width: '350px', height: '350px', objectFit: 'cover' }}
        />

        <h1 className="text-white fw-bold mt-4">
          Click Munk
        </h1>

        <p className="text-white mb-4">
          Enter the arena and become legendary
        </p>

        <Link to="/game">
        <button className="btn btn-lg btn-warning d-block mb-4 w-100">
          PLAY GAME
        </button>
        </Link>

        <div className="d-flex justify-content-center my-3">
          <div className="text-center mx-4">
            <p className="text-warning fs-3 fw-bold">24.5M</p>
            <p className="text-secondary text-sm">Players</p>
          </div>
          <div className="text-center">
            <p className="text-warning fs-3 fw-bold">2.8K</p>
            <p className="text-secondary text-sm">Active Now</p>
          </div>
        </div>

        <div className="mt-4">
          {['⚔️', '🎮', '👥', '⚙️'].map((icon, index) => (
            <button
              key={index}
              className="btn btn-lg mx-2"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
