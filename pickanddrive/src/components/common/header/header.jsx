import { Container } from "react-bootstrap";
import { TopMenu, BottomMenu } from "../../";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <Container className="fixed-top p-0">
            <div className="header">
                <Link to="/" title="GO TO HOMEPAGE">
                    <div className="logo">
                        <img src="/logo.png" alt="Pick & Drive Logo" />
                        <div className="logo_text">
                            PICK & <br /> <span>DRIVE</span>
                            <p>YOUR RELIABLE RIDE, AS LONG AS YOU NEED</p>
                        </div>
                    </div>
                </Link>
                <div className="menus">
                    <TopMenu />
                    <BottomMenu />
                </div>
            </div>
        </Container>
    );
};

export default Header;
