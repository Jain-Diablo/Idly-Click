import React from 'react';

function Guide() {
    return (
        <div>
            <div>
                <h4>Guide</h4>
                <p>Welcome to Idley Click! In this game, you'll embark on an exciting journey where your clicks drive the points towards your goal. As you progress, you'll earn Points for every milestone you reach, which will help you unlock powerful upgrades and bonuses. These Points are key to progressing faster and unlocking new features in the game.</p>

                <p>Connect your Xion Wallet to the game to seamlessly store and manage your Xion Coins. Earn Xion Coins by redeeming your Points, which can be used to unlock exclusive in-game content, such as new abilities, upgrades, or boosting your progression speed. The more Points you earn, the greater the rewards you can unlock with Xion Coins!</p>

                <p><b>Here's how it works:</b></p>
                <ul>
                    <li><strong>Earn Points:</strong> As you click and progress, you accumulate Points that can be used to unlock new features.</li>
                    <li><strong>Upgrade</strong> Use in-game points or Xion Coins to purchase powerful upgrades to progress faster.</li>
                    <li><strong>Redeem Points for Xion Coins:</strong> You can convert your hard-earned Points into Xion Coins, which are a valuable in-game currency.</li>
                    <li><strong>Connect Your Wallet:</strong> Link your Xion Wallet to store your Xion Coins and access exclusive rewards.</li>
                </ul>

                <p> <b>Game Mechanics:</b> </p>
                <ul>
                    <li><strong> Power:- </strong> Power or points you will earn per click.</li>
                    <li><strong> Exponent:- </strong> Exponent is used to increase your points gain.</li>
                    <li><strong> Points:-  </strong> It's the in-game currency that can be used to buy upgrades or redeem Xion Coin. It is calculated by calculating power raised to exponent and adding it to the previous points which is calculaded per click is added per click. </li>
                    <li><strong> Achievements:- </strong> These are the milestones that you have to acheive to gain additional bonus. it provides additional 10% points gains per achievement. </li>
                </ul>
                <p><b> Redeem:- </b> You can use you in-game points to redeem Xion coin and withdraw in your Wallet. The first redeem is worth 1 Trillion points and it increases by 25% </p>

                <p>Your goal is to keep clicking, earning Points, and converting them into Xion Coins to maximize your progress. The higher your Xion Coin collection, the greater your ability to unlock special powers, access limited-time events, and progress faster in the game.</p>

                <p>Start your journey now, and remember—every click counts toward shaping your destiny!</p>
            </div>
        </div>
    );
}

export default Guide;
