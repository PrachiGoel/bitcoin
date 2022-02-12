// import React from 'react';
import './container.css';

function Container() {
    return <div className="container">
        <div className='leftPart'>
            <div className="card">
                <span>BTC Printer Balance:</span> <span>3190000000 USD</span>
                <span>USD Value:</span><span>497.35 USD</span>

            </div>
            <div className="card">
                <span>Pending Rewards:</span><span>0.01538 WBTC USD</span>
                <span>USD Value:</span><span>497.35 USD</span>
            </div>
            <button className='btn'>Claim WBTC Rewards</button>
        </div>
        <div className='rightPart'>
            <button className='btn'>Connect Wallet</button>
        </div>
    </div>
}

export default Container;