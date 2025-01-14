import React, { useEffect, useState } from "react";
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
  const [tempPointsPrice, settempPointsPrice] = useState(50);
  const [tempExponentPrice, settempExponentPrice] = useState(10000);
  const [point, setPoint] = useState(0);
  const [exponent, setExpo] = useState(1.00);
  const [power, setPower] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");
  const [achievements, setAchievements] = useState([
    { id: 1, title: "1,000 Clicks", description: "Click 1000 times", bonus: "+10% points", completed: false },
    { id: 2, title: "10,000 Points", description: "Reach 10,000 total points", bonus: "+10% points", completed: false },
    { id: 3, title: "Impressive Power", description: "Achieve 100 power", bonus: "+10% points", completed: false },
    { id: 4, title: "Gargantuan Exponent", description: "Achieve 1.10 exponent", bonus: "+10% points", completed: false },
  ]);
  

  function handleClick() {
    // Calculate the multiplier based on completed achievements
    const completedAchievements = achievements.filter((achievement) => achievement.completed).length;
    const multiplier = 1 + completedAchievements * 0.1; // 10% per achievement
  
    setCount(count + 1);
  
    // Apply the multiplier to the calculated points
    const temp = Math.pow(power, exponent) * multiplier;
    setPoint(point + temp);
  
    setIsAnimating(true);
  
    setTimeout(() => setIsAnimating(false), 500);
  }

  useEffect(() => {
    if(count === 1000){
      setAchievements((prevAchievements) => 
        prevAchievements.map((achievement, index) =>
          index === 0 ? { ...achievement, completed: true } : achievement
        )
      );
    } else if (point >= 10000){
      setAchievements((prevAchievements) => 
        prevAchievements.map((achievement, index) =>
          index === 1 ? { ...achievement, completed: true } : achievement
        )
      );
    } else if (power >= 100){
      setAchievements((prevAchievements) => 
        prevAchievements.map((achievement, index) =>
          index === 2 ? { ...achievement, completed: true } : achievement
        )
      );
    }else if (exponent >= 1.10){
      setAchievements((prevAchievements) => 
        prevAchievements.map((achievement, index) =>
          index === 3 ? { ...achievement, completed: true } : achievement
        )
      );
    }
  }, [count])

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
    if (upgradeKey === "power") {
      if (point > tempPointsPrice && point-tempPointsPrice >= 0) {
        setPower(power + 1);
        setPoint(point - tempPointsPrice);
        settempPointsPrice(tempPointsPrice + 50);
      } else {
        alert("you do not have enough points")
      }
    } else if (upgradeKey === "exponent") {
      if (point > tempExponentPrice && point-tempExponentPrice >= 0) {
        setExpo(exponent + 0.01);
        setPoint(point - tempExponentPrice);
        settempExponentPrice(tempExponentPrice + 5000);
      } else {
        alert("you do not have enough points")
      }
    }

  };

  const renderDrawerContent = () => {
    switch (drawerContent) {
      case "Upgrades":
        return <Upgrades onUpgrade={handleUpgrade} gg={tempPointsPrice} hh={tempExponentPrice} />;

      case "Achievements":
        return <Gains achievement={achievements}/>;

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
