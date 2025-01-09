import React, { useState } from "react";
import { GrUpgrade } from "react-icons/gr";
import { FaAward, FaCartShopping, FaWallet } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { Drawer, Button, Space } from "antd";

function Game() {
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState(0);
  const [exponent, setExpo] = useState(1.01);
  const [power, setPower] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [drawerContent, setDrawerContent] = useState(""); 

  function handleClick() {
    setCount(count + 1);
    setPoint(Math.pow(count + power, exponent));

    setIsAnimating(true);

    setTimeout(() => setIsAnimating(false), 500);
  }

  function upgradePower() {
    setPower(power + 1);
    setPoint(point - 5);
  }

  function upgradeExpo() {
    setExpo(exponent + 0.01);
  }


  // Open Drawer
  const showDrawer = (content) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  // Close Drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(180deg, #3b2a24, #614036, #8b5d4a, #c9a37e)",
        color: "#fff",
        paddingBottom: "60px",
      }}
    >
      <div className="d-flex flex-column flex-md-row">
        <h3 className="m-2 text-center">
          Clicks
          <br />
          <span className="text-warning">{count}</span>
        </h3>
        <h3 className="m-2 text-center">
          Points
          <br />
          <span className="text-warning">{point.toFixed(2)}</span>
        </h3>
        <h3 className="m-2 text-center">
          Power
          <br />
          <span className="text-warning">{power}</span>
        </h3>
        <h3 className="m-2 text-center">
          Exponent
          <br />
          <span className="text-warning">{exponent.toFixed(2)}</span>
        </h3>
      </div>
      <button
        className={`btn btn-lg btn-warning rounded-circle border ${
          isAnimating ? "bubble-pulse" : ""
        }`}
        style={{ width: "100px", height: "100px" }}
        onClick={handleClick}
      >
        Click
      </button>
      <div className="my-4 d-flex flex-column flex-md-row">
        <button
          className="btn btn-lg btn-outline-danger mx-4 mb-2 mb-md-0"
          onClick={upgradePower}
        >
          Upgrade Power 🚀🚀
        </button>
        <button
          className="btn btn-lg btn-outline-primary mx-4"
          onClick={upgradeExpo}
        >
          Upgrade Exponent 💹
        </button>
      </div>

      <nav className="navbar navbar-expand navbar-light bg-dark rounded fixed-bottom m-2 py-4">
        <div className="container-fluid justify-content-around text-white">
          <a className="nav-link text-center mx-1" 
          onClick={() => showDrawer("Upgrades")}>
            <div>
              <GrUpgrade className="fs-1 m-1 text-warning" />
              <br/><p> Upgrade</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
          onClick={() => showDrawer("Achievements")}
          >
            <div>
              <FaAward className="fs-1 m-1 text-warning" />
              <br/> <p> Gains</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
          onClick={() => showDrawer("Shop")}
          >
            <div>
              <FaCartShopping className="fs-1 m-1 text-warning" />
              <br/> <p> Shop</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1" 
          onClick={() => showDrawer("Help/Guide")}
          >
            <div>
              <IoIosHelpCircle className="fs-1 m-1 text-warning" />
              <br/> <p> Guide</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
          onClick={() => showDrawer("Wallet")}
          >
            <div>
              <FaWallet className="fs-1 m-1 text-warning" />
              <br/> <p> Wallet</p>
            </div>
          </a>
        </div>
        <Drawer
      className=" rounded"
        title={drawerContent}
        placement="bottom"
        onClose={closeDrawer}
        open={isDrawerOpen}
        height="40vh"
      >
        <p>This is the content for the {drawerContent} section.</p>
        <p>Customize this content as needed for {drawerContent}.</p>
      </Drawer>
      </nav>

      
    </div>
  );
}

export default Game;
