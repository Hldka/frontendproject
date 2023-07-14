import "./offer-item.scss";

const OfferItem = (props) => {
    // title, desc, direction, icon
    return (
        <div className={`offer-item ${props.direction}`}>
            <div className="icon" title={props.title}>
                {props.icon}
            </div>
            <div className="content">
                <h3 className={props.direction}>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default OfferItem;
