import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Gains({ achievement }) {

    return (
        <div className="container my-4">
            <div className="text-center">
                <h4>You have {achievement.filter(a => a.completed).length}/{achievement.length} achievements!</h4><br></br>
            </div>
            <div className="row">
                {achievement.map((achievement) => (
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
