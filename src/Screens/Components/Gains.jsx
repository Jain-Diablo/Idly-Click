import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Gains() {
    // Example achievement data
    const achievements = [
        { id: 1, title: "3 Days of Revolution", description: "Click for 3 consecutive days", bonus: "Unlock Prestige Mode", completed: true },
        { id: 2, title: "Thousand Clicks", description: "Reach 1000 total clicks", bonus: "+200 Revolution Points", completed: false },
        { id: 3, title: "Ten Thousand Clicks", description: "Achieve 10,000 total clicks", bonus: "+500 Revolution Points", completed: true },
        { id: 4, title: "Prestige Initiate", description: "Prestige for the first time", bonus: "Unlock New Click Upgrades", completed: false }
    ];
    

    return (
        <div className="container my-4">
            <div className="text-center">
                <h4>You have {achievements.filter(a => a.completed).length}/{achievements.length} achievements!</h4>
                <p className="text-muted">They give x1.02 Mult to Mult gain.</p>
            </div>
            <div className="row">
                {achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className={`col-6 col-md-4 mb-3`}
                    >
                        <div
                            className={`p-3 rounded ${
                                achievement.completed ? "bg-success text-white" : "bg-dark text-secondary"
                            }`}
                        >
                            <div className="mb-2">
                                <strong>#{achievement.id}</strong>
                            </div>
                            <h6 className="mb-1">{achievement.title}</h6>
                            <p className="mb-1 small">{achievement.description}</p>
                            <span className="small">
                                {achievement.completed ? (
                                    <span className="text-light">{achievement.bonus}</span>
                                ) : (
                                    achievement.bonus
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gains;
