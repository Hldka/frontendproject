import "./section-header.scss";

const SectionHeader = (props) => {
    return (
        <div className="section-header">
            <h2>
                {props.title1} <span>{props.title2}</span>
            </h2>
            <p>{props.desc}</p>
        </div>
    );
};

export default SectionHeader;