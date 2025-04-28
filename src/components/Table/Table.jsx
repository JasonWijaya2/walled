import React, { useEffect, useState } from "react";
import useAxios from "../../helpers/useAxios";

function Table() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [sortBy, setSortBy] = useState("date");
    const [sortDir, setSortDir] = useState("desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(10);
    const itemsPerPage = 10;

    const buildQueryString = () => {
        let query = `?_limit=${itemsCount}`;

        if (searchTerm) {
            query += `&q=${encodeURIComponent(searchTerm)}`;
        }

        if (filterType && filterType !== "All") {
            query += `&type=${filterType}`;
        }

        if (sortBy) {
            query += `&_sort=${sortBy}&_order=${sortDir}`;
        }

        console.log(query);


        return query;
    };

    const [{ loading: getTransactionLoading, data: getTransactionData }] =
        useAxios(
            {
                method: "GET",
                url: `http://localhost:3000/transactions${buildQueryString()}`,
            },
            { manual: false }
        );


    useEffect(() => {
        console.log(getTransactionLoading);

    })
    // Pagination logic
    const totalPages = Math.ceil(getTransactionData?.length / itemsPerPage);
    const paginatedTransactions = getTransactionData?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Search logic
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleItemsCountChange = (e) => {
        setItemsCount(e.target.value)
        setCurrentPage(1)
    }

    const handleTypeFilterChange = (e) => {
        setFilterType(e.target.value);
        setCurrentPage(1);
    };

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
    }

    const handleSortDirChange = (e) => {
        setSortDir(e.target.value);
        setCurrentPage(1);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="container my-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <input
                        type="text"
                        className="form-control w-25"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="d-flex flex-row gap-4">
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <label htmlFor="">Show last</label>
                            <select className="form-select" value={itemsCount} onChange={handleItemsCountChange}>
                                <option value="10">10 Transactions</option>
                                <option value="5">5 Transactions</option>
                            </select>
                        </div>
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <label htmlFor="">Type</label>
                            <select className="form-select" value={filterType} onChange={handleTypeFilterChange}>
                                <option value="All">All</option>
                                <option value="Transfer">Transfer</option>
                                <option value="Topup">Topup</option>
                            </select>
                        </div>
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <label htmlFor="">Sort By</label>
                            <select className="form-select" value={sortBy} onChange={handleSortByChange}>
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                                <option value="type">Type</option>
                            </select>
                            <select className="form-select" value={sortDir} onChange={handleSortDirChange}>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>
                    </div>
                </div>
                {getTransactionLoading === false ? (
                    <>
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>Date & Time</th>
                                    <th>Type</th>
                                    <th>From / To</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedTransactions?.map((transaction, index) => (
                                    <tr key={index}>
                                        <td>{transaction.date}</td>
                                        <td>{transaction.type}</td>
                                        <td>
                                            {String(transaction.amount).startsWith("-")
                                                ? transaction.to
                                                : ""}
                                        </td>
                                        <td>{transaction.description}</td>
                                        <td
                                            className={
                                                String(transaction.amount).startsWith("-")
                                                    ? "text-danger fw-bold"
                                                    : "text-success fw-bold"
                                            }
                                        >
                                            {String(transaction.amount).startsWith("-")
                                                ? transaction.amount
                                                : `+${transaction.amount}`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end gap-2">
                            <button
                                className="btn btn-outline-primary"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(1)}
                            >
                                First
                            </button>
                            {[...Array(totalPages || 0)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                className="btn btn-outline-primary"
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(totalPages)}
                            >
                                Last
                            </button>
                        </div>
                    </>
                ) : getTransactionLoading === true ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                )}

            </div>
        </>
    );
}

export default Table;