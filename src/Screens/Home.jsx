import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      {/* Header */}
      <header className="bg-dark text-white py-4">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <h1 className="h4 m-0">Clicker Game</h1>
          <nav className="d-flex flex-wrap gap-3">
            <Link to="#features" className="text-white text-decoration-none">
              Features
            </Link>
            <Link to="/game" className="text-white text-decoration-none">
              Play
            </Link>
            <Link to="#contact" className="text-white text-decoration-none">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold display-5 mb-3">Welcome to the Clicker Game</h2>
          <p className="lead mb-4">
            Test your clicking skills and dominate the leaderboard.
          </p>
          <Link to="/game" className="btn btn-light btn-lg">
            Play Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Why You'll Love Clicker Game</h3>
          <div className="row gy-4">
            <div className="col-12 col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h5 className="fw-bold">Fast-Paced Fun</h5>
                <p className="text-muted">Click as fast as you can and beat your own records!</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h5 className="fw-bold">Global Leaderboard</h5>
                <p className="text-muted">Compete with players around the world and reach the top.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h5 className="fw-bold">Simple & Addictive</h5>
                <p className="text-muted">Easy to play, hard to master. Perfect for everyone!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Play Section */}
      <section id="play" className="bg-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Start Clicking Now!</h3>
          <p className="text-muted mb-4">
            Hit the button below to begin your journey to become the ultimate clicker.
          </p>
          <Link to="/game" className="btn btn-primary btn-lg">
            Start Clicking
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-3">&copy; 2024 Clicker Game. All rights reserved.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#" className="text-white text-decoration-none">
              Twitter
            </a>
            <a href="#" className="text-white text-decoration-none">
              Facebook
            </a>
            <a href="#" className="text-white text-decoration-none">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
