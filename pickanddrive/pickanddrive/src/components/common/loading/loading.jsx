import { Spinner } from "react-bootstrap";
import "./loading.scss";

const Loading = (props) => {
    const styles = {
        width: props.width,
        height: props.height,
    };

    return (
        <div className="loading" style={styles}>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;
