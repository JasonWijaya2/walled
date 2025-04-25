import { Navbar, Persona, Table, Wallet } from "../../components"

function Home() {
    return (
        <div style={{ width: "100%" }}>
            <Navbar />
            <Persona />
            <Wallet />
            <Table />
        </div>
    )
}

export default Home