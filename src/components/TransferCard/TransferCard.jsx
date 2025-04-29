import React, { useState } from "react";
import { InputTypeComponent } from "../../components";

function TransferCard({ currency }) {
    const [amount, setAmount] = useState(0);

    return (
        <div className="card shadow-sm p-4">
            <div className="card-body">
                {/* To Section */}
                <div className="d-flex flex-row gap-2 align-items-center justify-content-center mb-4">
                    <label className="d-flex form-label fw-bold bg-body-secondary p-3 rounded-2 justify-content-center align-items-center flex-nowrap" style={{ width: "20%" }}>To</label>
                    <select className="form-select" style={{ height: "50px" }}>
                        <option value="900782139">900782139 (Giz)</option>
                        <option value="900782140">900782140 (John)</option>
                        <option value="900782141">900782141 (Doe)</option>
                    </select>
                </div>

                {/* Amount Section */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Amount in ({currency})</label>
                    <InputTypeComponent
                        type="DECIMAL (FLOAT)"
                        value={amount}
                        setValue={setAmount}
                        decimalPlace={2}
                        isObject={false}
                        stringify={false}
                        placeholder="Enter amount"
                        style={{ fontSize: "1.25rem", textAlign: "right" }}
                    />
                    <small className="text-muted">
                        Balance: <span className="text-success fw-bold">IDR 10.000.000</span>
                    </small>
                </div>

                {/* Notes Section */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Notes</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Add a note (optional)"
                    ></textarea>
                </div>

                {/* Transfer Button */}
                <button className="btn btn-primary w-100 fw-bold">Transfer</button>
            </div>
        </div>
    );
}

export default TransferCard;