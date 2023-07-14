import {
    BsFacebook,
    BsHeadset,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { constants } from "../../../../constants";
import "./top-menu.scss";

const {
    website: { email, phone, instagram, facebook, twitter, linkedin, youtube },
} = constants;

const listItems = [
    {
        title: "instagram",
        url: instagram,
        icon: <BsInstagram />,
    },
    {
        title: "facebook",
        url: facebook,
        icon: <BsFacebook />,
    },
    {
        title: "linkedin",
        url: linkedin,
        icon: <BsLinkedin />,
    },
    {
        title: "twitter",
        url: twitter,
        icon: <BsTwitter />,
    },
    {
        title: "youtube",
        url: youtube,
        icon: <BsYoutube />,
    },
];

const TopMenu = () => {
    return (
        <div className="top-menu">
            <ul className="contact-bar">
                <li>
                    <a
                        href={`tel:${phone}`}
                        rel="noreferrer noopener"
                        className="d-none d-sm-inline">
                        <BsHeadset />
                        <span> {phone}</span>
                    </a>
                </li>
                <li>
                    <a
                        href={`mailto:${email}`}
                        rel="noreferrer noopener"
                        className="d-none d-sm-inline">
                        <MdEmail />
                        <span> {email}</span>
                    </a>
                </li>
            </ul>
            <ul className="social-bar">
                {listItems.map((item) => (
                    <li key={item.title} className="d-none d-sm-inline">
                        <a href={item.url} rel="noreferrer noopener">
                            {item.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopMenu;
