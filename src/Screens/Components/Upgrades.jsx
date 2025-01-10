import React from 'react';

function Upgrades() {
    const upgrades = [
        { id: 1, name: "Power", price: "$0.99" },
        { id: 2, name: "Exponent", price: "$0.79" },
    ];

    const UpgradeCard = ({ upgrade }) => (
        <div className="col-md-6 mb-3">
            <div className="card border-0 shadow h-100">
                <div className="card-body text-center">
                    <button className="btn btn-success w-100 mb-2">{upgrade.name}</button>
                    <button className="btn btn-outline-dark w-100">{upgrade.price}</button>
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
