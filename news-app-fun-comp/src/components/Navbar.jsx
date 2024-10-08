import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <strong>
                            News App
                        </strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link" to="/egynews">Egypt News</Link>
                            <Link className="nav-link" to="/usnews">US News</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;