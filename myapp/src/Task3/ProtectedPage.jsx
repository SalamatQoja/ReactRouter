import { Link, useOutletContext, useParams } from "react-router-dom";
import FirstSide from "./FirstSide";


export default function ProtectedPage() {
    const { handlelogin } = useOutletContext();

    return (

        <div style={{ marginLeft: "80px", marginTop: "80px" }}>
            <h1>You most log in to view the page</h1>
            <button onClick={handlelogin}>Log in</button>
        </div>
    );

}


