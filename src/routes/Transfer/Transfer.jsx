import TransferCard from "../../components/TransferCard/TransferCard"
import useAxios from "../../helpers/useAxios";

function Transfer() {
    const [{ loading: getUserLoading, data: getUserData }] =
        useAxios(
            {
                method: "GET",
                url: "http://localhost:3000/user",
            },
            { manual: false }
        );

    return (
        <>
            {getUserLoading === false && getUserData ? (
                <div className="container-sm">
                    <div className="my-4 ">
                        <h1>Transfer</h1>
                    </div>
                    <TransferCard currency={getUserData.currency} />
                </div>
            ) : getUserLoading === true ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            ) : (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            )}
        </>
    )
}

export default Transfer