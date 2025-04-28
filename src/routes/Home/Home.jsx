import { useEffect } from "react";
import { Navbar, Persona, Table, Wallet } from "../../components";
import useAxios from "../../helpers/useAxios";

function Home() {
    const [{ loading: getUserLoading, data: getUserData }] =
        useAxios(
            {
                method: "GET",
                url: "http://localhost:3000/user",
            },
            { manual: false }
        );

    useEffect(() => {
        if (getUserData) {
            console.log(getUserData);

        }
    }, [getUserData])

    return (
        <div className="bg-white">
            {getUserData ? (
                <>
                    {/* Persona */}
                    < div className="container">
                        <Persona name={getUserData.name} />
                    </div>

                    {/* Wallet */}
                    <div className="container">
                        <Wallet balance={getUserData.balance} accountNumber={getUserData.accountNumber} currency={getUserData.currency} />
                    </div>
                </>
            ) : getUserLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            ) : (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            )
            }

            {/* Table */}
            <div className="container">
                <Table />
            </div>
        </div >
    );
}

export default Home;