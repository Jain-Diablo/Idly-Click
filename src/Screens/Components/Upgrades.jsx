import React from 'react';

function Upgrades({ onUpgrade, gg, hh }) {
    var temp_price= 10
    const upgrades = [
        { id: 1, name: "Power", price: temp_price, upgradeKey: "power" },
        { id: 2, name: "Exponent", price: temp_price, upgradeKey: "exponent" },
    ];

    const UpgradeCard = ({ upgrade }) => (
        <div className="col-md-6 mb-3">
            <div className="card border-0 shadow h-100">
                <div className="card-body text-center">
                    <button
                        className="btn btn-success w-100 mb-2 "disabled
                    >
                        {upgrade.name}
                    </button>
                    <button className="btn btn-outline-dark w-100"  onClick={() => {onUpgrade(upgrade.upgradeKey)}} >
                        {upgrade.upgradeKey === "power" ? `${(gg).toFixed(2)}` : `${(hh).toFixed(2)}` }
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container my-4">
            <p className="text-secondary">Here you can upgrade your power or exponent.</p>
            <div className="row">
                {upgrades.map((upgrade) => (
                    <UpgradeCard key={upgrade.id} upgrade={upgrade} />
                ))}
            </div>
            <p className="text-center text-secondary mt-3">More upgrades coming soon ⏰</p>
        </div>
    );
}

export default Upgrades;
