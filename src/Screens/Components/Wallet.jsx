import React, { useState } from 'react';

function Wallet() {
    const [walletAddress, setWalletAddress] = useState("");

    const handleConnectWallet = () => {
        // Simulate wallet connection logic
        const simulatedAddress = "0x1234...abcd"; // Replace with actual logic for connecting to Xion Wallet
        setWalletAddress(simulatedAddress);
    };

    return (
        <div className="container my-4">
            <h4>Wallet</h4>
            <p className="text-secondary">Manage your earnings and transactions here.</p>

            <div className="card border-0 shadow p-4">
                {walletAddress ? (
                    <div className="text-center">
                        <h6 className="text-success">Wallet Connected</h6>
                        <p className="text-muted small mb-1">Address:</p>
                        <p className="text-primary font-monospace">{walletAddress}</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <button
                            className="btn btn-primary w-100"
                            onClick={handleConnectWallet}
                        >
                            Connect Xion Wallet
                        </button>
                        <p className="text-muted small mt-2">Connect your wallet to view your address.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Wallet;
