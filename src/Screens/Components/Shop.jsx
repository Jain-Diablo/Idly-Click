import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Shop() {
    const packs = [
        { 
            id: 1, 
            title: "Souls Pack 1", 
            amount: "x2,000 Points", 
            description: "Start your journey with 2,000 Points (1 Xion Coin = 200 Points) to bolster your ascent towards Infinity.", 
            price: "₹99.00" 
        },
        { 
            id: 2, 
            title: "Souls Pack 2", 
            amount: "x11,000 AP", 
            description: "Access 10,000 AP (1 Xion Coin = 50 AP), including a bonus 1,000 AP, to turbocharge your progression and reach new heights.", 
            price: "₹499.00" 
        },
        { 
            id: 3, 
            title: "Souls Pack 3", 
            amount: "x50,000 Xion", 
            description: "Master your destiny with 40,000 Xion Coins, accompanied by an additional 10,000 Xion, for unmatched power in Revolution Idle.", 
            price: "₹1,999.00" 
        },
        { 
            id: 4, 
            title: "Souls Pack 4", 
            amount: "x50,000 Xion", 
            description: "Elevate your gaming experience with no ads interruptions. Claim the Time Flux reward without watching ads.", 
            price: "₹999.00" 
        },
    ];
    
    

    return (
        <div className="container my-4">
            <h5 className="mt-4">Available Packs</h5>
            <div className="row">
                {packs.map((pack) => (
                    <div key={pack.id} className="col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h6 className="card-title">{pack.title}</h6>
                                {pack.amount && <h5 className="text-primary">{pack.amount}</h5>}
                                <p className="small text-muted">{pack.description}</p>
                                <button className="btn btn-success w-100">{pack.price}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Shop;
