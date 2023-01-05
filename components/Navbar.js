import Image from "next/image";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-md-3 fixed-top">
                <div className="container">
                    <Image src="/logo.svg" alt="" width={30} height={31} style={{ marginLeft: "20px", marginRight: "10px" }} />
                    <a className="navbar-brand" href="#">pixeltrue</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Case Studies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Platform</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item" id="dropdown">
                                <a className="nav-link" href="#">More<i class="fa fa-caret-down"></i></a>
                                <div className="dropdown-content">
                                    <a href="#">Templates</a>
                                    <a href="#">Illustration</a>
                                    <a href="#">Blog</a>
                                </div>
                            </li>
                            <a className="btn" href="#" id="demo">Schedule Demo</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;