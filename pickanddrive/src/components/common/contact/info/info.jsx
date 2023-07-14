import { AiOutlineMobile } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { constants } from "../../../../constants";
import "./info.scss";

const {
    website: { phone, phone2, mapUrl, address, email },
} = constants;

const contactInfoItems = [
    {
        direct: `tel:${phone}`,
        icon: <BiHeadphone />,
        text: phone,
    },
    {
        direct: `tel:${phone2}`,
        icon: <AiOutlineMobile />,
        text: phone2,
    },
    {
        direct: mapUrl,
        icon: <HiLocationMarker />,
        text: address,
    },
    {
        direct: `mailto:${email}`,
        icon: <MdEmail />,
        text: email,
    },
];

const ContactInfo = () => {
    return (
        <ul className="contact-info">
            {contactInfoItems.map((item) => (
                <li key={item.text} className="icons">
                    <a
                        href={item.direct}
                        target="_blank"
                        rel="noreferrer noopener">
                        {item.icon} {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactInfo;
