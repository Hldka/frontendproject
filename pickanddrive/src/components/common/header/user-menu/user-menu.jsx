import { useSelector } from "react-redux";
import "./user-menu.scss";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { constants } from "../../../../constants";

const {
    routes: { login, register, userProfile, userReservations, adminDashboard },
} = constants;

const UserMenu = () => {
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    // TODO: logou fonksiyonu yazılacak
    const handleLogout = () => {};

    return (
        <div className="user-menu">
            {isLoggedIn ? (
                <Dropdown align="end">
                    <Dropdown.Toggle>
                        {user?.firstName || "Guest"} {user?.lastName || ""}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {user?.roles?.includes("Administrator") && (
                            <>
                                <Dropdown.Item as={Link} to={adminDashboard}>
                                    Admin Panel
                                </Dropdown.Item>
                                <Dropdown.Divider />
                            </>
                        )}
                        <Dropdown.Item as={Link} to={userProfile}>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={userReservations}>
                            Reservations
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} onClick={handleLogout}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <>
                    <Button
                        className="text-info text-capitalize"
                        onClick={() => navigate(login)}>
                        login
                    </Button>
                    <Button
                        className="text-info text-capitalize"
                        onClick={() => navigate(register)}>
                        register
                    </Button>
                </>
            )}
        </div>
    );
};

export default UserMenu;
