import React from "react";
import "../../styles/Wallet/Wallet.css";

function Wallet() {
    return (
        <div className="wallet">
            <div className="wallet-card">
                <div className="account-info">
                    <div className="account-label">Account No.</div>
                    <div className="account-number">100899</div>
                </div>
            </div>
            <div className="wallet-actions">
                <div className="balance-info">
                    <div className="balance-label">Balance</div>
                    <div className="balance-amount">Rp 10.000.000,00</div>
                    <button className="balance-visibility-btn">👁️</button>
                </div>
                <button className="action-btn">+</button>
                <button className="action-btn">✈️</button>
            </div>
        </div>
    );
}

export default Wallet;