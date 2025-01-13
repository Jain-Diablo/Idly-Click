import React, { useState } from "react";
import { GrUpgrade } from "react-icons/gr";
import { FaAward, FaCartShopping, FaWallet } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { Drawer } from "antd";
import Upgrades from "./Components/Upgrades"
import Gains from "./Components/Gains";
import Shop from "./Components/Shop";
import Wallet from "./Components/Wallet";
import Guide from "./Components/Guide";


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


  const handleUpgrade = (upgradeKey) => {
    if (upgradeKey === "power" ) {
        setPower(power + 1);
        setPoint(point - 5);
    } else if (upgradeKey === "exponent") {
        setExpo(exponent + 0.01);
        setPoint(point - 10);
    } else {
        alert("Not enough points for upgrade!");
    }
};

  const renderDrawerContent = () => {
    switch (drawerContent) {
      case "Upgrades":
        return <Upgrades onUpgrade={handleUpgrade}/> ;

      case "Achievements":
        return <Gains />;

      case "Shop":
        return <Shop />;

      case "Guide":
        return <Guide />;

      case "Wallet":
        return <Wallet />;

      default:
        return <p>Invalid content</p>;
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(45deg, #1a1a1a, #000000)",
        backgroundImage: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
        color: "#fff",
        paddingBottom: "60px",
      }}
    >
      {/* Points at the top center */}
      <div className=" text-center position-absolute" style={{ top: "10px" }}>
        <h3>
          <span className="text-warning">{point.toFixed(2)}</span>
        </h3>
      </div>

      {/* Power and Exponent at the top right */}
      <div
        className="   position-absolute d-flex flex-column align-items-start"
        style={{ top: "10px", right: "10px" }}
      >
        <p className="text-start">
          Power
          <br />
          <span className="text-warning">{power}</span>
        </p>
        <p className="text-start">
          Exponent
          <br />
          <span className="text-warning">{exponent.toFixed(2)}</span>
        </p>
      </div>

      {/* Click counter and button */}
      <div className="d-flex flex-column align-items-center">
        <h3 className="m-2 text-center">
          Clicks
          <br />
          <span className="text-warning">{count}</span>
        </h3>
        <button
          className={`btn btn-lg btn-warning rounded-circle border ${isAnimating ? "bubble-pulse" : ""
            }`}
          style={{ width: "100px", height: "100px" }}
          onClick={handleClick}
        >
          Click
        </button>
      </div>



      <nav className="navbar navbar-expand navbar-light bg-dark rounded fixed-bottom m-1 py-1">
        <div className="container-fluid justify-content-around text-white">
          <a className="nav-link text-center mx-1"
            onClick={() => showDrawer("Upgrades")}>
            <div>
              <GrUpgrade className="fs-1 m-1 text-warning" />
              <br /><p> Upgrade</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
            onClick={() => showDrawer("Achievements")}
          >
            <div>
              <FaAward className="fs-1 m-1 text-warning" />
              <br /> <p> Gains</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
            onClick={() => showDrawer("Shop")}
          >
            <div>
              <FaCartShopping className="fs-1 m-1 text-warning" />
              <br /> <p> Shop</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
            onClick={() => showDrawer("Guide")}
          >
            <div>
              <IoIosHelpCircle className="fs-1 m-1 text-warning" />
              <br /> <p> Guide</p>
            </div>
          </a>
          <a className="nav-link text-center mx-1"
            onClick={() => showDrawer("Wallet")}
          >
            <div>
              <FaWallet className="fs-1 m-1 text-warning" />
              <br /> <p> Wallet</p>
            </div>
          </a>
        </div>
        <Drawer
          className="rounded bg-light pb-5"
          title={drawerContent}
          placement="bottom"
          onClose={closeDrawer}
          open={isDrawerOpen}
          height="55vh"
        >
          {renderDrawerContent()}
        </Drawer>
      </nav>
    </div>
  );
}

export default Game;
