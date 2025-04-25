import React from "react";
import "../../styles/Table/Table.css";

function Table() {
    const transactions = [
        { date: "20:10 - 30 June 2022", type: "Transfer", fromTo: "Sendy", description: "Fore Coffee", amount: "- 75,000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", fromTo: "Bank Transfer", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", fromTo: "Spongebob", description: "Fore Coffee", amount: "- 75,000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", fromTo: "Bank Transfer", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", fromTo: "Anwar", description: "Beli barang", amount: "- 75,000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", fromTo: "Joko", description: "Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", fromTo: "Joko", description: "Fore Coffee", amount: "- 75,000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", fromTo: "Bank Transfer", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
    ];

    return (
        <div className="table-container">
            <div className="table-controls">
                <input type="text" placeholder="Search" className="search-input" />
                <div className="dropdowns">
                    <select className="dropdown">
                        <option>Last 10 transactions</option>
                    </select>
                    <select className="dropdown">
                        <option>Date</option>
                    </select>
                    <select className="dropdown">
                        <option>Descending</option>
                    </select>
                </div>
            </div>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Type</th>
                        <th>From / To</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.fromTo}</td>
                            <td>{transaction.description}</td>
                            <td className={transaction.amount.startsWith("+") ? "positive" : "negative"}>
                                {transaction.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button className="pagination-btn">First</button>
                <button className="pagination-btn">1</button>
                <button className="pagination-btn active">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn">Next</button>
            </div>
        </div>
    );
}

export default Table;